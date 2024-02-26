import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { DeleteFromDataBaseTopic } from '../../../Api/DeleteDataFromApi';


const initialState = {
    loadingTopic: false,
    error: ''
}


export const userIdDeleteTopic = createAsyncThunk('topics/userDeleteTopics', (id) => {
    return DeleteFromDataBaseTopic(id);
})


const userDeleteTopicsSlice = createSlice({
    name: 'deleteTopic',
    initialState,

    extraReducers: builder => {
        builder.addCase(userIdDeleteTopic.pending, state => {
            state.loadingTopic = true
            state.error = ''
        })
        builder.addCase(userIdDeleteTopic.fulfilled, (state, action) => {
            state.loadingTopic = false
            state.error = ''
        })
        builder.addCase(userIdDeleteTopic.rejected, (state, action) => {
            state.loadingTopic = false
            state.error = action.error.message
        })
    }
})


export default userDeleteTopicsSlice.reducer;