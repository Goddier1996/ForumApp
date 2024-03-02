import { API } from './API';



// export async function DeleteFromDataBaseCategory(id) {

//     await fetch(`${API.CATEGORY.GET}/${id}`, { method: 'DELETE' });
// }


export async function DeleteFromDataBaseMessage(id) {

    await fetch(`${API.MESSAGES.GET}/${id}`, { method: 'DELETE' });
}


export async function DeleteFromDataBaseTopic(id) {

    await fetch(`${API.TOPICS.GET}/${id}`, { method: 'DELETE' });
}


export async function DeleteFromDataBaseUser(id) {

    await fetch(`${API.USERS.GET}/${id}`, { method: 'DELETE' });
}
