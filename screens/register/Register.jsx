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
import ImageBlurLoading from "react-native-image-blur-loading";



const Register = () => {


  const [Login, setLogin] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [LinkFileFoto, setLinkFileFoto] = useState("");

  // choose gender when register
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [gender, setGender] = useState("");

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

  return (
    <ImageBackground
      source={{ uri: "https://i.postimg.cc/sfKm58XJ/download.jpg" }}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={true}>
          <View style={styles.authBox}>
            <View style={{ alignItems: "center" }}>
              <ImageBlurLoading
                style={{ height: 150, width: 150 }}
                source={{
                  uri: "https://i.postimg.cc/Z54mCW5F/Pngtree-transparent-register-now-button-8709661.png",
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
                placeholder="name"
                onChangeText={setName}
                value={Name}
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

            <View style={styles.inputBox}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={setEmail}
                value={Email}
                keyboardType="email-address"
                placeholderTextColor={"black"}
              />
            </View>

            <View style={styles.inputBox}>
              <TextInput
                style={styles.input}
                placeholder="add Foto Link"
                onChangeText={setLinkFileFoto}
                value={LinkFileFoto}
                keyboardType="url"
                placeholderTextColor={"black"}
              />
              <Text style={styles.infoInputLink}>
                *No need to add a picture
              </Text>
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
            </View>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.buttonClick}>
          <TouchableOpacity activeOpacity={0.9} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Let's Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};


export default Register;