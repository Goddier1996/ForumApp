import { View, Image } from "react-native";
import styles from "../style/info.style";


const ShowTitle = () => {
  return (
    <View style={styles.TitleForum}>
      <Image
        style={styles.infoTitle}
        source={{
          uri: "https://i.postimg.cc/rshww4hz/55.webp",
        }}
        alt="info"
      />
    </View>
  );
};


export default ShowTitle;