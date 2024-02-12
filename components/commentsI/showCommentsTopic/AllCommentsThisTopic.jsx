import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCommentsIdTopics } from "../../../Redux/fetchData/commentsIdTopic";
import { useRoute } from "@react-navigation/native";
import ShowMessageNotHaveTopics from "../../topics/showModel/ExtrasTools/ShowMessageNotHaveTopics";
import Loading from "../../tools/loading/Loading";



const AllCommentsThisTopic = () => {


  const route = useRoute();
  const commentTopic = useSelector((state) => state.commentTopic);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCommentsIdTopics(route.params.allDataTopic._id));
  }, [route.params.allDataTopic._id]);

    
  return (
    <View>
      {commentTopic.loading ? (
        <Loading />
      ) : !commentTopic.loading && commentTopic.error ? (
        <Text>Error: {commentTopic.error}</Text>
      ) : null}

      {!commentTopic.loading ? (
        <>
          {commentTopic.Comments.length == 0 ? (
            <ShowMessageNotHaveTopics />
          ) : (
            // show all topics this Category

            <FlatList
              data={commentTopic.Comments}
              renderItem={({ item }) => {
                return (
                  <View key={item._id} style={styles.container}>
                    <View style={styles.borderImage} onPress={() => {}}>
                      <Image
                        style={styles.image}
                        source={{ uri: item.FotoUser }}
                      />
                      <Text style={styles.name}>{item.NameUser}</Text>
                    </View>

                    <View style={styles.content}>
                      <Text style={styles.message}>{item.MessageUser}</Text>
                      <View style={styles.contentHeader}>
                        <Text style={styles.time}>
                          Date Publish : {item.DatePublished}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          )}
        </>
      ) : null}
    </View>
  );
};

export default AllCommentsThisTopic;


const styles = StyleSheet.create({
  // style alert popup
  centeredViewWarring: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },

  modalViewWarring: {
    width: 320,
    height: 330,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "center",
  },
  modalTextTitleWarring: {
    color: "3#c466a",
    fontSize: 18,
    marginTop: 30,
  },
  modalTextWarring: {
    color: "3#c466a",
    fontSize: 16,
    marginTop: 10,
  },

  textStyleCLoseWarring: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 50,
  },

  titleInfo: {
    marginTop: 20,
    alignItems: "center",
    borderRadius: 10,
    height: 45,
    justifyContent: "center",
    backgroundColor: "rgba(128, 128, 128, 0.180)",
  },
  TextInfo: {
    fontSize: 17,
  },
  dontConnectTitle: {
    marginTop: 50,
    marginBottom: 50,
    alignItems: "center",
    borderRadius: 5,
    height: 80,
    justifyContent: "center",
    backgroundColor: "rgba(128, 128, 128, 0.180)",
  },
  SignIn: {
    fontWeight: "bold",
    fontSize: 15,
  },
  container: {
    margin: 20,
    paddingLeft: 19,
    paddingRight: 36,
    paddingVertical: 22,
    flexDirection: "row",
    marginTop: 35,
    marginBottom: -18,
    borderRadius: 5,
    backgroundColor: "rgba(128, 128, 128, 0.140)",
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    marginBottom: 15,
  },
  separator: {
    height: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 2,
  },
  time: {
    fontSize: 11,
    color: "rgba(0, 0, 0, 0.475)",
    marginLeft: "auto",
    top: 30,
  },
  name: {
    fontSize: 13,
    color: "rgba(0, 0, 0, 0.575)",
  },
  message: {
    fontSize: 13,
    padding: 5,
    color: "rgba(0, 0, 0, 0.475)",
  },
  borderImage: {
    borderRightWidth: 1.8,
    padding: 10,
    borderColor: "gray",
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    alignItems: "center",
  },
  buttonAdd: {
    backgroundColor: "#00b23d",
    top: "15%",
    marginBottom: 30,
    shadowColor: "#000",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  inputBox: {
    marginTop: 30,
    padding: 30,
  },
  textArea: {
    height: 150,
    backgroundColor: "rgba(128, 128, 128, 0.180)",
    borderRadius: 10,
    paddingHorizontal: 10,
  },

  loadingImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sizeLoadingImage: {
    width: 400,
    height: 400,
  },
});
