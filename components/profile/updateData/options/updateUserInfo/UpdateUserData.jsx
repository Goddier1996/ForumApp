import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../../style/profile.style";
import { useState } from "react";
import InputValueUpdateUserInfo from "./InputValueUpdateUserInfo";


const UpdateUserData = ({infoUser}) => {

  const [modalVisibleDemoUserCantUpdate, setModalVisibleDemoUserCantUpdate] =
    useState(false);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setModalVisibleDemoUserCantUpdate(true)}
      >
        <View style={styles.menuItemPersonalUserDate}>
          <Text style={styles.menuItemText}>Update Personal Details</Text>
        </View>
      </TouchableOpacity>

      {/* show option input value to Update User Data */}
      <InputValueUpdateUserInfo
        modalVisibleDemoUserCantUpdate={modalVisibleDemoUserCantUpdate}
        setModalVisibleDemoUserCantUpdate={setModalVisibleDemoUserCantUpdate}
        infoUser={infoUser}
      />
    </>
  );
};


export default UpdateUserData;