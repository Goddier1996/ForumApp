import { TouchableOpacity, View } from "react-native";
import { logOutFromProfile } from "../function/FunctionProfile";
import styles from "../style/profile.style";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";



const LogOut = ({ setToken }) => {

  const navigation = useNavigation();

  return (
    <View style={styles.positionLogOut}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.buttonLogOut}
        onPress={() => logOutFromProfile(setToken, navigation)}
      >
        <Ionicons name="log-out-outline" color={"red"} size={40} />
      </TouchableOpacity>
    </View>
  );
};


export default LogOut;