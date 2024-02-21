import { View, Text } from "react-native";
import styles from "../style/comment.style";

const ShowCountComments = ({ countComment }) => {
  return (
          <View
      style={
        countComment ? styles.showCountComment : styles.showCountCommentNotHave
      }
    >
      <Text style={styles.countText}>{countComment}</Text>
    </View>
  );
};

export default ShowCountComments;