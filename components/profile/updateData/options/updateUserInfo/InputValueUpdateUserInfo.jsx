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
import { useState } from "react";
import CloseButton from "../tools/CloseButton";



const InputValueUpdateUserInfo = ({
  modalVisibleDemoUserCantUpdate,
  setModalVisibleDemoUserCantUpdate,
  infoUser,
}) => {


  const [Login, setLogin] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");


  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisibleDemoUserCantUpdate}
    >
      <View style={styles.centeredView}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={true}>
          <View style={styles.modalViewUserDAta}>
            <CloseButton setModalVisible={setModalVisibleDemoUserCantUpdate} />
            <View style={styles.titleUpdate}>
              <Text style={styles.userUpdate}>
                Let's Update {infoUser.UserId.Name}
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
              </View>
            </View>

            <View style={styles.buttonClick}>
              <TouchableOpacity activeOpacity={0.9} style={styles.ChangeButton}>
                <Text style={styles.ChangeButtonText}>Update Your Info</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};


export default InputValueUpdateUserInfo;