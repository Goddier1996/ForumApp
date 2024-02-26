import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { DeleteFromDataBaseMessage } from '../../../Api/DeleteDataFromApi';


const initialState = {
    loading: false,
    error: ''
}


export const userIdDeleteComment = createAsyncThunk('comment/userDeleteComments', (id) => {
    return DeleteFromDataBaseMessage(id);
})


const userDeleteCommentsSlice = createSlice({
    name: 'deleteComment',
    initialState,

    extraReducers: builder => {
        builder.addCase(userIdDeleteComment.pending, state => {
            state.loading = true
            state.error = ''
        })
        builder.addCase(userIdDeleteComment.fulfilled, (state, action) => {
            state.loading = false
            state.error = ''
        })
        builder.addCase(userIdDeleteComment.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})


export default userDeleteCommentsSlice.reducer;