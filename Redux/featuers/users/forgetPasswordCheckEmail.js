import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ConnectForgetPassword } from '../../../Api/AddUpdateDataFromApi';


const initialState = {
    loading: false,
    user: {},
    error: null
}


export const forgetCheckEmail = createAsyncThunk('forgetPassword/checkEmail', async (Email, { rejectWithValue }) => {

    const response = await ConnectForgetPassword(Email);

    if (!response) {
        return rejectWithValue(response.data.message);
    }
    return response;
})



const ForgetPasswordCheckEmail = createSlice({
    name: 'forgetPassword',
    initialState,

    extraReducers: builder => {
        builder.addCase(forgetCheckEmail.pending, state => {
            state.loading = true;
            state.user = {};
            state.error = null;
        })
        builder.addCase(forgetCheckEmail.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        })
        builder.addCase(forgetCheckEmail.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            console.log(action.error.message);
            if (action.error.message === "Cannot read property 'data' of null") {
                state.error = "Don't Have This Email in Database";
            }
            else {
                state.error = null;
            }
        })
    }
})



export default ForgetPasswordCheckEmail.reducer;