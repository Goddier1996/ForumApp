import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { LoadTopics } from "../../../Api/LoadDataFromApi";


const initialState = {
    loading: false,
    Topics: [],
    error: ''
}


// Generates pending, fulfilled and rejected action types
export const fetchTopics = createAsyncThunk('topics/fetchTopics', () => {
    return LoadTopics();
})




const allTopicsSlice = createSlice({
    name: 'allTopics',
    initialState,

    extraReducers: builder => {
        builder.addCase(fetchTopics.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchTopics.fulfilled, (state, action) => {
            state.loading = false
            state.Topics = action.payload
            state.error = ''
        })
        builder.addCase(fetchTopics.rejected, (state, action) => {
            state.loading = false
            state.Topics = []
            state.error = action.error.message
        })
    }
})



export default allTopicsSlice.reducer