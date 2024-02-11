import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";



const InfoAbout = () => {
  return (
    <ImageBackground
      source={{ uri: "https://i.postimg.cc/sfKm58XJ/download.jpg" }}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.TitleForum}>
        <Text style={styles.infoTitle}>Info About Froum :</Text>
      </View>

      <View style={styles.container}></View>

      <View style={styles.about}>
        <Text style={styles.infoForum}>
          (1) This forum contains a variety of categories.{"\n"}
          {"\n"}
          (2) Each category has topics, in addition a user can add a new topic
          in the category of his choice.{"\n"}
          {"\n"}
          (3) Each topic knows comments from users who will comment on your
          topic, in addition a user can comment on someone else's topic.{"\n"}
          {"\n"}
          (4) A user can manage the messages and topics, a user can delete , and
          update the personal details.{"\n"}
          {"\n"}
          (5) Admin manages all messages, topics, users and categories, in
          addition admin can add a new category.
        </Text>
      </View>
    </ImageBackground>
  );
};

export default InfoAbout;



const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  menuBox: {
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },
  icon: {
    width: 50,
    height: 50,
  },
  info: {
    fontSize: 15,
    color: "rgba(0, 0, 0, 0.475)",
  },
  infoTitle: {
    color: "rgba(0, 0, 0, 0.475)",
    fontSize: 20,
  },
  about: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    margin: 20,
  },
  infoForum: {
    fontSize: 14.5,
    color: "rgba(0, 0, 0, 0.475)",
    width: "90%",
  },
  TitleForum: {
    paddingTop: 70,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  loadingCountInfo: {
    paddingTop: 10,
  },
});