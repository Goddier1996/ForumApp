import { StyleSheet } from "react-native";


// This Style use show tools
const styles = StyleSheet.create({

    // use in Loading component
    loadingImage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loadingImageSmallSize: {
        padding: 25
    },
    loadingImageSmallSizeSave: {
        marginTop: 8
    },

    //   use in ShowMessageNotHaveData component
    loadingImageDontHave: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    message: {
        textAlign: "center"
    },
    notHaveItems: {
        width: 130,
        height: 100,
    },


    // use in CustomAlert component
    mainModel: {
        flex: 1,
        backgroundColor: "rgba(52, 52, 52, 0.8)",
        alignItems: "center",
        justifyContent: "center",
    },
    inSite: {
        alignItems: "center",
        backgroundColor: "white",
        height: 230,
        width: "90%",
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 7,
        elevation: 10,
    },
    showIcon: {
        alignItems: "center",
        margin: 10
    },
    messageInAlert: {
        fontSize: 17,
        marginTop: 5,
        textAlign: "center"
    },
    buttonAlert: {
        width: "30%",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        backgroundColor: "#00b23d",
        borderColor: "#ddd",
        borderBottomWidth: 0,
        borderRadius: 5,
        bottom: 0,
        marginBottom: 10,
    },
    textInButtonAlert: {
        color: "white",
        margin: 15,
        fontSize: 18
    }
});


export default styles;