import { StyleSheet, Text, View, Image } from "react-native";
import { useRoute } from "@react-navigation/native";



const ShowTitleTopic = () => {

  const route = useRoute();

  return (
    <View style={styles.titleInfo}>
      <Text style={styles.TextInfo}>
        <Image
          style={{ width: 22, height: 22 }}
          source={{ uri: "https://i.postimg.cc/wBXwVd2K/categories.png" }}
        />
        {""} {route.params.CategoryName} {">"}{" "}
        <Image
          style={{ width: 22, height: 22 }}
          source={{
            uri: "https://i.postimg.cc/YCgRrwJ4/trending-topic.png",
          }}
        />
        {""} {route.params.allDataTopic.nameTopic}
      </Text>
    </View>
  );
};

export default ShowTitleTopic;



const styles = StyleSheet.create({
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
});
