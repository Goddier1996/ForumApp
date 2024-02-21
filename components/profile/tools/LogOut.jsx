import { Text, TouchableOpacity, View } from "react-native";
import { logOutFromProfile } from "../function/FunctionProfile";
import styles from "../style/profile.style";
import { useNavigation } from "@react-navigation/native";


const LogOut = ({ setToken }) => {

  const navigation = useNavigation();

  return (
    <View style={styles.positionLogOut}>
    <TouchableOpacity
      style={styles.buttonLogOut}
      onPress={() => logOutFromProfile(setToken, navigation)}
    >
      <Text style={styles.caption}>Log out</Text>
    </TouchableOpacity>
    </View>

  );
};


export default LogOut;