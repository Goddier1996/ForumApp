import { Text, TouchableOpacity } from "react-native";
import styles from "../../../style/profile.style";
import Ionicons from "react-native-vector-icons/Ionicons";


const CloseButton = ({ setModalVisible }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.buttonClose}
      onPress={() => setModalVisible(false)}
    >
      <Text style={styles.Close}>
        <Ionicons name="close-outline" color={"red"} size={30} />
      </Text>
    </TouchableOpacity>
  );
};


export default CloseButton;