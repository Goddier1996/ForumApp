import AsyncStorage from "@react-native-async-storage/async-storage";
import { addComment } from "../../../Redux/featuers/comments/addComment";


export async function checkIfUserConnectToApp(setUserConnect) {

    const savedUser = await AsyncStorage.getItem("user");
    const currentUser = JSON.parse(savedUser);
    setUserConnect(currentUser);
}


export async function saveComment(validateForm, idTopic, comment, userInfo, dispatch, navigation, setErrors, setComment, setModalVisible) {

    if (validateForm()) {

        let d = new Date();

        let message = {
            idTopicMessage: idTopic,
            MessageUser: comment,
            DatePublished: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`,
            Publish_by: userInfo._id,
            NameUser: userInfo.Name,
            FotoUser: userInfo.FotoUser
        };

        dispatch(addComment(message))
            .then((result) => {
                if (result) {
                    // console.log("Good");
                    setComment("");
                    setErrors({});
                    setModalVisible
                    navigation.goBack();
                }
            })
    }
}


export async function exitFromModel(closeModel, clearErrors, clearValueInput) {

    closeModel();
    clearErrors();
    clearValueInput();
}
