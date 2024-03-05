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
import { validateEmailInput } from "../../../../../screens/register/registerFunction";
import Ionicons from "react-native-vector-icons/Ionicons";
import ModelChangeToNewPassword from "../newPassword/ModelChangeToNewPassword";
import { useSelector, useDispatch } from "react-redux";
import {
  closeModelCheckEmail,
  closeModelPassword,
} from "../../../function/login";
import CustomAlert from "../../../../tools/customAlert/CustomAlert";
import LoadingSmallSize from "../../../../tools/loading/LoadingSmallSize";
import ShowTitleCheckEmail from "./ShowTitleCheckEmail";



const ModelForgetPasswordCheckEmail = ({
  modalVisibleTopic,
  setModalVisibleTopic,
}) => {


  const [showInfoHaveThisUserPopup, setShowInfoHaveThisUserPopup] =
    useState(false);

  // Redux
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.forget);

  const [modalVisible, setModalVisible] = useState(false);

  const [Email, setEmail] = useState("");


  const [errors, setErrors] = useState({});


  // check if user input value
  const validateForm = () => {
    let errors = {};

    if (!Email || !validateEmailInput(Email))
      errors.Email = (
        <Ionicons name="information-circle" color={"#e48a33"} size={30} />
      );

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };



  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisibleTopic}
      >
        <TouchableWithoutFeedback
          style={styles.centeredView}
          onPress={Keyboard.dismiss}
          accessible={true}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ShowTitleCheckEmail />

              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  onChangeText={setEmail}
                  value={Email}
                  placeholder="Please Input Email"
                  keyboardType="email-address"
                  placeholderTextColor={"black"}
                />
                {/* here show message user need input value */}
                {errors.Email ? errors.Email : null}
              </View>

              <View style={styles.buttonsForgetPassword}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={
                    !dataUser.loading
                      ? styles.checkEmail
                      : styles.checkEmailLoading
                  }
                  onPress={() =>
                    !dataUser.loading
                      ? closeModelCheckEmail(
                          () => validateForm(),
                          Email,
                          dispatch,
                          setShowInfoHaveThisUserPopup,
                          setModalVisibleTopic,
                          setModalVisible
                        )
                      : null
                  }
                >
                  {!dataUser.loading ? (
                    <Text style={styles.checkEmailText}>Check Email</Text>
                  ) : (
                    <LoadingSmallSize type={"register"} />
                  )}
                </TouchableOpacity>

                {!dataUser.loading ? (
                  <TouchableOpacity
                    activeOpacity={0.9}
                    style={styles.closeForgetPassword}
                    onPress={() =>
                      closeModelPassword(
                        setModalVisibleTopic,
                        setEmail,
                        setErrors
                      )
                    }
                  >
                    <Text style={styles.closeForgetText}>Close</Text>
                  </TouchableOpacity>
                ) : null}
              </View>
            </View>

            {/* show alert not have this email in database */}
            {dataUser.error ? (
              <CustomAlert
                displayMode={"info"}
                displayMsg={dataUser.error}
                visibility={showInfoHaveThisUserPopup}
                dismissAlert={setShowInfoHaveThisUserPopup}
              />
            ) : (
              ""
            )}
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* this model popup where change to new password, active this popup when email this find! */}
      <ModelChangeToNewPassword
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        dataUser={dataUser.user != null ? dataUser.user : ""}
      />
    </>
  );
};


export default ModelForgetPasswordCheckEmail;