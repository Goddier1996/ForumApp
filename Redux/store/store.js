import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from '../fetchData/allCategories'



const store = configureStore({
    reducer: {
        category: categoryReducer
    }
})

export default store;