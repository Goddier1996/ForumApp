import {
  View,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";



const Login = () => {


  const [Login, setLogin] = useState("");
  const [Password, setPassword] = useState("");

  const navigation = useNavigation();

  return (
    <ImageBackground
      source={{ uri: "https://i.postimg.cc/sfKm58XJ/download.jpg" }}
      style={{ width: "100%", height: "100%" }}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.centerizedView}>
            <View style={styles.authBox}>
              <View style={{ alignItems: "center" }}>
                <Image
                  style={{ height: 200, width: 200 }}
                  source={{
                    uri: "https://i.postimg.cc/3xGnb8C6/Lovepik-com-450124259-An-icon-of-account-login-in-hand-drawn-style.png",
                  }}
                />
              </View>

              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  onChangeText={setLogin}
                  value={Login}
                  placeholder="Login"
                  keyboardType="default"
                  placeholderTextColor={"black"}
                />
              </View>

              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  placeholder="password"
                  onChangeText={setPassword}
                  value={Password}
                  keyboardType="numeric"
                  placeholderTextColor={"black"}
                />
              </View>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.styleClickButton}>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.connectDemoUser}>
            <Text style={styles.connectClick}>connect Demo User</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.registerText}>
              Don't have an account? Register Now
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Login;




const styles = StyleSheet.create({
  // style alert popup
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },

  modalView: {
    width: 320,
    height: 330,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "center",
  },
  modalTextTitle: {
    color: "3#c466a",
    fontSize: 18,
    marginTop: 30,
  },
  modalText: {
    color: "3#c466a",
    fontSize: 16,
    marginTop: 10,
  },

  textStyleCLose: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 50,
  },
  container: {
    marginTop: 110,
  },

  authBox: {
    width: "80%",
    borderRadius: 20,
    alignSelf: "center",
    paddingHorizontal: 14,
    paddingBottom: 30,
    shadowColor: "#000",
  },

  loginTitleText: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 10,
  },

  inputBox: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "rgba(128, 128, 128, 0.140)",
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  styleClickButton: {
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#f6c250",
    marginTop: 15,
    paddingVertical: 8,
    borderRadius: 4,
    width: 120,
  },
  loginButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerText: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 12,
    color: "rgba(0, 0, 0, 0.475)",
  },
  forgotPasswordText: {
    textAlign: "center",
    marginTop: 12,
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.475)",
  },

  connectDemoUser: {
    alignItems: "center",
    marginTop: 30,
  },
  connectClick: {
    fontWeight: "bold",
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.575)",
  },
});
