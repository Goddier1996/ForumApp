import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { LoadUsers } from "../../../Api/LoadDataFromApi";


const initialState = {
    loading: false,
    Users: [],
    error: ''
}


// Generates pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk('users/fetchUsers', () => {
    return LoadUsers();
})




const allUsersSlice = createSlice({
    name: 'allUsers',
    initialState,

    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.Users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.Users = []
            state.error = action.error.message
        })
    }
})



export default allUsersSlice.reducer