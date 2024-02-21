import { View, Text } from "react-native";
import styles from "../style/info.style";


const InfoAboutApp = () => {
  return (
    <View style={styles.about}>
      <Text style={styles.infoForum}>
        This forum contains a variety of categories.{"\n"}
        {"\n"}
        Each category has topics, in addition a user can add a new topic in the
        category of his choice.{"\n"}
        {"\n"}
        Each topic knows comments from users who will comment on your topic, in
        addition a user can comment on someone else's topic.{"\n"}
        {"\n"}A user can manage the messages and topics, a user can delete , and
        update the personal details.{"\n"}
        {"\n"}
        Admin manages all messages, topics, users and categories, in addition
        admin can add a new category.
      </Text>
    </View>
  );
};


export default InfoAboutApp;