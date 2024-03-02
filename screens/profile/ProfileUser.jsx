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
import { useSelector, useDispatch } from "react-redux";
import { fetchUserId } from "../../Redux/featuers/users/infoIdUser";
import TitlePullDownRefreshScreen from "../../components/profile/tools/TitlePullDownRefreshScreen";
import ButtonDeleteAccount from "../../components/profile/deleteAccount/ButtonDeleteAccount";
import { userIdTopics } from "../../Redux/featuers/topics/topicsIdUser";
import { userIdComments } from "../../Redux/featuers/comments/commentsIdUser";



const ProfileUser = ({ setToken }) => {


  // use redux
  const userIdData = useSelector((state) => state.userIdData);
  const topicsUserId = useSelector((state) => state.topicsUserId);
  const commentsUserId = useSelector((state) => state.commentsUserId);
  const dispatch = useDispatch();


  const getUserData = async () => {
    const savedUser = await AsyncStorage.getItem("user");
    const currentUser = JSON.parse(savedUser);
    dispatch(fetchUserId(currentUser._id));
    dispatch(userIdTopics(currentUser._id));
    dispatch(userIdComments(currentUser._id));
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
      source={{ uri: "https://i.postimg.cc/SsvsfCh8/11.webp" }}
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
          </View>

          {/* show user options updated data and remove topics and comments */}
          <UserOptions
            dataUser={userIdData}
            setToken={setToken}
            topicsUserId={topicsUserId}
            commentsUserId={commentsUserId}
          />

          {/* here user can delete account */}
          <ButtonDeleteAccount />

          {/* here show title use can pull down to refresh data */}
          <TitlePullDownRefreshScreen />

        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};


export default ProfileUser;