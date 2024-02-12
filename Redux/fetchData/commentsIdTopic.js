import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LoadAllMessagesIdTopic } from "../../Api/LoadDataFromApi";


const initialState = {
    loading: false,
    Comments: [],
    error: ''
}


export const fetchCommentsIdTopics = createAsyncThunk('commentsID/fetchComments', (id) => {

    return LoadAllMessagesIdTopic(id);
})



const CommentsSlice = createSlice({
    name: 'commentID',
    initialState,

    extraReducers: builder => {
        builder.addCase(fetchCommentsIdTopics.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchCommentsIdTopics.fulfilled, (state, action) => {
            state.loading = false
            state.Comments = action.payload
            state.error = ''
        })
        builder.addCase(fetchCommentsIdTopics.rejected, (state, action) => {
            state.loading = false
            state.Comments = []
            state.error = action.error.message
        })
    }
})



export default CommentsSlice.reducer;