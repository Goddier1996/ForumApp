import { View } from "react-native";
import styles from "../style/info.style";
import ImageBlurLoading from "react-native-image-blur-loading";


const ShowTitle = () => {
  return (
    <View style={styles.TitleForum}>
      <ImageBlurLoading
        style={styles.infoTitle}
        source={{
          uri: "https://i.postimg.cc/k40848cj/information-5296156.png",
        }}
      />
    </View>
  );
};


export default ShowTitle;