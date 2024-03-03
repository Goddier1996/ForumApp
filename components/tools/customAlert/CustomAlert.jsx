import { Modal, Text, View, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../style/tools.style";
import LoadingSmallSize from "../loading/LoadingSmallSize";


const CustomAlert = ({
  displayMode,
  displayMsg,
  visibility,
  dismissAlert,
  funcDelete,
  loading,
}) => {


  const closeModel = () => {
    if (displayMode == "infoDelete") {
      // delete topic or comment in user profile
      funcDelete();
    } else {
      dismissAlert(false);
    }
  };


  return (
    <Modal visible={visibility} animationType={"fade"} transparent={true}>
      <View style={styles.mainModel}>
        <View
          style={
            displayMode == "infoDelete"
              ? styles.inSiteDeleteTopic
              : styles.inSite
          }
        >
          <View style={styles.showIcon}>
            {displayMode == "info" ||
            displayMode == "infoProfileUser" ||
            displayMode == "infoDelete" ? (
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

          
          {/* button control */}
          <View>
            <View style={styles.positionButtons}>
              {displayMode == "infoDelete" ? (
                <>
                  {/* delete item */}
                  {!loading ? (
                    <TouchableOpacity
                      activeOpacity={0.9}
                      onPress={() => closeModel()}
                      style={styles.buttonAlertDeleteTopic}
                    >
                      <Text style={styles.textInButtonAlert}>Delete</Text>
                    </TouchableOpacity>
                  ) : (
                    <LoadingSmallSize type={"save"} />
                  )}

                  {/* close */}
                  {!loading ? (
                    <TouchableOpacity
                      activeOpacity={0.9}
                      onPress={() => dismissAlert(false)}
                      style={styles.closeAlert}
                    >
                      <Text style={styles.textInButtonAlert}>Close</Text>
                    </TouchableOpacity>
                  ) : null}
                </>
              ) : (
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
              )}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};


export default CustomAlert;