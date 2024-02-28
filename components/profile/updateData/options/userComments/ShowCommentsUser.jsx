import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../../style/profile.style";
import { useState } from "react";
import ListComments from "./ListComments";
import LoadingSmallSize from "../../../../tools/loading/LoadingSmallSize";
import CustomAlert from "../../../../tools/customAlert/CustomAlert";


const ShowCommentsUser = ({ commentsUserId }) => {

  const [modalVisibleMessages, setModalVisibleMessages] = useState(false);

  const [showInfoHaveThisUserPopup, setShowInfoHaveThisUserPopup] =
    useState(false);

  
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() =>
          commentsUserId.CommentsIdUser.length === 0
            ? setShowInfoHaveThisUserPopup(true)
            : setModalVisibleMessages(true)
        }
      >
        <View style={styles.menuItem}>
          <Text style={styles.menuItemText}>
            {commentsUserId.loading ? null : "My Comments"}
          </Text>
          <Text style={styles.menuItemText}>
            {commentsUserId.loading ? (
              <LoadingSmallSize type={"text"} />
            ) : commentsUserId.CommentsIdUser.length === 0 ? (
              "0"
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

      {/* show alert if user dont have comments */}
      <CustomAlert
        displayMode={"infoProfileUser"}
        displayMsg={"Hi You Don't Have Comment's"}
        visibility={showInfoHaveThisUserPopup}
        dismissAlert={setShowInfoHaveThisUserPopup}
      />
    </>
  );
};

export default ShowCommentsUser;
