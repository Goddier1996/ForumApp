import { View, SafeAreaView, Text, ImageBackground } from "react-native";
import LogOut from "../../components/profile/tools/LogOut";
import InfoUser from "../../components/profile/showInfoUser/InfoUser";
import UserOptions from "../../components/profile/updateData/UserOptions";
import styles from "../profile/profile.style";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserId } from "../../Redux/featuers/users/infoIdUser";


const ProfileUser = ({ setToken }) => {

  // use redux
  const userIdData = useSelector((state) => state.userIdData);
  const dispatch = useDispatch();

  const getUserData = async () => {
    const savedUser = await AsyncStorage.getItem("user");
    const currentUser = JSON.parse(savedUser);
    dispatch(fetchUserId(currentUser._id));
  };


  useEffect(() => {
    getUserData();
  }, []);


  return (
    <ImageBackground
      source={{ uri: "https://i.postimg.cc/sfKm58XJ/download.jpg" }}
      style={{ width: "100%", height: "100%" }}
    >
      {/* Log out from profile user */}
      <LogOut setToken={setToken} />

      <SafeAreaView style={styles.container}>
        {/* show info user */}
        <InfoUser dataUser={userIdData} />

        <View style={styles.Control}>
          <Text style={styles.ControlTitle}>
            Here You Can Control Your Data
          </Text>
          <Text style={styles.ControlTitle}>In This App</Text>

          <Ionicons name="chevron-down" color={"#00b23d"} size={45} />
        </View>

        {/* show user options updated data and remove topics and comments */}
        <UserOptions dataUser={userIdData} />
      </SafeAreaView>
    </ImageBackground>
  );
};


export default ProfileUser;