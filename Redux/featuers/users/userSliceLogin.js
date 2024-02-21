import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ConnectDemoPublicUser } from "../../../Api/AddUpdateDataFromApi"


const initialState = {
    loading: false,
    user: null,
    error: null
}

export const loginDemoUser = createAsyncThunk('user/loginDemoUser', async (setToken, { rejectWithValue }) => {

    const response = await ConnectDemoPublicUser(setToken);

    if (!response) {
        return rejectWithValue(response.data.message);
    }
    return response;
})



const UserSliceLogin = createSlice({
    name: 'user',
    initialState,

    extraReducers: builder => {
        builder.addCase(loginDemoUser.pending, state => {
            state.loading = true;
            state.user = null;
            state.error = null;
        })
        builder.addCase(loginDemoUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        })
        builder.addCase(loginDemoUser.rejected, (state, action) => {
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



export default UserSliceLogin.reducer;