import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { LoadMessagesIdUser } from "../../../Api/LoadDataFromApi";


const initialState = {
    loading: false,
    CommentsIdUser: [],
    error: ''
}


export const userIdComments = createAsyncThunk('comments UserID/fetchCommentsUser', (id) => {
    return LoadMessagesIdUser(id);
})



const CommentsUserIdSlice = createSlice({
    name: 'CommentsUserID',
    initialState,

    extraReducers: builder => {
        builder.addCase(userIdComments.pending, state => {
            state.loading = true
            state.CommentsIdUser = []
            state.error = ''
        })
        builder.addCase(userIdComments.fulfilled, (state, action) => {
            state.loading = false
            state.CommentsIdUser = action.payload
            state.error = ''
        })
        builder.addCase(userIdComments.rejected, (state, action) => {
            state.loading = false
            state.CommentsIdUser = []
            state.error = action.error.message
        })
    }
})



export default CommentsUserIdSlice.reducer;