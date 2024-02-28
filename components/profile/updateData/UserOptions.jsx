import { View } from "react-native";
import styles from "../style/profile.style";
import UpdateUserData from "./options/updateUserInfo/UpdateUserData";
import ShowTopicsUser from "./options/userTopics/ShowTopicsUser";
import ShowCommentsUser from "./options/userComments/ShowCommentsUser";
import { useSelector, useDispatch } from "react-redux";
import { userIdTopics } from "../../../Redux/featuers/topics/topicsIdUser";
import { userIdComments } from "../../../Redux/featuers/comments/commentsIdUser";
import { useEffect } from "react";


const UserOptions = ({ dataUser }) => {

  // use redux
  const topicsUserId = useSelector((state) => state.topicsUserId);
  const commentsUserId = useSelector((state) => state.commentsUserId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userIdTopics(dataUser.UserId._id));
    dispatch(userIdComments(dataUser.UserId._id));
  }, [dataUser.UserId._id]);

  
  return (
    <>
      <View style={styles.menuWrapper}>
        <ShowTopicsUser topicsUserId={topicsUserId} />
        <ShowCommentsUser commentsUserId={commentsUserId} />
      </View>

      <View style={styles.menuWrapperPersonalUserDate}>
        <UpdateUserData infoUser={dataUser} />
      </View>
    </>
  );
};


export default UserOptions;