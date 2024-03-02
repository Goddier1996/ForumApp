import { View } from "react-native";
import styles from "../style/profile.style";
import UpdateUserData from "./options/updateUserInfo/UpdateUserData";
import ShowTopicsUser from "./options/userTopics/ShowTopicsUser";
import ShowCommentsUser from "./options/userComments/ShowCommentsUser";


const UserOptions = ({ dataUser, setToken, topicsUserId, commentsUserId }) => {
  return (
    <>
      <View style={styles.menuWrapper}>
        <ShowTopicsUser topicsUserId={topicsUserId} />
        <ShowCommentsUser commentsUserId={commentsUserId} />
      </View>

      <View style={styles.menuWrapperPersonalUserDate}>
        <UpdateUserData infoUser={dataUser} setToken={setToken} />
      </View>
    </>
  );
};


export default UserOptions;