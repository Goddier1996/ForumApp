import { View, TouchableOpacity, Text } from "react-native";
import styles from "../style/profile.style";


const ButtonDeleteAccount = () => {

  return (
    <View style={styles.buttonClickRemoveAccount}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.ChangeButtonRemoveAccount}
      >
        <Text style={styles.RemoveAccountText}>Delete Account</Text>
      </TouchableOpacity>
    </View>
  );
};


export default ButtonDeleteAccount;