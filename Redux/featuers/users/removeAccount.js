import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API } from '../../../Api/API';
import axios from 'axios';


const initialState = {
    loading: false,
    TopicsIdUser: [],
    error: ''
}



export const deleteUser = createAsyncThunk('removeUser/deleteUser', async (id, { dispatch }) => {
    const res = await axios.delete(`${API.USERS.GET}/${id}`)
    dispatch(await deleteAllTopicsUserId(id))
    dispatch(await deleteAllCommentsUserId(id))
    return res.data
})


export const deleteAllTopicsUserId = createAsyncThunk('removeUser/deleteAllTopicsUserId', async (id) => {
    await axios.delete(`${API.TOPICS.GET}/deleteAllTopicsUser/${id}`)
})


export const deleteAllCommentsUserId = createAsyncThunk('removeUser/deleteAllCommentsUserId', async (id) => {
    await axios.delete(`${API.MESSAGES.GET}/deleteAllCommentsUser/${id}`)
})



const RemoveUserIdSlice = createSlice({
    name: 'removeUserId',
    initialState,

    extraReducers: builder => {

        // show all user topics
        builder.addCase(deleteUser.pending, state => {
            state.loading = true
            state.error = ''
        })
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false
            state.error = ''
        })
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })

    }
})



export default RemoveUserIdSlice.reducer