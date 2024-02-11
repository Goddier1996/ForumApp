import { StyleSheet, Text, View, Image } from "react-native";


const ShowMessageNotHaveTopics = () => {
  return (
    <View style={styles.loadingImage}>
      <Image
        style={styles.notHaveItems}
        source={{
          uri: "https://media.tenor.com/IbZePZ2opZkAAAAi/rascal-nothing-to-see-here.gif",
        }}
      />
      <Text>{"\n"}* Add Topic , This Category Don't Have Topic's</Text>
    </View>
  );
};

export default ShowMessageNotHaveTopics;


const styles = StyleSheet.create({
  loadingImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  notHaveItems: {
    width: 130,
    height: 100,
  },
});