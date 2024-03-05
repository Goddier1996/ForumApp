import { View, Text, TouchableOpacity, Image } from "react-native";
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
           {!commentsUserId.loading ? (
            <>
              <Image
                style={styles.iconComments}
                source={{
                  uri: "https://i.postimg.cc/RZc1rLHK/talk.png",
                }}
                alt="comments user"
              />

              <Text style={styles.menuItemText}>My Comments</Text>

              <Text style={styles.menuItemText}>
                {commentsUserId.CommentsIdUser.length === 0
                  ? "0"
                  : commentsUserId.CommentsIdUser.length}
              </Text>
            </>
          ) : (
            <LoadingSmallSize type={"text"} />
          )}
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
