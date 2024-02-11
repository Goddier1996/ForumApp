import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { LoadCategors } from "../../Api/LoadDataFromApi";


const initialState = {
    loading: false,
    Categories: [],
    error: ''
}


// Generates pending, fulfilled and rejected action types
export const fetchCategories = createAsyncThunk('category/fetchCategories', () => {
    return LoadCategors();
})



const userSlice = createSlice({
    name: 'category',
    initialState,

    extraReducers: builder => {
        builder.addCase(fetchCategories.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.loading = false
            state.Categories = action.payload
            state.error = ''
        })
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.loading = false
            state.Categories = []
            state.error = action.error.message
        })
    }
})


export default userSlice.reducer;