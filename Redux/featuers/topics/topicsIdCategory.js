import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API } from '../../../Api/API';
import axios from 'axios';


const initialState = {
    loading: false,
    loadingAdd: false,
    Topics: [],
    error: null
}


export const fetchTopicsIdCategories = createAsyncThunk('topicsID/fetchTopics', async (id) => {
    const res = await axios.get(`${API.TOPICS.GET}/CategoryTopic/${id}`)
    return res.data
})

export const addTopic = createAsyncThunk('topicsID/addTopic', async (data, { dispatch }) => {
    const res = await axios.post(API.TOPICS.POST, data)
    dispatch(fetchTopicsIdCategories(data.codeCategory))
    return res.data
})



const TopicsSlice = createSlice({
    name: 'topicsID',
    initialState,
    extraReducers: builder => {

        // show all topics category
        builder.addCase(fetchTopicsIdCategories.pending, state => {
            state.loading = true
            state.error = null
        })
        builder.addCase(fetchTopicsIdCategories.fulfilled, (state, action) => {
            state.loading = false
            state.Topics = action.payload
            state.error = null
        })
        builder.addCase(fetchTopicsIdCategories.rejected, (state, action) => {
            state.loading = false
            state.Topics = []
            state.error = action.error.message
        })


        // add new comment
        builder.addCase(addTopic.pending, state => {
            state.loadingAdd = true
            state.error = null
        })
        builder.addCase(addTopic.fulfilled, (state, { payload }) => {
            state.loadingAdd = false
            state.Topics = [...state.Topics, payload];
            state.error = null
        })
        builder.addCase(addTopic.rejected, (state, action) => {
            state.loadingAdd = false
            state.error = action.error.message
        })
    }
})



export default TopicsSlice.reducer