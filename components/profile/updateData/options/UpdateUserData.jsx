import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../style/profile.style";

const UpdateUserData = () => {
  return (
    <TouchableOpacity
    // onPress={() => checkTypeUser()}
    >
      <View style={styles.menuItem}>
        <Text style={styles.menuItemText}>Click Update Personal Details</Text>
      </View>
    </TouchableOpacity>
  );
};


export default UpdateUserData;