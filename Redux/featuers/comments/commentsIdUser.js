import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API } from '../../../Api/API';
import axios from 'axios';


const initialState = {
    loading: false,
    loadingDelete: false,
    CommentsIdUser: [],
    error: null
}


export const userIdComments = createAsyncThunk('commentsUserID/fetchCommentsUser', async (id) => {
    const res = await axios.get(`${API.MESSAGES.GET}/PublishBy/${id}`)
    return res.data
})


export const userIdDeleteComment = createAsyncThunk('commentsUserID/userDeleteComments', async (id, { dispatch }) => {
    const res = await axios.delete(`${API.MESSAGES.GET}/deleteComment/${id._id}`)
    dispatch(userIdComments(id.Publish_by))
    return res.data
})



const CommentsUserIdSlice = createSlice({
    name: 'CommentsUserID',
    initialState,

    extraReducers: builder => {

        // show all user comment
        builder.addCase(userIdComments.pending, state => {
            state.loading = true
            state.CommentsIdUser = []
            state.error = null
        })
        builder.addCase(userIdComments.fulfilled, (state, action) => {
            state.loading = false
            state.CommentsIdUser = action.payload
            state.error = null
        })
        builder.addCase(userIdComments.rejected, (state, action) => {
            state.loading = false
            state.CommentsIdUser = []
            state.error = action.error.message
        })


        // delete user comment
        builder.addCase(userIdDeleteComment.pending, state => {
            state.loadingDelete = true
            state.error = null
        })
        builder.addCase(userIdDeleteComment.fulfilled, (state, { payload }) => {
            state.loadingDelete = false
            state.CommentsIdUser = [...state.CommentsIdUser, payload];
            state.error = null
        })
        builder.addCase(userIdDeleteComment.rejected, (state, action) => {
            state.loadingDelete = false
            state.error = action.error.message
        })
    }
})



export default CommentsUserIdSlice.reducer;