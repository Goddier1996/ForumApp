import { StyleSheet } from "react-native";


// This Style use show info about app
const styles = StyleSheet.create({

    // use in InfoAbout screen
    container: {
        flex: 1,
        justifyContent: "center",
    },


    // use in CountInfo component
    menuBox: {
        alignItems: "center",
        justifyContent: "center",
        margin: 15,
    },
    icon: {
        width: 40,
        height: 40,
    },
    info: {
        fontSize: 15,
        color: "rgba(0, 0, 0, 0.475)",
    },
    loadingCountInfo: {
        paddingTop: 10,
    },


    // use in ShowAllCountInfo component
    showCountInfo: {
        flexDirection: "row",
        justifyContent: "space-around",
    },


    // use in InfoAboutApp component
    about: {
        flexDirection: "row",
        justifyContent: "center",
    },
    infoForum: {
        fontSize: 14,
        color: "rgba(0, 0, 0, 0.475)",
        width: "90%",
    },
});


export default styles;