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
        flexWrap: "wrap",
        justifyContent: "space-around",
        paddingBottom: 10,
    },


    // use in InfoAboutApp component
    about: {
        // paddingTop: 10,
        flexDirection: "row",
        justifyContent: "center",
        margin: 20,
    },
    infoForum: {
        fontSize: 14.5,
        color: "rgba(0, 0, 0, 0.475)",
        width: "90%",
    },


    // use in ShowTitle component
    TitleForum: {
        paddingBottom: 15,
        alignItems: "center",
        justifyContent:"center"
    },
    infoTitle: {
        height: 75,
        width: 75,
    }
});


export default styles;