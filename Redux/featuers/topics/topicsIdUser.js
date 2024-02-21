import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { LoadTopicsIdUser } from "../../../Api/LoadDataFromApi";


const initialState = {
    loading: false,
    TopicsIdUser: [],
    error: ''
}


export const userIdTopics = createAsyncThunk('topicsUserID/fetchTopicsUser', (id) => {
    return LoadTopicsIdUser(id);
})



const TopicsUserIdSlice = createSlice({
    name: 'topicsUserID',
    initialState,

    extraReducers: builder => {
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
    }
})



export default TopicsUserIdSlice.reducer