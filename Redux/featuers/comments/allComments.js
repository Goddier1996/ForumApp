import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { LoadMessages } from "../../../Api/LoadDataFromApi";


const initialState = {
    loading: false,
    Comments: [],
    error: ''
}


// Generates pending, fulfilled and rejected action types
export const fetchComments = createAsyncThunk('comments/fetchComments', () => {
    return LoadMessages();
})




const allCommentsSlice = createSlice({
    name: 'allComments',
    initialState,

    extraReducers: builder => {
        builder.addCase(fetchComments.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.loading = false
            state.Comments = action.payload
            state.error = ''
        })
        builder.addCase(fetchComments.rejected, (state, action) => {
            state.loading = false
            state.Comments = []
            state.error = action.error.message
        })
    }
})



export default allCommentsSlice.reducer