import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";


const SignInAddNewTopic = ({ backgroundTopic }) => {

  const navigation = useNavigation();

  return (
    <>
      <ImageBackground
        source={{ uri: backgroundTopic }}
        style={{ width: "100%", height: "40%" }}
      ></ImageBackground>

      <View style={styles.centeredView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={[styles.buttonSignIn, styles.buttonSignInStyle]}
        >
          <Text style={styles.textStyle}>Sign In ( add new Topic )</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};


export default SignInAddNewTopic;


const styles = StyleSheet.create({
  centeredView: {
    alignItems: "center",
    marginTop: -170,
  },
  buttonSignIn: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    top: 10,
  },
  buttonSignInStyle: {
    backgroundColor: "#69B753",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});