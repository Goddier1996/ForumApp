import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';



const CardTopic = ({ dataTopic }) => {

  const route = useRoute();

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.contentList}
        data={dataTopic}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("CommentsTopics", { allDataTopic: item, CategoryName: route.params.name })}
              key={item._id}
              style={styles.card}>
              <View>
                <Image style={styles.image} source={{ uri: item.imageUser }} />
                <Text style={styles.PublishBy}>
                  Created by : {item.NameUser}{" "}
                </Text>
              </View>

              <View style={styles.nameTopic}>
                <Text style={styles.name}>{item.nameTopic}</Text>
              </View>

              <View style={styles.positionTime}>
                <Text style={styles.timePublic}>
                  Date Publish : {item.DatePublished}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default CardTopic;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  contentList: {
    flex: 1,
  },
  positionTime: {
    height: 29,
    position: "absolute", //Here is the trick
    bottom: 0, //Here is the trick
    right: 15,
  },
  nameTopic: {
    position: "absolute",
    left: 0,
    top: 15,
    right: 0,
    height: 30,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#ebf0f9",
    // marginTop: 11,
  },
  card: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: "rgba(128, 128, 128, 0.140)",
    padding: 15,
    borderRadius: 20,
  },
  name: {
    fontSize: 17,
    alignSelf: "center",
    color: "black",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.575)",
  },
  timePublic: {
    fontSize: 10,
    color: "rgba(0, 0, 0, 0.475)",
  },
  PublishBy: {
    fontSize: 10,
    color: "rgba(0, 0, 0, 0.475)",
  },
});