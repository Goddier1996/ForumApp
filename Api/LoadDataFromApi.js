import axios from 'axios';
import { API } from './API';



export async function LoadCategories() {

    let res = await axios.get(API.CATEGORY.GET)
    return res.data;
}


export async function LoadMessages() {

    let res = await axios.get(API.MESSAGES.GET)
    return res.data;
}


export async function LoadTopics() {

    let res = await axios.get(API.TOPICS.GET)
    return res.data;
}


export async function LoadUsers() {

    let res = await axios.get(API.USERS.GET)
    return res.data;
}


export async function LoadUserFromDataBase(idUser) {

    let res = await axios.get(`${API.USERS.GET}/${idUser}`)
    return res.data;
}


export async function checkIfHaveThisLoginInDataBase(Login) {

    let res = await axios.get(`${API.USERS.GET}/FindLogin/${Login}`)
    return res.data;
}


export async function checkIfHaveThisEmailInDataBase(Email) {

    let res = await axios.get(`${API.USERS.GET}/forgetPassword/${Email}`)
    return res.data;
}