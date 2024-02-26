import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { DeleteFromDataBaseMessage } from '../../../Api/DeleteDataFromApi';


const initialState = {
    loadingComment: false,
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
            state.loadingComment = true
            state.error = ''
        })
        builder.addCase(userIdDeleteComment.fulfilled, (state, action) => {
            state.loadingComment = false
            state.error = ''
        })
        builder.addCase(userIdDeleteComment.rejected, (state, action) => {
            state.loadingComment = false
            state.error = action.error.message
        })
    }
})


export default userDeleteCommentsSlice.reducer;