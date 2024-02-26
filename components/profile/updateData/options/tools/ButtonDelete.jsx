import React, { useState } from "react";
import { TouchableOpacity, Image } from "react-native";
import styles from "../../../style/profile.style";
import { useSelector, useDispatch } from "react-redux";
import { userDeleteComment } from "../../../function/FunctionProfile";
import CustomAlert from "../../../../tools/customAlert/CustomAlert";
import LoadingSmallSize from "../../../../tools/loading/LoadingSmallSize";



const ButtonDelete = ({ dataComment, setModalVisible }) => {

  // Redux
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.userDeleteComment);

  const [showInfoHaveThisUserPopup, setShowInfoHaveThisUserPopup] =
    useState(false);

  
  return (
    <>
      {!loading ? (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            userDeleteComment(
              dispatch,
              dataComment._id,
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
      )}

      <CustomAlert
        displayMode={"delete"}
        displayMsg={`Comment successfully deleted\nRefresh your profile screen after deleting`}
        visibility={showInfoHaveThisUserPopup}
        dismissAlert={setShowInfoHaveThisUserPopup}
        setModalVisible={setModalVisible}
      />
    </>
  );
};


export default ButtonDelete;