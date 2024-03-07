import {
  SafeAreaView,
  ScrollView,
  RefreshControl,
  View,
} from "react-native";
import LogOut from "../components/profile/tools/LogOut";
import InfoUser from "../components/profile/showInfoUser/InfoUser";
import UserOptions from "../components/profile/updateData/UserOptions";
import { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserId } from "../Redux/featuers/users/infoIdUser";
import ButtonDeleteAccount from "../components/profile/deleteAccount/ButtonDeleteAccount";
import { userIdTopics } from "../Redux/featuers/topics/topicsIdUser";
import { userIdComments } from "../Redux/featuers/comments/commentsIdUser";
import styles from "../components/profile/style/profile.style";
import ShowHeaterTitle from "../components/tools/TitleHeaterTop/ShowHeaterTitle";


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
    <>
      <ShowHeaterTitle type={"profileUser"} img={"https://i.postimg.cc/sxbJJHvG/user-prfile1.webp"} />
      
      <View style={styles.container}>
        <SafeAreaView>
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            {/* Log out from profile user */}
            <LogOut setToken={setToken} />

            {/* show info user */}
            <InfoUser dataUser={userIdData} />

            {/* show user options updated data and remove topics and comments */}
            <UserOptions
              dataUser={userIdData}
              setToken={setToken}
              topicsUserId={topicsUserId}
              commentsUserId={commentsUserId}
            />

            {/* here user can delete account */}
            <ButtonDeleteAccount
              idUser={userIdData.UserId._id}
              setToken={setToken}
            />

          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
};


export default ProfileUser;