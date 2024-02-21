import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { LoadUserFromDataBase } from '../../../Api/LoadDataFromApi';


const initialState = {
    loading: false,
    UserId: {},
    error: ''
}


export const fetchUserId = createAsyncThunk('userID/fetchUserId', (id) => {
    return LoadUserFromDataBase(id);
})



const UserIdSlice = createSlice({
    name: 'userID',
    initialState,

    extraReducers: builder => {
        builder.addCase(fetchUserId.pending, state => {
            state.loading = true
            state.UserId = {};
            state.error = '';
        })
        builder.addCase(fetchUserId.fulfilled, (state, action) => {
            state.loading = false
            state.UserId = action.payload
            state.error = ''
        })
        builder.addCase(fetchUserId.rejected, (state, action) => {
            state.loading = false
            state.UserId = {}
            state.error = action.error.message
        })
    }
})



export default UserIdSlice.reducer