import { View, SafeAreaView, Text, ImageBackground } from "react-native";
import LogOut from "../../components/profile/tools/LogOut";
import InfoUser from "../../components/profile/showInfoUser/InfoUser";
import UserOptions from "../../components/profile/updateData/UserOptions";
import CountUserItems from "../../components/profile/showCount/CountUserItems";
import styles from "../profile/profile.style";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";



const ProfileUser = ({ setToken }) => {


  const [dataUser, setDataUser] = useState({});

  const getUserData = async () => {
    const savedUser = await AsyncStorage.getItem("user");
    const currentUser = JSON.parse(savedUser);
    setDataUser(currentUser);
  };


  useEffect(() => {
    getUserData();
  }, []);


  return(
    <ImageBackground
      source={{ uri: "https://i.postimg.cc/sfKm58XJ/download.jpg" }}
      style={{ width: "100%", height: "100%" }}
    >
      {/* Log out from profile user */}
      <LogOut setToken={setToken} />

      <SafeAreaView style={styles.container}>
        {/* show info user */}
        <InfoUser dataUser={dataUser} />

        {/* show count user topics comments */}
        <CountUserItems dataUser={dataUser} />

        <View style={styles.Control}>
          <Text style={styles.ControlTitle}>Control My Data :</Text>
        </View>

        {/* show user options updated data and remove topics and comments */}
        <UserOptions />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ProfileUser;
