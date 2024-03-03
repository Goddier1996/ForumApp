import { View, TouchableOpacity, Text } from "react-native";
import styles from "../style/profile.style";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { deleteAccountUser } from "../function/FunctionProfile";
import CustomAlert from "../../tools/customAlert/CustomAlert";
import { useState } from "react";


const ButtonDeleteAccount = ({ idUser, setToken }) => {


  // Redux
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.removeAccount);

  const navigation = useNavigation();

  const [showInfoHaveThisUserPopup, setShowInfoHaveThisUserPopup] =
  useState(false);


  return (
    <View style={styles.buttonClickRemoveAccount}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.ChangeButtonRemoveAccount}
        onPress={() =>setShowInfoHaveThisUserPopup(true)}
      >
          <Text style={styles.RemoveAccountText}>Delete Account</Text>
      </TouchableOpacity>


      {/* alert message */}
      <CustomAlert
        displayMode={"infoDelete"}
        displayMsg={`Are you sure you want to delete Your Account?\nAll your comments topics will be deleted.`}
        visibility={showInfoHaveThisUserPopup}
        dismissAlert={setShowInfoHaveThisUserPopup}
        funcDelete={() => deleteAccountUser(dispatch, navigation, setToken, idUser)}
        loading={loading}
      />
    </View>
  );
};


export default ButtonDeleteAccount;