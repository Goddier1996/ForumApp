import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from "react-native";
import styles from "../../../style/login.style";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import ShowTitleChangePassword from "./ShowTitleChangePassword";
import {
  closeModelPassword,
  updatePersonalDataUser,
} from "../../../function/login";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import LoadingSmallSize from "../../../../tools/loading/LoadingSmallSize";



const ModelChangeToNewPassword = ({
  modalVisible,
  setModalVisible,
  dataUser,
}) => {


  const navigation = useNavigation();

  // Redux
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.updateUserData);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const [errors, setErrors] = useState({});
  const [PasswordsNotSame] = useState("");
  const [PasswordsLength] = useState("");
  const [samePasswords] = useState("");

  // check if user input value
  const validateForm = () => {
    let errors = {};

    if (!password)
      errors.password = (
        <Ionicons name="information-circle" color={"#e48a33"} size={30} />
      );

    if (password.length < 6 && password)
      errors.PasswordsLength = (
        <Text style={styles.PasswordsLengthText}>
          Password length is less than 6
        </Text>
      );

    if (!confirmPassword)
      errors.confirmPassword = (
        <Ionicons name="information-circle" color={"#e48a33"} size={30} />
      );

    if (
      password &&
      confirmPassword &&
      confirmPassword !== password &&
      password.length >= 6 &&
      confirmPassword.length >= 6
    )
      errors.PasswordsNotSame = (
        <Text style={styles.PasswordsNotSameText}>
          Passwords are not the same
        </Text>
      );

    if (dataUser.Password === password && dataUser.Password === confirmPassword)
      errors.samePasswords = (
        <Text style={styles.PasswordsNotSameText}>
          Password is the same as your old password
        </Text>
      );

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <TouchableWithoutFeedback
        style={styles.centeredView}
        onPress={Keyboard.dismiss}
        accessible={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ShowTitleChangePassword nameUser={dataUser.Name} />

            <View style={styles.inputBox}>
              <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Input New Password- min length 6"
                keyboardType="default"
                placeholderTextColor={"black"}
              />
              {/* here show message user need input value */}
              {errors.password ? errors.password : null}
            </View>
            <View style={styles.PasswordsNotSame}>
              {errors.PasswordsLength ? errors.PasswordsLength : null}
            </View>

            <View style={styles.inputBox}>
              <TextInput
                style={styles.input}
                onChangeText={setConfirmPassword}
                value={confirmPassword}
                placeholder="Confirm Password"
                keyboardType="default"
                placeholderTextColor={"black"}
              />
              {/* here show message user need input value */}
              {errors.confirmPassword ? errors.confirmPassword : null}
            </View>

            {/* here show message Passwords are not the same */}
            <View style={styles.PasswordsNotSame}>
              {errors.PasswordsNotSame ? errors.PasswordsNotSame : null}
            </View>

            {/* here show message Password is the same as your old password */}
            <View style={styles.PasswordsNotSame}>
              {errors.samePasswords ? errors.samePasswords : null}
            </View>

            <View style={styles.buttonsForgetPassword}>
              <TouchableOpacity
                style={
                  !loading
                    ? styles.checkSavePassword
                    : styles.checkSavePasswordLoading
                }
                onPress={() =>
                  !loading
                    ? updatePersonalDataUser(
                        () => validateForm(),
                        password,
                        dispatch,
                        navigation,
                        setModalVisible,
                        dataUser._id
                      )
                    : null
                }
              >
                {!loading ? (
                  <Text style={styles.checkEmailText}>Save</Text>
                ) : (
                  <LoadingSmallSize type={"register"} />
                )}
              </TouchableOpacity>

              {!loading ? (
                <TouchableOpacity
                  style={styles.closeForgetPassword}
                  onPress={() =>
                    closeModelPassword(setModalVisible, setPassword, setErrors)
                  }
                >
                  <Text style={styles.closeForgetText}>Exit</Text>
                </TouchableOpacity>
              ) : null}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};


export default ModelChangeToNewPassword;