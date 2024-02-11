import { StyleSheet, View, Image } from "react-native";

const Loading = () => {
  return (
    <View style={styles.loadingImage}>
      <Image
        style={styles.sizeLoadingImage}
        source={{
          uri: "https://i.postimg.cc/vm3V2tNH/Please-Wait-Loading-Image-Gif.gif",
        }}
      />
    </View>
  );
};

export default Loading;


const styles = StyleSheet.create({
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