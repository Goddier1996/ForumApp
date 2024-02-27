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
    },
    input: {
        width: "100%",
        height: 50,
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



    // use in ConnectDemoUser component
    connectDemoUser: {
        alignItems: "center",
        marginTop: 30,
    },
    connectClick: {
        fontWeight: "bold",
        fontSize: 16,
        color: "rgba(0, 0, 0, 0.575)",
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
        marginTop: 12,
        fontSize: 16,
        color: "rgba(0, 0, 0, 0.475)",
    },

});


export default styles;