import { forgetCheckEmail } from "../../../Redux/featuers/users/forgetPasswordCheckEmail";
import { loginUser } from "../../../Redux/featuers/users/loginUser";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userUpdate } from "../../../Redux/featuers/users/updatePersonalDataUser";


export function signInUser(validateForm, setToken, Login, Password, dispatch, navigation, setShowInfoHaveThisUserPopup) {

    if (validateForm()) {
        let user =
        {
            Login: Login,
            Password: Password
        };

        dispatch(loginUser(user))
            .then(async (result) => {
                if (result.payload) {
                    const savedUser = await AsyncStorage.getItem("user");
                    const currentUser = JSON.parse(savedUser);
                    setToken(currentUser)
                    navigation.navigate("HomePage", { screen: "HomePage" });
                }
                else {
                    setShowInfoHaveThisUserPopup(true)
                }
            })
    }
}


export function closeModelCheckEmail(validateForm,
    Email,
    dispatch,
    setShowInfoHaveThisUserPopup,
    setModalVisibleTopic,
    setModalVisible
) {

    if (validateForm()) {

        dispatch(forgetCheckEmail(Email))
            .then(async (result) => {
                if (result.payload) {
                    setModalVisibleTopic(false);
                    setModalVisible(true)
                }
                else {
                    setShowInfoHaveThisUserPopup(true)
                }
            })
    }
}


export async function updatePersonalDataUser(
    validateForm,
    Password,
    dispatch,
    navigation,
    setModalVisible,
    id,
) {
    if (validateForm()) {
        let user = {
            Password: Password,
        };

        let saveDataToObject = {
            userData: user,
            idUser: id,
            typeChange: ''
        }

        dispatch(userUpdate(saveDataToObject))
            .then(async (result) => {
                if (result.payload) {
                    navigation.navigate("HomePage", { screen: "HomePage" });
                    setModalVisible(false)
                }
                else {
                    setShowInfoHaveThisUserPopup(true)
                }
            })
    }
}


export function closeModelPassword(close, clearSetInput, clearError) {
    close(false);
    clearSetInput("");
    clearError({});
}