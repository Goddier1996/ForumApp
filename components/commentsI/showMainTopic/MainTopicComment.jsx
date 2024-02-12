import { StyleSheet, Text, View, Image } from "react-native";
import { useRoute } from "@react-navigation/native";


const MainTopicComment = () => {

    
  const route = useRoute();

  return (
    <View key={route.params._id} style={styles.container}>
      <View style={styles.borderImage}>
        <Image
          style={styles.image}
          source={{ uri: route.params.allDataTopic.imageUser }}
        />
        <Text style={styles.name}>{route.params.allDataTopic.NameUser}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.message}>
          {route.params.allDataTopic.MessageForTopic}
        </Text>

        <View style={styles.contentHeader}>
          <Text style={styles.time}>
            Date Publish : {route.params.allDataTopic.DatePublished}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MainTopicComment;



const styles = StyleSheet.create({
  container: {
    margin: 5,
    paddingLeft: 19,
    paddingRight: 36,
    paddingVertical: 22,
    flexDirection: "row",
    marginTop: 35,
    // marginBottom: -18,
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
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    // marginLeft: 2,
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
    padding: 5,
    borderColor: "gray",
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    alignItems: "center",
  },
});
