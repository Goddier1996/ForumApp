import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../style/profile.style";

const ShowCommentsUser = () => {
  return (
    <TouchableOpacity
    // onPress={() => setModalVisibleMessages(true)}
    >
      <View style={styles.menuItem}>
        <Text style={styles.menuItemText}>Click My Messages</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ShowCommentsUser;
