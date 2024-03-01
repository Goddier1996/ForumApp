import ImageBlurLoading from "react-native-image-blur-loading";
import styles from "../style/topics.style";


const ShowImgTopic = ({ backgroundTopic }) => {
  return (
    <ImageBlurLoading
      source={{ uri: backgroundTopic }}
      style={styles.imageTopic}
      alt={backgroundTopic}
    />
  );
};


export default ShowImgTopic;