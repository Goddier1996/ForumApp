import { StyleSheet } from "react-native";


// This Style use show Profile
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
    },
    // use in LogOut component
    positionLogOut: {
        alignItems: "flex-end",
        marginRight: 35,
    },
    buttonLogOut: {
        alignItems: "center"
    },

    // use in InfoUser component
    userInfoSection: {
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "500",
        color: "rgba(0, 0, 0, 0.600)",
    },
    row: {
        flexDirection: "row",
    },
    positionImgProfile: {
        alignItems: "center",
        justifyContent: "center"
    },
    imgProfileUser: {
        height: 90,
        width: 90,
        borderRadius: 50,
    },
    positionTitle: {
        alignItems: "center",
        justifyContent: "center"
    },


    // use in UpdateUserData component
    menuItem: {
        width: 125,
        height: 110,
        backgroundColor: "rgba(128, 128, 128, 0.140)",
        borderBottomColor: "#00b23d",
        borderBottomWidth: 4,
        borderRadius: 10,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    menuItemPersonalUserDate: {
        width: 195,
        height: 90,
        backgroundColor: "rgba(128, 128, 128, 0.140)",
        borderBottomColor: "#e48a33",
        borderBottomWidth: 4,
        borderRadius: 10,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    menuItemText: {
        color: "rgba(0, 0, 0, 0.600)",
        fontSize: 14,
    },
    iconComments: {
        width: 45,
        height: 45
    },


    // use in UserOptions component
    menuWrapper: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    menuWrapperPersonalUserDate: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 20
    },


    //  model topics + comments
    centeredView: {
        flex: 1,
        backgroundColor: "rgba(52, 52, 52, 0.8)",
        alignItems: "center",
        justifyContent: "center",
    },
    modalView: {
        padding: 15,
        backgroundColor: "white",
        height: "70%",
        width: "90%",
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 7,
    },
    tableHeader: {
        borderBottomColor: "#e48a33",
        borderBottomWidth: 3,
    },
    buttonClose: {
        width: 35,
        height: 35,
        borderRadius: 35 / 2,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "red"
    },
    Close: {
        color: "rgba(0, 0, 0, 0.600)",
        fontSize: 14,
    },
    tablePosition: {
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    notificationBox: {
        paddingVertical: 20,
        borderRadius: 10,
        backgroundColor: "rgba(128, 128, 128, 0.140)",
        borderBottomColor: "#69B753",
        borderBottomWidth: 2,
    },
    notificationBoxComments: {
        paddingVertical: 12,
        backgroundColor: "rgba(128, 128, 128, 0.140)",
    },
    showOptionsDeleteAndShowDate: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "rgba(128, 128, 128, 0.140)",
        borderBottomColor: "#69B753",
        borderBottomWidth: 2,
        marginBottom: 12,
        paddingVertical: 8,
        padding: 16
    },
    showOptionsDeleteAndMoveToInfoScreen: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "rgba(128, 128, 128, 0.140)",
        borderBottomColor: "#69B753",
        borderBottomWidth: 2,
        marginBottom: 12,
        paddingVertical: 8,
        padding: 16
    },
    dateComment: {
        fontSize: 12,
        color: "rgba(0, 0, 0, 0.475)",
    },
    date: {
        color: "rgba(0, 0, 0, 0.475)",
        fontSize: 10,
    },
    description: {
        fontSize: 15,
        color: "rgba(0, 0, 0, 0.475)",
        marginLeft: 10,
    },
    notHaveItems: {
        justifyContent: 'center',
        alignItems: 'center',
        color: "rgba(0, 0, 0, 0.475)",
    },
    notificationList: {
        height: "82%",
        width: "100%",
    },



    // Update User Data
    modalViewUserDAta: {
        padding: 15,
        backgroundColor: "white",
        height: "auto",
        width: "90%",
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 7,
    },
    positionInputValue: {
        alignItems: "center"
    },
    titleUpdate: {
        alignItems: "center",
        padding: 10,
    },
    userUpdate: {
        color: "rgba(0, 0, 0, 0.475)",
        fontSize: 16,
        textAlign: "center"
    },
    input: {
        width: "85%",
        height: 45,
        backgroundColor: "rgba(128, 128, 128, 0.140)",
        borderRadius: 4,
        paddingHorizontal: 10,
    },
    inputBox: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    buttonClick: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    ChangeButton: {
        backgroundColor: '#69B753',
        marginTop: 50,
        paddingVertical: 8,
        borderRadius: 4,
        width: 140,
    },
    ChangeButtonLoading: {
        marginTop: 50,
        paddingVertical: 8,
        borderRadius: 4,
        width: 140,
    },
    ChangeButtonText: {
        color: "white",
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
    buttonClickChooseImg: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center"
    },
    registerButtonTextChooseImg: {
        position: "absolute",
        // alignItems: "center"
    },
    styleChooseImg: {
        height: 75,
        width: 75,
        borderRadius: 50,
    },


    // use in ButtonDeleteAccount
    buttonClickRemoveAccount: {
        alignItems: "center"
    },
    ChangeButtonRemoveAccount: {
        backgroundColor: 'red',
        marginTop: 5,
        marginBottom: 30,
        paddingVertical: 6,
        borderRadius: 4,
        width: 150,
    },
    ChangeButtonRemoveAccountLoading: {
        marginTop: 5,
        marginBottom: 30,
        paddingVertical: 4,
        borderRadius: 4,
        width: 140,
    },
    RemoveAccountText: {
        textAlign: "center",
        color: "white",
        fontSize: 15
    }
});


export default styles;