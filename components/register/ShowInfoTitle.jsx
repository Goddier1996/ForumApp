import { View, Text } from "react-native";
import styles from "../../screens/register/register.style";


const ShowInfoTitle = () => {
  return (
    <View style={styles.infoRegister}>
      <Text style={styles.infoRegisterText}>
        By Registering, you confirm that you accept our
        <Text style={styles.infoRegisterBoldText}>Terms of Use</Text> and
        <Text style={styles.infoRegisterBoldText}> Privacy Policy</Text>
      </Text>
    </View>
  );
};


export default ShowInfoTitle;