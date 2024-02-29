import AsyncStorage from "@react-native-async-storage/async-storage";
import { userIdDeleteComment } from "../../../Redux/featuers/comments/commentsIdUser";
import { userIdDeleteTopic } from "../../../Redux/featuers/topics/topicsIdUser";


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