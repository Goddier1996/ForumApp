import { Text, TouchableOpacity, View } from "react-native";
import styles from "../style/login.style";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { signInDemoUser } from "../function/login";
import CustomAlert from "../../tools/customAlert/CustomAlert";
import { useEffect, useState } from "react";



const ConnectDemoUser = ({ setToken }) => {

  const navigation = useNavigation();

  // Redux
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);



  const [showInfoHaveThisUserPopup, setShowInfoHaveThisUserPopup] =
    useState(false);
  
  
  
  
  // useEffect(() => {
  //   if (error) {
  //     setShowInfoHaveThisUserPopup(true)
  //     console.log("open")
  //   }
  // },[])


  return (
    <View style={styles.connectDemoUser}>
      <TouchableOpacity style={styles.connectDemoUser}>
        <Text
          onPress={() =>
            signInDemoUser(dispatch, setToken, navigation,setShowInfoHaveThisUserPopup)
          }
          style={styles.connectClick}
        >
          {/* connect Demo User */}
          {loading ? "loading" : "connect Demo User"}

          {error? <CustomAlert
            displayMode={"info"}
            displayMsg={error}
            visibility={showInfoHaveThisUserPopup}
            dismissAlert={setShowInfoHaveThisUserPopup}
          />:""}
        </Text>
      </TouchableOpacity>



      
  
    </View>
  );
};


export default ConnectDemoUser;