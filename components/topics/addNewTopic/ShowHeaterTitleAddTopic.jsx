import { View, Image } from "react-native";
import styles from "../style/topics.style";


const ShowHeaterTitleAddTopic = () => {
  return (
    <View style={styles.background}>
      <Image
        source={{
          uri: "https://i.postimg.cc/3rbhW38y/66.webp",
        }}
        style={styles.imageAddTopic}
        alt="add new topic"
      />
    </View>
  );
};


export default ShowHeaterTitleAddTopic;