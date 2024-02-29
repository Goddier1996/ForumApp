import { View } from "react-native";
import ShowCountTopics from "./ShowCountTopics";
import SignInAddNewTopic from "../addNewTopic/SignInAddNewTopic";
import styles from "../style/topics.style";


const MainShowBottomOptionsTopic = ({
  countTopic,
  idCategory,
  titleCategory,
  backgroundTopic
}) => {

  return (
    <View style={styles.positionShowAddAndCount}>
      <ShowCountTopics countTopic={countTopic} />
      <SignInAddNewTopic
        idCategory={idCategory}
        titleCategory={titleCategory}
        backgroundTopic={backgroundTopic}
      />
    </View>
  );
};


export default MainShowBottomOptionsTopic;