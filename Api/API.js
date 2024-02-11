import { Config } from "./config";


export const API = {

    CATEGORY: {
        GET: `${Config.API.BASE}/api/category`,
        POST: `${Config.API.BASE}/api/category/add`,
    },


    TOPICS: {
        GET: `${Config.API.BASE}/api/topics`,
        POST: `${Config.API.BASE}/api/topics/NewTopic`,
    },

    MESSAGES: {
        GET: `${Config.API.BASE}/api/messages`,
        POST: `${Config.API.BASE}/api/messages/NewMessage`,
    },

    USERS: {
        GET: `${Config.API.BASE}/api/users`,
        POST: `${Config.API.BASE}/api/users/Register`,
        LOGIN: `${Config.API.BASE}/api/users/login`,
        FORGET: `${Config.API.BASE}/api/users/Forget`,
    }
}