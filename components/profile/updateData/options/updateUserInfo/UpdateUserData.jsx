import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../../../style/profile.style";
import { useState } from "react";
import InputValueUpdateUserInfo from "./InputValueUpdateUserInfo";


const UpdateUserData = ({ infoUser, setToken }) => {

  const [modalVisibleDemoUserCantUpdate, setModalVisibleDemoUserCantUpdate] =
    useState(false);

  
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setModalVisibleDemoUserCantUpdate(true)}
      >
        <View style={styles.menuItemPersonalUserDate}>
          <Image
            style={styles.iconComments}
            source={{
              uri: "https://i.postimg.cc/wT722Z7Z/update-20-48.png",
            }}
            alt="update data user"
          />
          <Text style={styles.menuItemText}>Update Personal Details</Text>
        </View>
      </TouchableOpacity>

      
      {/* show option input value to Update User Data */}
      <InputValueUpdateUserInfo
        modalVisibleDemoUserCantUpdate={modalVisibleDemoUserCantUpdate}
        setModalVisibleDemoUserCantUpdate={setModalVisibleDemoUserCantUpdate}
        infoUser={infoUser}
        setToken={setToken}
      />
    </>
  );
};

export default UpdateUserData;
