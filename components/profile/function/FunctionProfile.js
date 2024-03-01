import AsyncStorage from "@react-native-async-storage/async-storage";
import { userIdDeleteComment } from "../../../Redux/featuers/comments/commentsIdUser";
import { userIdDeleteTopic } from "../../../Redux/featuers/topics/topicsIdUser";
import { userUpdate } from "../../../Redux/featuers/users/updatePersonalDataUser";

export async function logOutFromProfile(setToken, navigation) {

    await setToken(null)
    AsyncStorage.clear();
    navigation.navigate("HomePage", { screen: "HomePage" });
}


export function userDeleteComment(dispatch, id) {
    dispatch(userIdDeleteComment(id));
}


export function userDeleteTopic(dispatch, id) {
    dispatch(userIdDeleteTopic(id));
}


export function moveToUserTopicScreen(data, setModalVisibleTopic, navigation) {
    setModalVisibleTopic(false);
    navigation.navigate("CommentsTopics", {
        allDataTopic: data,
        CategoryName: data.titleCategory,
        backgroundTopic: data.backgroundTopic,
    });
}



export async function updatePersonalDataUser(
    validateForm,
    Login,
    Name,
    Password,
    Email,
    LinkFileFoto,
    dispatch,
    navigation,
    setShowInfoHaveThisUserPopup,
    infoUser,
    setToken
) {
    if (validateForm()) {
        let user = {
            Login: Login,
            Name: Name,
            Password: Password,
            Email: Email,
            FotoUser: infoUser.Gender === "Male" && infoUser.FotoUser === "" ? "https://i.postimg.cc/NF66b95t/toppng-com-icons-logos-emojis-user-icon-png-transparent-2400x2305.png" :
                infoUser.Gender === "Female" && infoUser.FotoUser === "" ? "https://i.postimg.cc/MGJWJnGN/toppng-com-female-user-icon-600x601.png" : LinkFileFoto,
            UserTypeCode: infoUser.UserTypeCode,
            Gender: infoUser.Gender
        };

        let saveDataToObject = {
            userData: user,
            idUser: infoUser._id,
            typeChange:
                user.Email !== infoUser.Email ? 'newEmail' :
                    user.Login !== infoUser.Login ? 'newLogin' : ''
        }

        dispatch(userUpdate(saveDataToObject))
            .then(async (result) => {
                if (result.payload) {
                    await setToken(null)
                    AsyncStorage.clear();
                    navigation.navigate("HomePage", { screen: "HomePage" });
                }
                else {
                    setShowInfoHaveThisUserPopup(true)
                }
            })
    }
}