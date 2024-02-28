import { Modal, Text, View, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../style/tools.style";


const CustomAlert = ({ displayMode, displayMsg, visibility, dismissAlert }) => {
  const closeModel = () => {
    dismissAlert(false);
  };


  return (
    <Modal visible={visibility} animationType={"fade"} transparent={true}>
      <View style={styles.mainModel}>
        <View style={styles.inSite}>
          <View style={styles.showIcon}>
            {displayMode == "info" || displayMode == "infoProfileUser" ? (
              <>
                <Ionicons
                  name="information-circle"
                  color={"#e48a33"}
                  size={80}
                />
              </>
            ) : displayMode == "delete" ? (
              <>
                <Ionicons
                  name="checkmark-done-outline"
                  color={"#00b23d"}
                  size={80}
                />
              </>
            ) : (
              <>
                <MaterialIcons name="cancel" color={"red"} size={80} />
              </>
            )}
            <Text style={styles.messageInAlert}>{displayMsg}</Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => closeModel()}
            style={styles.buttonAlert}
          >
            <Text style={styles.textInButtonAlert}>
              {displayMode == "delete" || displayMode == "infoProfileUser"
                ? "Ok"
                : "Try Again"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};


export default CustomAlert;