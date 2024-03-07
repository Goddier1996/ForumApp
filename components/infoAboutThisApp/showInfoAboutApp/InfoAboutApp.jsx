import { View, Text } from "react-native";
import styles from "../style/info.style";


const InfoAboutApp = () => {
  return (
    <View style={styles.about}>
      <Text style={styles.infoForum}>
        In this application you can see a variety of categories and topics
        depending on the selected category.{"\n"}
        Each topic has comments from users who respond to that topic question.
        {"\n"}
        The advantage of the app is a community forum, Any user can register and
        create a new topic and write a comment according to the category he
        wants from the phone without entering the websites.{"\n"}
        {"\n"}
        Application options :{"\n"}- A user can register.{"\n"}- User login.
        {"\n"}- User can recover the password if forgotten.{"\n"}- A user can
        delete the topic he created{"\n"}- User can delete the comment.{"\n"}-
        User can delete account.{"\n"}- A user can update his information.{"\n"}
        - User can add new topic and comment.
      </Text>
    </View>
  );
};


export default InfoAboutApp;