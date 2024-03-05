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
        paddingHorizontal: 14,
        // paddingBottom: 15,
        shadowColor: "#000",
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
        // paddingVertical: 8,
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
        // fontWeight: "bold",
    },
    checkBox: {
        flexDirection: "row",
        // flexWrap: "wrap",
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
        width: "80%",
        color: "rgba(0, 0, 0, 0.475)",
        textAlign: "center",
        fontSize: 11
    },
    infoRegisterBoldText: {
        color: "#e48a33"
    },


    // use in showHeaterTitle component
    titleHeater: {
        alignItems: "center",
        marginBottom: -20
    },
    titleHeaterImg: {
        height: 135,
        width: 135,
    }
});


export default styles;