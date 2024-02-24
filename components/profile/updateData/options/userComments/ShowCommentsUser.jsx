import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../../style/profile.style";
import { useState } from "react";
import ListComments from "./ListComments";
import LoadingSmallSize from "../../../../tools/loading/LoadingSmallSize";


const ShowCommentsUser = ({ commentsUserId }) => {


  const [modalVisibleMessages, setModalVisibleMessages] = useState(false);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setModalVisibleMessages(true)}
      >
        <View style={styles.menuItem}>
          <Text style={styles.menuItemText}>
            {commentsUserId.loading ||
            commentsUserId.CommentsIdUser.length === 0
              ? ""
              : "My Comments"}
          </Text>
          <Text style={styles.menuItemText}>
            {commentsUserId.loading ||
            commentsUserId.CommentsIdUser.length === 0 ? (
              <LoadingSmallSize type={"text"} />
            ) : (
              commentsUserId.CommentsIdUser.length
            )}
          </Text>
        </View>
      </TouchableOpacity>

      {/* here show all comment user id */}
      <ListComments
        DataComment={commentsUserId.CommentsIdUser}
        modalVisibleMessages={modalVisibleMessages}
        setModalVisibleMessages={setModalVisibleMessages}
      />
    </>
  );
};


export default ShowCommentsUser;