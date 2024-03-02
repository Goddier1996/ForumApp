import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API } from '../../../Api/API';
import axios from 'axios';
import { userIdComments } from '../comments/commentsIdUser';


const initialState = {
    loading: false,
    loadingDeleteTopic: false,
    TopicsIdUser: [],
    error: ''
}


export const userIdTopicsDeleteComments = createAsyncThunk('topicsUserID/deleteTopicUserComments', async (id) => {
    await axios.delete(`${API.MESSAGES.GET}/deleteCommentsTopic/${id}`)
})


export const userIdTopics = createAsyncThunk('topicsUserID/fetchTopicsUser', async (id) => {
    const res = await axios.get(`${API.TOPICS.GET}/PublishBy/${id}`)
    return res.data
})


export const userIdDeleteTopic = createAsyncThunk('topicsUserID/userDeleteTopics', async (id, { dispatch }) => {
    const res = await axios.delete(`${API.TOPICS.GET}/${id._id}`)
    // after user delete topic, delete all comments this topic
    dispatch(await userIdTopicsDeleteComments(id._id))

    // refresh after delete topic and topics comments
    dispatch(await userIdTopics(id.Publish_by))
    dispatch(userIdComments(id.Publish_by))
    return res.data
})



const TopicsUserIdSlice = createSlice({
    name: 'topicsUserID',
    initialState,

    extraReducers: builder => {

        // show all user topics
        builder.addCase(userIdTopics.pending, state => {
            state.loading = true
            state.TopicsIdUser = []
            state.error = ''
        })
        builder.addCase(userIdTopics.fulfilled, (state, action) => {
            state.loading = false
            state.TopicsIdUser = action.payload
            state.error = ''
        })
        builder.addCase(userIdTopics.rejected, (state, action) => {
            state.loading = false
            state.TopicsIdUser = []
            state.error = action.error.message
        })


        // delete user comment
        builder.addCase(userIdDeleteTopic.pending, state => {
            state.loadingDeleteTopic = true
            state.error = null
        })
        builder.addCase(userIdDeleteTopic.fulfilled, (state, action) => {
            state.loadingDeleteTopic = false
            state.TopicsIdUser = [...state.TopicsIdUser, action.payload];
            state.error = null
        })
        builder.addCase(userIdDeleteTopic.rejected, (state, action) => {
            state.loadingDeleteTopic = false
            state.error = action.error.message
        })
    }
})



export default TopicsUserIdSlice.reducer