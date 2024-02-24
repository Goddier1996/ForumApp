import {
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import ImageBlurLoading from "react-native-image-blur-loading";
import { useState } from "react";
import ForgetPassword from "../components/signIn/forgetPassword/ForgetPassword";
import DontHaveAccount from "../components/signIn/dontHaveAccount/DontHaveAccount";
import ConnectDemoUser from "../components/signIn/connectDemoUser/ConnectDemoUser";
import styles from "../components/signIn/style/login.style";



const Login = ({setToken}) => {

  const [Login, setLogin] = useState("");
  const [Password, setPassword] = useState("");


  return (
    <ImageBackground
      source={{ uri: "https://i.postimg.cc/sfKm58XJ/download.jpg" }}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        <TouchableWithoutFeedback
          style={styles.container}
          onPress={Keyboard.dismiss}
          accessible={true}
        >
          <View style={styles.authBox}>
            <View style={{ alignItems: "center" }}>
              <ImageBlurLoading
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
        </TouchableWithoutFeedback>

        <View style={styles.styleClickButton}>
          <TouchableOpacity activeOpacity={0.9} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* connect demo user to check how app working */}
        <ConnectDemoUser setToken={setToken} />

        {/* if user don't register this app move to register screen */}
        <DontHaveAccount />

        {/* component forget password */}
        <ForgetPassword />
      </View>
    </ImageBackground>
  );
};


export default Login;