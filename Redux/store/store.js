import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from '../fetchData/allCategories';
import topicReducer from '../fetchData/allTopics';


const store = configureStore({
    reducer: {
        category: categoryReducer,
        topics: topicReducer,
    }
})

export default store;