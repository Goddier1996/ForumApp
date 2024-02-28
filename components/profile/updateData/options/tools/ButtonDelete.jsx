import React from "react";
import { TouchableOpacity, Image } from "react-native";
import styles from "../../../style/profile.style";
import { useSelector, useDispatch } from "react-redux";
import {
  userDeleteComment,
  userDeleteTopic,
} from "../../../function/FunctionProfile";
import LoadingSmallSize from "../../../../tools/loading/LoadingSmallSize";



// this button delete, user in profile screen.
// use can delete topic or comment
const ButtonDelete = ({ data, type }) => {


  // Redux
  const dispatch = useDispatch();
  const { loadingDelete } = useSelector((state) => state.commentsUserId);
  const { loadingDeleteTopic } = useSelector((state) => state.topicsUserId);


  return (
    <>
      {type === "delete comment" ? (
        !loadingDelete ? (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => userDeleteComment(dispatch, data)}
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
        !loadingDeleteTopic ? (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => userDeleteTopic(dispatch, data)}
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
    </>
  );
};


export default ButtonDelete;