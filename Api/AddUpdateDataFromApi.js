import { API } from './API';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { checkIfHaveThisEmailInDataBase, checkIfHaveThisLoginInDataBase } from './LoadDataFromApi';



export async function AddNewUSer(user) {

    if (await checkIfHaveThisEmailInDataBase(user.Email) || await checkIfHaveThisLoginInDataBase(user.Login)) {
        return null;
    }
    else {
        await axios.post(API.USERS.POST, user);
        return "save";
    }
}


export async function updateDateUserFromDataBase(dataUser) {

    if (dataUser.typeChange === 'newEmail' && await checkIfHaveThisEmailInDataBase(dataUser.userData.Email)) {
        return null;
    }

    if (dataUser.typeChange === 'newLogin' && await checkIfHaveThisLoginInDataBase(dataUser.userData.Login)) {
        return null;
    }

    else {
        await axios.patch(`${API.USERS.GET}/${dataUser.idUser}`, dataUser.userData)
        return "save";
    }
}


export async function NewPasswordUser(user, idUser) {

    await axios.patch(`${API.USERS.GET}/${idUser}`, user)
}


export async function ConnectLoginPublicUser(user) {

    const request = await axios.post(API.USERS.LOGIN, user)
    const response = await request.data;

    AsyncStorage.setItem('user', JSON.stringify(response));
    return response;
}



export async function ConnectForgetPassword(Email) {

    let user =
    {
        Email: Email,
    };
    const request = await axios.post(API.USERS.FORGET, user)
    const response = await request.data;
    return response;
}