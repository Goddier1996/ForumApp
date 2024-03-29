import {
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import ForgetPassword from "../components/signIn/forgetPassword/ForgetPassword";
import DontHaveAccount from "../components/signIn/dontHaveAccount/DontHaveAccount";
import styles from "../components/signIn/style/login.style";
import { signInUser } from "../components/signIn/function/login";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import CustomAlert from "../components/tools/customAlert/CustomAlert";
import LoadingSmallSize from "../components/tools/loading/LoadingSmallSize";
import Ionicons from "react-native-vector-icons/Ionicons";
import ShowHeaterTitle from "../components/tools/TitleHeaterTop/ShowHeaterTitle";
import ShowMiniTitleSignIn from "../components/signIn/ShowMiniTitleSignIn";



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

    if (!Login)
      errors.Login = (
        <Ionicons name="information-circle" color={"#e48a33"} size={30} />
      );
    if (!Password)
      errors.Password = (
        <Ionicons name="information-circle" color={"#e48a33"} size={30} />
      );

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <>
      <ShowHeaterTitle type={"login"} img={"https://i.postimg.cc/GpTpsMvs/login1.webp"} />

      <View style={styles.container}>
        <TouchableWithoutFeedback
          style={styles.container}
          onPress={Keyboard.dismiss}
          accessible={true}
        >
          <View style={styles.authBox}>

            <ShowMiniTitleSignIn />

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
              {errors.Login ? errors.Login : null}
            </View>

            <View style={styles.inputBox}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={setPassword}
                value={Password}
                keyboardType="default"
                secureTextEntry={true}
                placeholderTextColor={"black"}
              />
              {/* here show message user need input value */}
              {errors.Password ? errors.Password : null}
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
              <Text style={styles.loginButtonText}>Sign In</Text>
            ) : (
              <LoadingSmallSize type={"save"} />
            )}

            {error ? (
              <CustomAlert
                displayMode={"info"}
                displayMsg={error}
                visibility={showInfoHaveThisUserPopup}
                dismissAlert={setShowInfoHaveThisUserPopup}
              />
            ) : (
              ""
            )}
          </TouchableOpacity>
        </View>

        {/* component forget password */}
        <ForgetPassword />

        {/* if user don't register this app move to register screen */}
        <DontHaveAccount />
      </View>
    </>
  );
};


export default Login;