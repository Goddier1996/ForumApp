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
});


export default styles;