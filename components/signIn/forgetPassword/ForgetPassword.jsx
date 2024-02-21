import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../style/login.style";


const ForgetPassword = () => {
  return (
    <TouchableOpacity>
      <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
    </TouchableOpacity>
  );
};


export default ForgetPassword;