import { StyleSheet } from "react-native";


// This Style use show Register screen
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
    },
    authBox: {
        width: "80%",
        borderRadius: 20,
        alignSelf: "center",
        backgroundColor: "#f2f2f2"
    },
    inputBox: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    input: {
        width: "90%",
        height: 48,
        backgroundColor: "rgba(128, 128, 128, 0.140)",
        borderRadius: 4,
        paddingHorizontal: 10,
    },
    buttonClick: {
        alignItems: "center",
    },
    registerButton: {
        backgroundColor: "#69B753",
        height: 40,
        borderRadius: 4,
        justifyContent: "center",
        width: 120,
    },
    registerButtonLoading: {
        paddingVertical: 8,
        borderRadius: 4,
        width: 120,
    },
    registerButtonText: {
        color: "white",
        textAlign: "center",
        fontSize: 18,
    },
    buttonClickChooseImg: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 10,
    },
    buttonChooseImg: {
        backgroundColor: "#e48a33",
        height: 35,
        borderRadius: 4,
        justifyContent: "center",
        width: 125,
    },
    registerButtonTextChooseImg: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
    },
    styleChooseImg: {
        height: 45,
        width: 45,
        borderRadius: 50,
    },
    styleChooseImgNullImg: {
        height: 45,
        width: 45,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.475)",
        alignItems: "center",
        display: "flex",
        justifyContent: "center"
    },
    nullImage: {
        color: "rgba(0, 0, 0, 0.475)",
        textAlign: "center",
        fontSize: 12,
    },
    checkBox: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    PasswordsLengthText: {
        color: "red",
        textAlign: "center",
        fontSize: 11
    },


    // use in ShowInfoTitle component
    infoRegister: {
        alignItems: "center",
        marginTop: 10
    },
    infoRegisterText: {
        width: "85%",
        color: "rgba(0, 0, 0, 0.475)",
        textAlign: "center",
        fontSize: 11
    },
    infoRegisterBoldText: {
        color: "#e48a33"
    },
});


export default styles;