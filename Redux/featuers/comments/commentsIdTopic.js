import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { API } from "../../../Api/API";


const initialState = {
    loading: false,
    loadingAdd: false,
    Comments: [],
    error: null
}


export const fetchCommentsIdTopics = createAsyncThunk('comment/fetchComments', async (id) => {
    const res = await axios.get(`${API.MESSAGES.GET}/${id}`)
    return res.data
})

export const addComment = createAsyncThunk('comment/addComments', async (data, { dispatch }) => {
    const res = await axios.post(API.MESSAGES.POST, data)
    dispatch(fetchCommentsIdTopics(data.idTopicMessage))
    return res.data
})


const CommentsSlice = createSlice({
    name: 'commentTopic',
    initialState,
    extraReducers: builder => {

        // show all comment
        builder.addCase(fetchCommentsIdTopics.pending, state => {
            state.loading = true
            state.error = null
        })
        builder.addCase(fetchCommentsIdTopics.fulfilled, (state, action) => {
            state.loading = false
            state.Comments = action.payload
            state.error = null
        })
        builder.addCase(fetchCommentsIdTopics.rejected, (state, action) => {
            state.loading = false
            state.Comments = []
            state.error = action.error.message
        })

        // add new comment
        builder.addCase(addComment.pending, state => {
            state.loadingAdd = true
            state.error = null
        })
        builder.addCase(addComment.fulfilled, (state, { payload }) => {
            state.loadingAdd = false
            state.Comments = [...state.Comments, payload];
            state.error = null
        })
        builder.addCase(addComment.rejected, (state, action) => {
            state.loadingAdd = false
            state.error = action.error.message
        })
    }
})


export default CommentsSlice.reducer;