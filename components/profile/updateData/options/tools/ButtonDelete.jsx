import React, { useState } from "react";
import { TouchableOpacity, Image } from "react-native";
import styles from "../../../style/profile.style";
import { useSelector, useDispatch } from "react-redux";
import {
  userDeleteComment,
  userDeleteTopic,
} from "../../../function/FunctionProfile";
import CustomAlert from "../../../../tools/customAlert/CustomAlert";
import LoadingSmallSize from "../../../../tools/loading/LoadingSmallSize";



// this button delete, user in profile screen.
// use can delete topic or comment
const ButtonDelete = ({ data, setModalVisible, type }) => {


  // Redux
  const dispatch = useDispatch();
  const { loadingDelete } = useSelector((state) => state.commentsUserId);
  const { loadingTopic } = useSelector((state) => state.userDeleteTopic);

  const [showInfoHaveThisUserPopup, setShowInfoHaveThisUserPopup] =
    useState(false);

  
  return (
    <>
      {type === "delete comment" ? (
        !loadingDelete ? (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() =>
              userDeleteComment(
                dispatch,
                data,
                setShowInfoHaveThisUserPopup
              )
            }
          >
            <Image
              style={styles.icon}
              source={{
                uri: "https://i.postimg.cc/nVg1pYzV/icons8-recycle-bin-64.png",
              }}
            />
          </TouchableOpacity>
        ) : (
          <LoadingSmallSize type={"save"} />
        )
      ) : type === "delete topic" ? (
        !loadingTopic ? (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() =>
              userDeleteTopic(dispatch, data._id, setShowInfoHaveThisUserPopup)
            }
          >
            <Image
              style={styles.icon}
              source={{
                uri: "https://i.postimg.cc/nVg1pYzV/icons8-recycle-bin-64.png",
              }}
            />
          </TouchableOpacity>
        ) : (
          <LoadingSmallSize type={"save"} />
        )
      ) : (
        ""
      )}

      
      {/* this alert show when user delete topic or comment in profile screen */}
      <CustomAlert
        displayMode={"delete"}
        displayMsg={
          type === "delete comment"
            ? `Comment successfully deleted\nRefresh your profile pull down screen`
            : type === "delete topic"
            ? `Topic successfully deleted\nRefresh your profile pull down screen`
            : ""
        }
        visibility={showInfoHaveThisUserPopup}
        dismissAlert={setShowInfoHaveThisUserPopup}
        setModalVisible={setModalVisible}
      />
    </>
  );
};


export default ButtonDelete;