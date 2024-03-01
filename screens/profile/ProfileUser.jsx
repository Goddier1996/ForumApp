import {
  View,
  SafeAreaView,
  Text,
  ImageBackground,
  ScrollView,
  RefreshControl,
} from "react-native";
import LogOut from "../../components/profile/tools/LogOut";
import InfoUser from "../../components/profile/showInfoUser/InfoUser";
import UserOptions from "../../components/profile/updateData/UserOptions";
import styles from "../profile/profile.style";
import { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserId } from "../../Redux/featuers/users/infoIdUser";
import TitlePullDownRefreshScreen from "../../components/profile/tools/TitlePullDownRefreshScreen";



const ProfileUser = ({ setToken }) => {

  // use redux
  const userIdData = useSelector((state) => state.userIdData);
  const dispatch = useDispatch();


  const getUserData = async () => {
    const savedUser = await AsyncStorage.getItem("user");
    const currentUser = JSON.parse(savedUser);
    dispatch(fetchUserId(currentUser._id));
  };


  // refresh screen
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      getUserData();
    }, 1000);
  });


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

      <SafeAreaView>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
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
          <UserOptions
            dataUser={userIdData}
            setToken={setToken}
          />

          {/* here show title use can pull down to refresh data */}
          <TitlePullDownRefreshScreen />

        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};


export default ProfileUser;