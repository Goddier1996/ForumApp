import AsyncStorage from "@react-native-async-storage/async-storage";
import { userIdDeleteComment } from "../../../Redux/featuers/comments/userDeleteComment";


export async function logOutFromProfile(setToken, navigation) {

    await setToken(null)
    AsyncStorage.clear();
    navigation.navigate("HomePage", { screen: "HomePage" });
}


export async function userDeleteComment(dispatch, id, setShowInfoHaveThisUserPopup) {

    dispatch(userIdDeleteComment(id))
        .then((result) => {
            if (result) {
                setShowInfoHaveThisUserPopup(true);
            }
        })
}

