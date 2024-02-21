import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../style/login.style";


const DontHaveAccount = () => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
      <Text style={styles.registerText}>
        Don't have an account? Register Now
      </Text>
    </TouchableOpacity>
  );
};


export default DontHaveAccount;