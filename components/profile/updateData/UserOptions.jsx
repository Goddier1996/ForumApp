import { View } from "react-native";
import styles from "../style/profile.style";
import UpdateUserData from "./options/UpdateUserData";
import ShowTopicsUser from "./options/ShowTopicsUser";
import ShowCommentsUser from "./options/ShowCommentsUser";


const UserOptions = () => {
  return (
    <View style={styles.menuWrapper}>
      <UpdateUserData />
      <ShowTopicsUser />
      <ShowCommentsUser />
    </View>
  );
};


export default UserOptions;