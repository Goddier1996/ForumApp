import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from '../fetchData/allCategories';
import topicReducer from '../fetchData/topicsIdCategory';
import commentReducer from '../fetchData/commentsIdTopic'



const store = configureStore({
    reducer: {
        category: categoryReducer,
        topics: topicReducer,
        commentTopic: commentReducer,
    }
})

export default store;