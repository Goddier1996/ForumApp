import { View, Text, Image } from "react-native";
import styles from "../style/profile.style";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUserId } from "../../../Redux/featuers/users/infoIdUser";
import LoadingSmallSize from "../../tools/loading/LoadingSmallSize";


const InfoUser = ({ dataUser }) => {

  // use redux
  const userIdData = useSelector((state) => state.userIdData);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchUserId(dataUser._id));
  }, [dataUser]);


  return (
    <View style={styles.userInfoSection}>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        {!userIdData.loading ? (
          <Image
            style={{ height: 80, width: 80 }}
            source={{ uri: userIdData.UserId.FotoUser }}
          />
        ) : (
          <LoadingSmallSize type={"img"} />
        )}

        <View style={{ marginLeft: 20 }}>
          <Text
            style={[
              styles.title,
              {
                marginTop: 15,
                marginBottom: 5,
              },
            ]}
          >
            Hi{" "}
            {!userIdData.loading ? (
              userIdData.UserId.Name
            ) : (
              <LoadingSmallSize type={"text"} />
            )}
          </Text>
        </View>
      </View>

      <View style={styles.showDataUser}>
        <View style={styles.row}>
          <Icon name="login" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            {!userIdData.loading ? (
              userIdData.UserId.Login
            ) : (
              <LoadingSmallSize type={"text"} />
            )}
          </Text>
        </View>

        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            {!userIdData.loading ? (
              userIdData.UserId.Email
            ) : (
              <LoadingSmallSize type={"text"} />
            )}
          </Text>
        </View>
      </View>
    </View>
  );
};


export default InfoUser;