import { StyleSheet } from "react-native";


// This Style use show info about app
const styles = StyleSheet.create({

    // use in Login screen
    container: {
        flex: 1,
        justifyContent: "center",
    },
    authBox: {
        width: "80%",
        borderRadius: 20,
        alignSelf: "center",
        paddingHorizontal: 14,
        paddingBottom: 30,
        shadowColor: "#000",
    },
    inputBox: {
        marginTop: 10,
        justifyContent: "space-evenly",
        flexDirection: "row",
        alignItems: "center"
    },
    input: {
        width: "85%",
        height: 40,
        backgroundColor: "rgba(128, 128, 128, 0.140)",
        borderRadius: 4,
        paddingHorizontal: 10,
    },
    styleClickButton: {
        alignItems: "center",
    },
    loginButton: {
        backgroundColor: "#69B753",
        marginTop: 15,
        paddingVertical: 8,
        borderRadius: 4,
        width: 120,
    },
    loginButtonLoading: {
        marginTop: 15,
        paddingVertical: 8,
        borderRadius: 4,
        width: 120,
    },
    loginButtonText: {
        color: "white",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
    },
    messageUserNeedInputValue: {
        alignItems: "center"
    },
    textUserNeedInputValue: {
        color: "#e48a33",
        textAlign: "center"
    },


    // use in DontHaveAccount component
    registerText: {
        textAlign: "center",
        fontSize: 16,
        marginTop: 12,
        color: "rgba(0, 0, 0, 0.475)",
    },


    // use in ForgetPassword component
    forgotPasswordText: {
        textAlign: "center",
        marginTop: 32,
        fontSize: 16,
        color: "rgba(0, 0, 0, 0.475)",
    },
    centeredView: {
        flex: 1,
        backgroundColor: "rgba(52, 52, 52, 0.8)",
        alignItems: "center",
        justifyContent: "center",
    },
    modalView: {
        padding: 15,
        backgroundColor: "white",
        height: "auto",
        width: "90%",
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 7,
    },
    forgetPasswordImg: {
        alignItems: "center",
        marginBottom: 10
    },
    buttonsForgetPassword: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 10
    },
    checkEmail: {
        backgroundColor: "#69B753",
        marginTop: 15,
        paddingVertical: 8,
        borderRadius: 4,
        width: 120,
    },
    checkEmailLoading: {
        marginTop: 15,
        paddingVertical: 8,
        borderRadius: 4,
        width: 120,
    },
    checkSavePassword: {
        backgroundColor: "#69B753",
        marginTop: 15,
        paddingVertical: 8,
        borderRadius: 4,
        width: 80,
    },
    checkSavePasswordLoading: {
        marginTop: 15,
        paddingVertical: 8,
        borderRadius: 4,
        width: 80,
    },
    checkEmailText: {
        color: "white",
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
    },
    closeForgetPassword: {
        backgroundColor: "red",
        marginTop: 15,
        paddingVertical: 8,
        borderRadius: 4,
        width: 80,
    },
    closeForgetText: {
        color: "white",
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
    },
    findTitleUser: {
        alignItems: "center",
        marginBottom: 15
    },
    findTitleUserText: {
        textAlign: "center",
        fontSize: 17,
    },
    PasswordsNotSame: {
        alignItems: "center"
    },
    PasswordsNotSameText: {
        color: "red",
        textAlign: "center"
    },
    PasswordsLengthText: {
        color: "#e48a33",
        textAlign: "center"
    }
});


export default styles;