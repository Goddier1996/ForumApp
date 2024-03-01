import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../style/login.style"
import ModelForgetPasswordCheckEmail from "./modelPopUp/checkEmail/ModelForgetPasswordCheckEmail";


const ForgetPassword = () => {

  const [modalVisibleTopic, setModalVisibleTopic] = useState(false);

  return (
    <>
      <TouchableOpacity
      onPress={()=>setModalVisibleTopic(true)}
      >
      <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      
      <ModelForgetPasswordCheckEmail
        modalVisibleTopic={modalVisibleTopic}
        setModalVisibleTopic={setModalVisibleTopic}
      />
    </>

  );
};


export default ForgetPassword;