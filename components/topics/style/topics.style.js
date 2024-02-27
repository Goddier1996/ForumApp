import { StyleSheet } from "react-native";


// This Style use show topic
const styles = StyleSheet.create({

    // use in CardTopic component
    container: {
        flex: 1,
        marginTop: 10,
        marginBottom: 2
    },
    positionTime: {
        height: 29,
        position: "absolute",
        bottom: 0,
        right: 15,
    },
    nameTopic: {
        position: "absolute",
        left: 0,
        top: 15,
        right: 0,
        height: 30,
    },
    image: {
        width: 35,
        height: 35,
        borderRadius: 50,
    },
    card: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        backgroundColor: "rgba(128, 128, 128, 0.140)",
        padding: 15,
        borderRadius: 20,
    },
    name: {
        fontSize: 15,
        alignSelf: "center",
        alignItems: "center",
        color: "rgba(0, 0, 0, 0.575)",
    },
    timePublic: {
        fontSize: 10,
        color: "rgba(0, 0, 0, 0.475)",
    },
    PublishBy: {
        fontSize: 10,
        color: "rgba(0, 0, 0, 0.475)"
    },


    // use in ModelAddNewTopic component
    outSideBackgroundModel: {
        flex: 1,
        backgroundColor: "rgba(52, 52, 52, 0.8)",
        alignItems: "center",
        justifyContent: "center",
    },
    outInsideBackgroundModel: {
        backgroundColor: "white",
        marginVertical: 60,
        width: "90%",
        borderRadius: 7,
        elevation: 10
    },
    buttonSaveTopic: {
        backgroundColor: "#00b23d",
        shadowColor: "#000",
        borderRadius: 10,
        padding: 10,
    },
    buttonSaveTopicLoading: {
        shadowColor: "#000",
        borderRadius: 10,
        padding: 10,
    },
    buttonExitComment: {
        backgroundColor: "#c11414",
        shadowColor: "#000",
        borderRadius: 10,
        padding: 10,
    },
    textStyle: {
        color: "white",
        textAlign: "center",
        fontSize: 14,
    },
    createFreeSpace: {
        paddingBottom: 12,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems:"center"
    },
    authBox: {
        width: "90%",
        borderRadius: 20,
        alignSelf: "center",
        paddingHorizontal: 15,
        shadowColor: "#000",
        marginTop: 15
    },
    textArea: {
        height: 200,
        backgroundColor: "rgba(128, 128, 128, 0.200)",
        borderRadius: 10,
        paddingHorizontal: 50,
        textAlign: "center",
        width: "90%",
    },
    input: {
        width: "90%",
        height: 40,
        backgroundColor: "rgba(128, 128, 128, 0.200)",
        borderRadius: 10,
        paddingHorizontal: 10,
        textAlign: "center",
    },
    buttonClick: {
        justifyContent: "space-around",
        flexDirection: "row",
        padding: 12,
    },
    background: {
        alignItems: "center",
        marginTop: 10
    },
    imageAddTopic: {
        width: 85,
        height: 70,
    },
    messageUserNeedInputValue: {
        alignItems: "center"
    },
    textUserNeedInputValue: {
        color: "#e48a33",
        textAlign: "center"
    },


    //  use in SignInAddNewTopic component
    positionShowAddAndCount: {
        // marginTop: 5,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: "#1e2226",
        alignItems: "center",
        height: 55,
        justifyContent: "space-around",
        flexDirection: "row",
    },
    buttonAddNewTopic: {
        backgroundColor: "#e48a33",
        borderRadius: 10,
        padding: 10,
        elevation: 2
    },
    textStyleAddNewTopic: {
        color: "white",
        textAlign: "center",
    },
    textStyleSignIn: {
        color: "#e48a33",
        textAlign: "center",
    },
    imageTopic: {
        width: "100%",
        height: 120,
    },
    positionCountText: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        borderColor: "#69B753",
        borderWidth: 2,
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center"
    },
    positionCountTextNotHave: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        borderColor: "red",
        borderWidth: 2,
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center"
    },
    textShowCountTopics: {
        fontSize: 15,
        color: "white",
    }
});


export default styles;