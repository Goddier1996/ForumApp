import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { updateDateUserFromDataBase } from '../../../Api/AddUpdateDataFromApi';


const initialState = {
    loading: false,
    error: null,
}


export const userUpdate = createAsyncThunk('user/userUpdate', async (dataUser, { rejectWithValue }) => {
    const response = await updateDateUserFromDataBase(dataUser);

    if (!response) {
        return rejectWithValue(response.data.message);
    }
    return response;
})


const userUpdateSlice = createSlice({
    name: 'updateUser',
    initialState,

    extraReducers: builder => {
        builder.addCase(userUpdate.pending, state => {
            state.loading = true
            state.error = null;
        })
        builder.addCase(userUpdate.fulfilled, (state, action) => {
            state.loading = false
            state.error = null;
        })
        builder.addCase(userUpdate.rejected, (state, action) => {
            state.loading = false;
            console.log(action.error.message);
            if (action.error.message === "Cannot read property 'data' of null") {
                state.error = "Have This Login or Email in DataBase";
            }
            else {
                state.error = null;
            }
        })
    }
})


export default userUpdateSlice.reducer;