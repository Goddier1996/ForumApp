import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { LoadAllTopicsCategory } from "../../../Api/LoadDataFromApi";


const initialState = {
    loading: false,
    Topics: [],
    error: ''
}


export const fetchTopicsIdCategories = createAsyncThunk('topicsID/fetchTopics', (id) => {
    return LoadAllTopicsCategory(id);
})



const TopicsSlice = createSlice({
    name: 'topicsID',
    initialState,

    extraReducers: builder => {
        builder.addCase(fetchTopicsIdCategories.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchTopicsIdCategories.fulfilled, (state, action) => {
            state.loading = false
            state.Topics = action.payload
            state.error = ''
        })
        builder.addCase(fetchTopicsIdCategories.rejected, (state, action) => {
            state.loading = false
            state.Topics = []
            state.error = action.error.message
        })
    }
})



export default TopicsSlice.reducer