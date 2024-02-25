import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AddTopic } from '../../../Api/AddUpdateDataFromApi';


const initialState = {
    loading: false,
    error: ''
}


export const addTopic = createAsyncThunk('topics/addTopics', (data) => {
    return AddTopic(data);
})


const addTopicsSlice = createSlice({
    name: 'addTopic',
    initialState,

    extraReducers: builder => {
        builder.addCase(addTopic.pending, state => {
            state.loading = true
            state.error = ''
        })
        builder.addCase(addTopic.fulfilled, (state, action) => {
            state.loading = false
            state.error = ''
        })
        builder.addCase(addTopic.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})


export default addTopicsSlice.reducer;