import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AddMessage } from '../../../Api/AddUpdateDataFromApi';


const initialState = {
    loading: false,
    error: ''
}


export const addComment = createAsyncThunk('comments/addComments', (data) => {
    return AddMessage(data);
})


const addCommentsSlice = createSlice({
    name: 'addComment',
    initialState,

    extraReducers: builder => {
        builder.addCase(addComment.pending, state => {
            state.loading = true
            state.error = ''
        })
        builder.addCase(addComment.fulfilled, (state, action) => {
            state.loading = false
            state.error = ''
        })
        builder.addCase(addComment.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})


export default addCommentsSlice.reducer;