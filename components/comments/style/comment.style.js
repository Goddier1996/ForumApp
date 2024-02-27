import { StyleSheet } from "react-native";


// This Style use show Comments
const styles = StyleSheet.create({

  // use in AddNewComment component
  positionAddComment: {
    alignItems: "center"
  },
  buttonAddNewComment: {
    width: 130,
    borderRadius: 6,
    padding: 5,
    backgroundColor: "green"
  },
  textStyleAddComment: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  textStyleUserNeedConnect: {
    color: "#e48a33",
    textAlign: "center",
    fontSize: 16,
  },


  // use in ModelAddNewComment component
  outSideBackgroundModel: {
    flex: 1,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    alignItems: "center",
    justifyContent: "center",
  },
  outInsideBackgroundModel: {
    backgroundColor: "white",
    marginVertical: 60,
    width: "90%",
    borderRadius: 7,
    elevation: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  background: {
    height: 100,
  },
  buttonSaveComment: {
    backgroundColor: "#00b23d",
    shadowColor: "#000",
    borderRadius: 10,
    padding: 10,
  },
  buttonSaveCommentLoading: {
    shadowColor: "#000",
    borderRadius: 10,
    padding: 10,
  },
  buttonExitComment: {
    backgroundColor: "#c11414",
    shadowColor: "#000",
    borderRadius: 10,
    padding: 10,
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
  },
  authBox: {
    borderRadius: 20,
    alignSelf: "center",
    shadowColor: "#000",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  textArea: {
    width: "80%",
    height: 200,
    backgroundColor: "rgba(128, 128, 128, 0.200)",
    borderRadius: 10,
    paddingHorizontal: 50,
    textAlign: "center",
  },
  buttonClick: {
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 12,
  },
  messageUserNeedInputValue: {
    alignItems: "center"
  },
  textUserNeedInputValue: {
    color: "#e48a33",
    textAlign: "center"
  },


  // use in Card Comment component
  containerQuestion: {
    margin: 10,
    paddingLeft: 6,
    paddingRight: 15,
    paddingVertical: 15,
    flexDirection: "row",
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: "rgba(128, 128, 128, 0.140)",
    borderBottomColor: "green",
    borderBottomWidth: 4,
  },
  containerAnswer: {
    margin: 10,
    paddingLeft: 6,
    paddingRight: 15,
    paddingVertical: 15,
    flexDirection: "row",
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: "rgba(128, 128, 128, 0.140)",
    borderBottomColor: "#e48a33",
    borderBottomWidth: 2,
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    marginBottom: 15,
  },
  imageUser: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  time: {
    fontSize: 9,
    color: "rgba(0, 0, 0, 0.475)",
  },
  name: {
    textAlign: "center",
    fontSize: 9,
    color: "rgba(0, 0, 0, 0.575)",
  },
  mainCommentTopic: {
    bottom: 5,
    fontSize: 10,
    color: "green",
    justifyContent: "center",
    fontWeight: "bold",
  },
  answerCommentTopic: {
    bottom: 5,
    fontSize: 10,
    color: "#e48a33",
    justifyContent: "center",
    fontWeight: "bold",
  },
  message: {
    fontSize: 12,
    padding: 2,
    color: "rgba(0, 0, 0, 0.475)",
  },
  borderImage: {
    borderRightWidth: 1.5,
    padding: 6,
    borderColor: "gray",
    borderRadius: 5,
    alignItems: "center",
  },


  // use in ShowCountComments component
  showCountComment: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    borderColor: "#69B753",
    borderWidth: 2,
    justifyContent: "center"
  },
  showCountCommentNotHave: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    borderColor: "red",
    borderWidth: 2,
    justifyContent: "center"
  },
  countText: {
    textAlign: "center",
    color: "white",
    fontSize: 17
  },


  // use in AllCommentsThisTopic component
  borderImageAllComments: {
    marginTop: 5,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "#1e2226",
    alignItems: "center",
    height: 55,
    justifyContent: "space-around",
    flexDirection: "row",
  }
});


export default styles;