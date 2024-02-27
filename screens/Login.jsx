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
import { signInUser } from "../components/signIn/function/login";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import CustomAlert from "../components/tools/customAlert/CustomAlert";
import LoadingSmallSize from "../components/tools/loading/LoadingSmallSize";



const Login = ({ setToken }) => {


  const [Login, setLogin] = useState("");
  const [Password, setPassword] = useState("");

  const navigation = useNavigation();

  const [showInfoHaveThisUserPopup, setShowInfoHaveThisUserPopup] =
    useState(false);

  
  // Redux
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.connectUser);


  const [errors, setErrors] = useState({});

  // check if user input value
  const validateForm = () => {
    let errors = {};

    if (!Login) errors.Login = `Please Input Login`;
    if (!Password) errors.Password = `Please Input Password`;

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };



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
              {/* here show message user need input value */}
              {errors.Login ? (
                <View style={styles.messageUserNeedInputValue}>
                  <Text style={styles.textUserNeedInputValue}>
                    {errors.Login}
                  </Text>
                </View>
              ) : null}
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

              {/* here show message user need input value */}
              {errors.Password ? (
                <View style={styles.messageUserNeedInputValue}>
                  <Text style={styles.textUserNeedInputValue}>
                    {errors.Password}
                  </Text>
                </View>
              ) : null}
            </View>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.styleClickButton}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={!loading ? styles.loginButton : styles.loginButtonLoading}
            onPress={() =>
              signInUser(
                () => validateForm(),
                setToken,
                Login,
                Password,
                dispatch,
                navigation,
                setShowInfoHaveThisUserPopup
              )
            }
          >
            {!loading ? (
              <Text style={styles.loginButtonText}>Login</Text>
            ) : (
              <LoadingSmallSize type={"save"} />
            )}

            {error ? (
              <CustomAlert
                displayMode={"info"}
                displayMsg={error}
                visibility={showInfoHaveThisUserPopup}
                dismissAlert={setShowInfoHaveThisUserPopup}
                setModalVisible={null}
              />
            ) : (
              ""
            )}
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