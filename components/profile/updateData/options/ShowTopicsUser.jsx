import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../style/profile.style";

const ShowTopicsUser = () => {
  return (
    <TouchableOpacity
    // onPress={() => setModalVisibleTopic(true)}
    >
      <View style={styles.menuItem}>
        <Text style={styles.menuItemText}>Click My Topics</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ShowTopicsUser;
