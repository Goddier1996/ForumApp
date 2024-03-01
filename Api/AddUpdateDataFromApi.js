import { API } from './API';
// import * as Updates from 'expo-updates';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { checkIfHaveThisEmailInDataBase, checkIfHaveThisLoginInDataBase } from './LoadDataFromApi';



// add new data

export async function AddMessage(message) {

    try {
        await fetch(API.MESSAGES.POST, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        });

    } catch (error) {
        console.log(error);
    }
}


export async function AddTopic(topic) {

    try {
        await fetch(API.TOPICS.POST, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(topic)
        });

    } catch (error) {
        console.log(error);
    }
}



export async function AddNewUSer(user) {

    if (await checkIfHaveThisEmailInDataBase(user.Email) || await checkIfHaveThisLoginInDataBase(user.Login)) {
        return null;
    }
    else {
        await fetch(API.USERS.POST, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        return "save";
    }

}


export async function AddCategoryToDataBase(category) {

    try {
        await fetch(API.CATEGORY.POST, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(category)
        });

    } catch (error) {
        console.log(error);
    }
}



// Update info 

export async function updateDateUserFromDataBase(dataUser) {

    if (dataUser.typeChange === 'newEmail' && await checkIfHaveThisEmailInDataBase(dataUser.userData.Email)) {
        return null;
    }

    if (dataUser.typeChange === 'newLogin' && await checkIfHaveThisLoginInDataBase(dataUser.userData.Login)) {
        return null;
    }

    else {
        await fetch(`${API.USERS.GET}/${dataUser.idUser}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataUser.userData)
        });
        return "save";
    }
}


export async function NewPasswordUser(user, idUser) {

    try {
        await fetch(`${API.USERS.GET}/${idUser}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

    } catch (error) {
        console.log(error)
    }
}



// Connect login

export async function ConnectLoginPublicUser(user) {

    const request = await axios.post(API.USERS.LOGIN, user)
    const response = await request.data;

    AsyncStorage.setItem('user', JSON.stringify(response));
    const savedUser = await AsyncStorage.getItem("user");
    const currentUser = JSON.parse(savedUser);
    // console.log(currentUser)

    return response;
}


export async function ConnectDemoPublicUser(setToken) {

    const user =
    {
        Login: "DemoUser96",
        Password: "987654321"
    };
    const request = await axios.post(API.USERS.LOGIN, user)
    const response = await request.data;

    AsyncStorage.setItem('user', JSON.stringify(response));
    const savedUser = await AsyncStorage.getItem("user");
    const currentUser = JSON.parse(savedUser);
    // console.log(currentUser)
    setToken(currentUser)

    return response;
}



// forget password

export async function ConnectForgetPassword(Email) {

    let user =
    {
        Email: Email,
    };
    const request = await axios.post(API.USERS.FORGET, user)
    const response = await request.data;
    return response;
}