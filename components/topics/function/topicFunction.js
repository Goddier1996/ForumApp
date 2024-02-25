import AsyncStorage from "@react-native-async-storage/async-storage";
import { addTopic } from "../../../Redux/featuers/topics/addTopic";


export async function checkIfUserConnectToApp(setUserConnect) {

    const savedUser = await AsyncStorage.getItem("user");
    const currentUser = JSON.parse(savedUser);
    setUserConnect(currentUser);
}


export async function saveTopic(
    validateForm,
    newTopic,
    answerTopic,
    userInfo,
    dispatch,
    navigation,
    setErrors,
    setNewTopic,
    setAnswerTopic,
    setModalVisible,
    idCategory,
    titleCategory) {

    if (validateForm()) {

        let d = new Date();

        let Topic = {
            nameTopic: newTopic,
            MessageForTopic: answerTopic,
            DatePublished: `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`,
            Publish_by: userInfo._id,
            imageUser: userInfo.FotoUser,
            codeCategory: idCategory,
            NameUser: userInfo.Name,
            titleCategory: titleCategory
        };

        dispatch(addTopic(Topic))
            .then((result) => {
                if (result) {
                    // console.log("Good");
                    setNewTopic("");
                    setAnswerTopic("");
                    setErrors({});
                    setModalVisible()
                    navigation.goBack();
                }
            })
    }
}


export async function exitFromModel(closeModel, clearErrors, clearValueInputTitleTopic, clearValueInputAnswer) {

    closeModel();
    clearErrors();
    clearValueInputTitleTopic();
    clearValueInputAnswer();
}