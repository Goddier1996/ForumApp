import { loginDemoUser } from "../../../Redux/featuers/users/userSliceLogin"
import { loginUser } from "../../../Redux/featuers/users/loginUser";
import AsyncStorage from '@react-native-async-storage/async-storage';


export function signInDemoUser(dispatch, setToken, navigation, setShowInfoHaveThisUserPopup) {

    dispatch(loginDemoUser(setToken))
        .then((result) => {
            if (result.payload) {
                navigation.navigate("HomePage", { screen: "HomePage" });
            }
            else {
                setShowInfoHaveThisUserPopup(true)
            }
        })
}



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

