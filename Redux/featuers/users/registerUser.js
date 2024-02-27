import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AddNewUSer } from '../../../Api/AddUpdateDataFromApi';


const initialState = {
    loading: false,
    error: null,
}


export const userRegister = createAsyncThunk('user/userRegister', async (data, { rejectWithValue }) => {
    const response = await AddNewUSer(data);

    if (!response) {
        return rejectWithValue(response.data.message);
    }
    return response;
})


const userRegisterSlice = createSlice({
    name: 'registerUser',
    initialState,

    extraReducers: builder => {
        builder.addCase(userRegister.pending, state => {
            state.loading = true
            state.error = null;
        })
        builder.addCase(userRegister.fulfilled, (state, action) => {
            state.loading = false
            state.error = null;
        })
        builder.addCase(userRegister.rejected, (state, action) => {
            state.loading = false;
            console.log(action.error.message);
            if (action.error.message === "Cannot read property 'data' of null") {
                state.error = "Have This Login or Email\nin DataBase !";
            }
            else {
                state.error = null;
            }
        })
    }
})


export default userRegisterSlice.reducer;