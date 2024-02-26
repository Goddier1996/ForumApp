import AsyncStorage from "@react-native-async-storage/async-storage";
import { userIdDeleteComment } from "../../../Redux/featuers/comments/userDeleteComment";
import { userIdDeleteTopic } from "../../../Redux/featuers/topics/userDeleteTopic";


export async function logOutFromProfile(setToken, navigation) {

    await setToken(null)
    AsyncStorage.clear();
    navigation.navigate("HomePage", { screen: "HomePage" });
}


export function userDeleteComment(dispatch, id, setShowInfoHaveThisUserPopup) {

    dispatch(userIdDeleteComment(id))
        .then((result) => {
            if (result) {
                setShowInfoHaveThisUserPopup(true);
            }
        })
}


export function userDeleteTopic(dispatch, id, setShowInfoHaveThisUserPopup) {

    dispatch(userIdDeleteTopic(id))
        .then((result) => {
            if (result) {
                setShowInfoHaveThisUserPopup(true);
            }
        })
}