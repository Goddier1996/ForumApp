import { Text, View } from "react-native";
import styles from "../style/topics.style";


const ShowCountTopics = ({ countTopic }) => {
  return (
    <View
      style={
        countTopic ? styles.positionCountText : styles.positionCountTextNotHave
      }
    >
      <Text style={styles.textShowCountTopics}>{countTopic}</Text>
    </View>
  );
};


export default ShowCountTopics;