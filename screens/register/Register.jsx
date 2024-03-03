import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";
import { CheckBox } from "@rneui/themed";
import styles from "./register.style";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { registerUser, validateEmailInput } from "./registerFunction";
import LoadingSmallSize from "../../components/tools/loading/LoadingSmallSize";
import CustomAlert from "../../components/tools/customAlert/CustomAlert";
import ShowButtonInfoTitle from "../../components/register/ShowButtonInfoTitle";
import ShowHeaterTitle from "../../components/register/ShowHeaterTitle";



const Register = () => {


  const navigation = useNavigation();

  // Redux
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.register);

  const [showInfoHaveThisUserPopup, setShowInfoHaveThisUserPopup] =
    useState(false);

  
  const [Login, setLogin] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [LinkFileFoto, setLinkFileFoto] = useState("");

  // choose gender when register
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [gender, setGender] = useState("");

  const [PasswordsLength] = useState("");

  // select a gender
  const genderMale = () => {
    setMale(true);
    setFemale(false);
    setGender("Male");
  };

  const genderFemale = () => {
    setMale(false);
    setFemale(true);
    setGender("Female");
  };

  const [errors, setErrors] = useState({});


  // check if user input value
  const validateForm = () => {
    let errors = {};

    if (!Login)
      errors.Login = (
        <Ionicons name="information-circle" color={"#e48a33"} size={30} />
      );
    if (!Name)
      errors.Name = (
        <Ionicons name="information-circle" color={"#e48a33"} size={30} />
      );
    if (!Password)
      errors.Password = (
        <Ionicons name="information-circle" color={"#e48a33"} size={30} />
      );
    if (!Email || !validateEmailInput(Email))
      errors.Email = (
        <Ionicons name="information-circle" color={"#e48a33"} size={30} />
      );
    if (!gender)
      errors.gender = (
        <Ionicons name="information-circle" color={"#e48a33"} size={30} />
      );
    if (Password.length < 6 && Password)
      errors.PasswordsLength = (
        <Text style={styles.PasswordsLengthText}>
          Password length is less than 6
        </Text>
      );

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };


  return (
    <ImageBackground
      source={{ uri: "https://i.postimg.cc/SsvsfCh8/11.webp" }}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={true}>
          <View style={styles.authBox}>
            <ShowHeaterTitle />

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
                placeholder="name"
                onChangeText={setName}
                value={Name}
                keyboardType="default"
                placeholderTextColor={"black"}
              />
              {/* here show message user need input value */}
              {errors.Name ? errors.Name : null}
            </View>

            <View style={styles.inputBox}>
              <TextInput
                style={styles.input}
                placeholder="Password (min length 6)"
                onChangeText={setPassword}
                value={Password}
                keyboardType="default"
                secureTextEntry={true}
                placeholderTextColor={"black"}
              />
              {/* here show message user need input value */}
              {errors.Password ? errors.Password : null}
            </View>
            <View style={styles.PasswordsNotSame}>
              {errors.PasswordsLength ? errors.PasswordsLength : null}
            </View>

            <View style={styles.inputBox}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={setEmail}
                value={Email}
                keyboardType="email-address"
                placeholderTextColor={"black"}
              />
              {/* here show message user need input value */}
              {errors.Email ? errors.Email : null}
            </View>

            <View style={styles.inputBox}>
              <TextInput
                style={styles.input}
                placeholder="*No need to add a Photo Link"
                onChangeText={setLinkFileFoto}
                value={LinkFileFoto}
                keyboardType="url"
                placeholderTextColor={"black"}
              />
            </View>

            <View style={styles.checkBox}>
              <CheckBox
                center
                title="Male"
                checked={male}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                onPress={genderMale}
                containerStyle={{ backgroundColor: null, borderWidth: null }}
              />

              <CheckBox
                center
                title="Female"
                checkedColor="rgb(221, 167, 176)"
                checked={female}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                onPress={genderFemale}
                containerStyle={{ backgroundColor: null, borderWidth: null }}
              />
              {/* here show message user need input value */}
              {errors.gender ? errors.gender : null}
            </View>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.buttonClick}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={
              !loading ? styles.registerButton : styles.registerButtonLoading
            }
            onPress={() =>
              !loading
                ? registerUser(
                    () => validateForm(),
                    Login,
                    Name,
                    Password,
                    Email,
                    LinkFileFoto,
                    gender,
                    dispatch,
                    navigation,
                    setShowInfoHaveThisUserPopup,
                    setLogin,
                    setName,
                    setPassword,
                    setEmail,
                    setLinkFileFoto,
                    setMale,
                    setFemale
                  )
                : null
            }
          >
            {!loading ? (
              <Text style={styles.registerButtonText}>Register</Text>
            ) : (
              <LoadingSmallSize type={"register"} />
            )}
          </TouchableOpacity>
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
        </View>
        <ShowButtonInfoTitle />
      </View>
    </ImageBackground>
  );
};


export default Register;