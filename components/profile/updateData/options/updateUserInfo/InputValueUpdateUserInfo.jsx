import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "../../../style/profile.style";
import { useEffect, useState } from "react";
import CloseButton from "../tools/CloseButton";
import { validateEmailInput } from "../../../../../screens/register/registerFunction";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import CustomAlert from "../../../../tools/customAlert/CustomAlert";
import { updatePersonalDataUser } from "../../../function/FunctionProfile";
import LoadingSmallSize from "../../../../tools/loading/LoadingSmallSize";



const InputValueUpdateUserInfo = ({
  modalVisibleDemoUserCantUpdate,
  setModalVisibleDemoUserCantUpdate,
  infoUser,
  setToken,
}) => {


  const navigation = useNavigation();

  // Redux
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.updateUserData);

  const [showInfoHaveThisUserPopup, setShowInfoHaveThisUserPopup] =
    useState(false);

  const [Login, setLogin] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [LinkFileFoto, setLinkFileFoto] = useState("");



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

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  useEffect(() => {
    setName(infoUser.UserId.Name);
    setLogin(infoUser.UserId.Login);
    setPassword(infoUser.UserId.Password);
    setEmail(infoUser.UserId.Email);
    setLinkFileFoto(infoUser.UserId.FotoUser);
  }, [infoUser]);


  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisibleDemoUserCantUpdate}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalViewUserDAta}>
            {!loading ? (
              <CloseButton
                setModalVisible={setModalVisibleDemoUserCantUpdate}
              />
            ) : null}

            <View style={styles.titleUpdate}>
              <Text style={styles.userUpdate}>
                {infoUser.UserId.Name} Update
                {"\n"}your personal Data
              </Text>
            </View>

            <View style={styles.positionInputValue}>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  onChangeText={setLogin}
                  value={Login}
                  placeholder={"Login: " + infoUser.UserId.Login}
                  keyboardType="default"
                  placeholderTextColor={"black"}
                />
                {/* here show message user need input value */}
                {errors.Login ? errors.Login : null}
              </View>

              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  placeholder={"Your Name: " + infoUser.UserId.Name}
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
                  secureTextEntry={true}
                  placeholder={"Your Password: " + infoUser.UserId.Password}
                  onChangeText={setPassword}
                  value={Password}
                  keyboardType="numeric"
                  placeholderTextColor={"black"}
                />
                {/* here show message user need input value */}
                {errors.Password ? errors.Password : null}
              </View>

              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  placeholder={"Your Email: " + infoUser.UserId.Email}
                  onChangeText={setEmail}
                  value={Email}
                  keyboardType="email-address"
                  placeholderTextColor={"black"}
                />
                {/* here show message user need input value */}
                {errors.Email ? errors.Email : null}
              </View>
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
            </View>

            <View style={styles.buttonClick}>
              <TouchableOpacity
                activeOpacity={0.9}
                style={
                  !loading ? styles.ChangeButton : styles.ChangeButtonLoading
                }
                onPress={() =>
                  !loading
                    ? updatePersonalDataUser(
                        () => validateForm(),
                        Login,
                        Name,
                        Password,
                        Email,
                        LinkFileFoto,
                        dispatch,
                        navigation,
                        setShowInfoHaveThisUserPopup,
                        infoUser.UserId,
                        setToken
                      )
                    : null
                }
              >
                {!loading ? (
                  <Text style={styles.ChangeButtonText}>Update Your Info</Text>
                ) : (
                  <LoadingSmallSize type={"register"} />
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
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};


export default InputValueUpdateUserInfo;