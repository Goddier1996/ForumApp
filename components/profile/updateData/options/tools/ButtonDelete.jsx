import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  userDeleteComment,
  userDeleteTopic,
} from "../../../function/FunctionProfile";
import LoadingSmallSize from "../../../../tools/loading/LoadingSmallSize";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomAlert from "../../../../tools/customAlert/CustomAlert";


// this button delete, user in profile screen.
// use can delete topic or comment
const ButtonDelete = ({ data, type }) => {

  // Redux
  const dispatch = useDispatch();
  const { loadingDelete } = useSelector((state) => state.commentsUserId);
  const { loadingDeleteTopic } = useSelector((state) => state.topicsUserId);

  const [showInfoHaveThisUserPopup, setShowInfoHaveThisUserPopup] =
    useState(false);

  
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
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setShowInfoHaveThisUserPopup(true)}
          >
            <Ionicons name="trash-outline" color={"red"} size={30} />
          </TouchableOpacity>
      ) : (
        ""
      )}

      <CustomAlert
        displayMode={"infoDelete"}
        displayMsg={`Are you sure you want to delete?\n The Topic ${data.nameTopic}\nAll comments this topic will be deleted.`}
        visibility={showInfoHaveThisUserPopup}
        dismissAlert={setShowInfoHaveThisUserPopup}
        funcDelete={() => userDeleteTopic(dispatch, data)}
        loading={loadingDeleteTopic}
      />
    </>
  );
};


export default ButtonDelete;