import { API } from './API';


// Load data from data base

export async function LoadCategors() {

    let res = await fetch(API.CATEGORY.GET, { method: 'GET' });
    let data = await res.json();
    return data;
}


export async function LoadMessages() {

    let res = await fetch(API.MESSAGES.GET, { method: 'GET' });
    let data = await res.json();
    return data;
}


export async function LoadTopics() {

    let res = await fetch(API.TOPICS.GET, { method: 'GET' });
    let data = await res.json();
    return data;
}


export async function LoadUsers() {

    let res = await fetch(API.USERS.GET, { method: 'GET' });
    let data = await res.json();
    return data;
}


export async function LoadMessageTopicInMessagePage(idTopic) {

    let res = await fetch(`${API.TOPICS.GET}/${idTopic}`, { method: 'GET' });
    let data = await res.json();
    return data;
}


export async function LoadAllMessagesIdTopic(idTopic) {

    let res = await fetch(`${API.MESSAGES.GET}/${idTopic}`, { method: 'GET' });
    let data = await res.json();
    return data;
}


export async function LoadUserFromDataBase(idUser) {

    let res = await fetch(`${API.USERS.GET}/${idUser}`, { method: 'GET' });
    let data = await res.json();
    return data;
}


export async function LoadAllTopicsCategory(idCategory) {

    let res = await fetch(`${API.TOPICS.GET}/CategoryTopic/${idCategory}`, { method: 'GET' });
    let data = await res.json();
    return data;
}


export async function LoadMessagesIdUser(idUser) {

    let res = await fetch(`${API.MESSAGES.GET}/PublishBy/${idUser}`, { method: 'GET' });
    let data = await res.json();
    return data;
}


export async function LoadTopicsIdUser(idUser) {

    let res = await fetch(`${API.TOPICS.GET}/PublishBy/${idUser}`, { method: 'GET' });
    let data = await res.json();
    return data;
}





// check info when Register

export async function checkIfHaveThisLoginInDataBase(Login) {

    let resLogin = await fetch(`${API.USERS.GET}/FindLogin/${Login}`, { method: 'GET' });
    let dataLogin = await resLogin.json();
    return dataLogin;
}


export async function checkIfHaveThisEmailInDataBase(Email) {

    let resEmail = await fetch(`${API.USERS.GET}/forgetPassword/${Email}`, { method: 'GET' });
    let dataEmail = await resEmail.json();
    return dataEmail;
}