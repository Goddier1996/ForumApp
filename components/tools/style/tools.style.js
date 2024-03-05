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
        marginTop: 10
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
        height: 205,
        width: "90%",
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 7,
        elevation: 10,
    },
    inSiteDeleteTopic: {
        alignItems: "center",
        backgroundColor: "white",
        height: 260,
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

    positionButtons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 10
    },
    buttonAlert: {
        width: "60%",
        alignItems: "center",
        justifyContent: "center",
        // position: "absolute",
        backgroundColor: "#00b23d",
        borderColor: "#ddd",
        borderBottomWidth: 0,
        borderRadius: 5,
        bottom: 0,
        marginBottom: 10,
    },
    buttonAlertDeleteTopic: {
        width: "35%",
        alignItems: "center",
        justifyContent: "center",
        // position: "absolute",
        backgroundColor: "#00b23d",
        borderColor: "#ddd",
        borderBottomWidth: 0,
        borderRadius: 5,
        bottom: 0,
        marginBottom: 10,
    },
    closeAlert: {
        width: "35%",
        alignItems: "center",
        justifyContent: "center",
        // position: "absolute",
        backgroundColor: "red",
        borderColor: "#ddd",
        borderBottomWidth: 0,
        borderRadius: 5,
        bottom: 0,
        marginBottom: 10,
    },
    textInButtonAlert: {
        color: "white",
        margin: 15,
        fontSize: 15
    },


    // use in SplashScreen component
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#48484c',
    },
    image: {
        width: 250,
        height: 250,
    },
    textAnimationStart: {
        color: "#ff652f",
        fontSize: 16,
        marginTop: 40
    },
    bottomView: {
        marginBottom: 50,
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
    },
    textStyle: {
        color: '#fff',
        fontSize: 14,
    },
    loading: {
        backgroundColor: "#48484c",
    }

});


export default styles;