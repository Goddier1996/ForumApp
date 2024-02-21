import { View } from "react-native";
import ShowCountTopics from "./ShowCountTopics";
import SignInAddNewTopic from "../addNewTopic/SignInAddNewTopic";
import styles from "../style/topics.style";


const MainShowBottomOptionsTopic = ({ countTopic }) => {
  return (
    <View style={styles.positionShowAddAndCount}>
      <ShowCountTopics countTopic={countTopic} />
      <SignInAddNewTopic />
    </View>
  );
};


export default MainShowBottomOptionsTopic;