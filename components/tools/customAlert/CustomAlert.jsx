import { Modal, Text, View, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";


const CustomAlert = ({ displayMode, displayMsg, visibility, dismissAlert }) => {
  return (
    <View>
      <Modal
        visible={visibility}
        animationType={"fade"}
        transparent={true}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(52, 52, 52, 0.8)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              alignItems: "center",
              backgroundColor: "white",
              height: 200,
              width: "90%",
              borderWidth: 1,
              borderColor: "#fff",
              borderRadius: 7,
              elevation: 10,
            }}
          >
            <View style={{ alignItems: "center", margin: 10 }}>
              {displayMode == "info" ? (
                <>
                  <Ionicons
                    name="information-circle"
                    color={"#e48a33"}
                    size={80}
                  />
                </>
              ) : (
                <>
                  <MaterialIcons name="cancel" color={"red"} size={80} />
                </>
              )}
              <Text style={{ fontSize: 18, marginTop: 5 }}>{displayMsg}</Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => dismissAlert(false)}
              style={{
                width: "30%",
                borderRadius: 0,
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                backgroundColor: "#00b23d",
                borderColor: "#ddd",
                borderBottomWidth: 0,
                borderRadius: 5,
                bottom: 0,
                marginBottom: 10,
              }}
            >
              <Text style={{ color: "white", margin: 15, fontSize: 16 }}>
                Try Again
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomAlert;
