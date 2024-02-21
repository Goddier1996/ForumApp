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
        paddingBottom: 30,
        shadowColor: "#000",
    },
    inputBox: {
        marginTop: 10,
    },
    input: {
        width: "100%",
        height: 45,
        backgroundColor: "rgba(128, 128, 128, 0.140)",
        borderRadius: 4,
        paddingHorizontal: 10,
    },
    buttonClick: {
        justifyContent: "center",
        alignItems: "center",
    },
    loginButton: {
        backgroundColor: "#e48a33",
        paddingVertical: 8,
        borderRadius: 4,
        width: "35%",
    },
    loginButtonText: {
        color: "white",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
    },
    checkBox: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    infoInputLink: {
        fontSize: 10,
        color: "rgba(0, 0, 0, 0.675)",
    },
});


export default styles;