import { StyleSheet } from "react-native";


// This Style use show Profile
const styles = StyleSheet.create({

    // use in LogOut component
    positionLogOut: {
        alignItems: "flex-end",
        padding: 30,
    },
    buttonLogOut: {
        // marginLeft: 260,
        // top: 60,
        width: 60,
        height: 60,
        backgroundColor: "red",
        borderRadius: 60 / 2,
        padding: 5,
        justifyContent: "center",
    },
    caption: {
        textAlign: "center",
        color: "white"
    },

    // use in InfoUser component
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
        marginTop: -90
    },
    showDataUser: {
        paddingHorizontal: 15,
        marginBottom: 25,
        marginTop: 20
    },
    title: {
        fontSize: 20,
        top: 15,
    },
    row: {
        flexDirection: "row",
        marginBottom: 10,
    },


    // use in UpdateUserData component
    menuItem: {
        flexDirection: "row",
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: "#777777",
        marginLeft: 20,
        fontWeight: "600",
        fontSize: 15,
        lineHeight: 25,
    },


    // use in UserOptions component
    menuWrapper: {
        marginTop: 10,
    },


    // use in CountUserItems components
    infoBoxWrapper: {
        borderBottomColor: "#dddddd",
        borderBottomWidth: 1,
        borderTopColor: "#dddddd",
        borderTopWidth: 1,
        flexDirection: "row",
        height: 100,
    },
    infoBox: {
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
    },
});


export default styles;