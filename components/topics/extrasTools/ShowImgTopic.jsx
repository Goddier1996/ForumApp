import ImageBlurLoading from "react-native-image-blur-loading";
import styles from "../style/topics.style";


const ShowImgTopic = ({ backgroundTopic }) => {
  return (
    <ImageBlurLoading
      // thumbnailSource={{ uri: "https://picsum.photos/id/1/50/50" }}
      source={{ uri: backgroundTopic }}
      style={styles.imageTopic}
    />
  );
};


export default ShowImgTopic;