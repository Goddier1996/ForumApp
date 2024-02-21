import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from '../featuers/category/allCategories';
import allTopicsReducer from '../featuers/topics/allTopics'
import topicReducer from '../featuers/topics/topicsIdCategory';
import commentReducer from '../featuers/comments/commentsIdTopic'
import allCommentsReducer from '../featuers/comments/allComments'
import allUsersReducer from '../featuers/users/allUsers'
import userLoginReducer from '../featuers/users/userSliceLogin'
import userIdReducer from "../featuers/users/infoIdUser"
import topicsUserIdReducer from "../featuers/topics/topicsIdUser"
import commentsUserIdReducer from "../featuers/comments/commentsIdUser"


const store = configureStore({
    reducer: {
        category: categoryReducer,
        topics: topicReducer,
        commentTopic: commentReducer,
        allTopics: allTopicsReducer,
        allComments: allCommentsReducer,
        allUsers: allUsersReducer,
        user: userLoginReducer,
        userIdData: userIdReducer,
        topicsUserId: topicsUserIdReducer,
        commentsUserId: commentsUserIdReducer
    }
});


export default store;