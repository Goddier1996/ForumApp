import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ConnectLoginPublicUser } from "../../../Api/AddUpdateDataFromApi"


const initialState = {
    loading: false,
    user: null,
    error: null
}


export const loginUser = createAsyncThunk('user/loginUser', async (user, { rejectWithValue }) => {

    const response = await ConnectLoginPublicUser(user);

    if (!response) {
        return rejectWithValue(response.data.message);
    }
    return response;
})



const UserConnectSliceLogin = createSlice({
    name: 'user',
    initialState,

    extraReducers: builder => {
        builder.addCase(loginUser.pending, state => {
            state.loading = true;
            state.user = null;
            state.error = null;
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            console.log(action.error.message);
            if (action.error.message === "Cannot read property 'data' of null") {
                state.error = "Don't Have This User in Database";
            }
            else {
                state.error = null;
            }
        })
    }
})



export default UserConnectSliceLogin.reducer;