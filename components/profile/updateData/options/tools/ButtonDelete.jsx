import React from "react";
import { TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  userDeleteComment,
  userDeleteTopic,
} from "../../../function/FunctionProfile";
import LoadingSmallSize from "../../../../tools/loading/LoadingSmallSize";
import Ionicons from "react-native-vector-icons/Ionicons";



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
            <Ionicons name="trash-outline" color={"red"} size={30} />
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
            <Ionicons name="trash-outline" color={"red"} size={30} />
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