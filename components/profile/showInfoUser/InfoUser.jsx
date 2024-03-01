import { View, Text, Image } from "react-native";
import styles from "../style/profile.style";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import LoadingSmallSize from "../../tools/loading/LoadingSmallSize";


const InfoUser = ({ dataUser }) => {

  return (
    <View style={styles.userInfoSection}>
      {!dataUser.loading ? (
        <>
          <View style={styles.positionImgProfile}>
            <Image
              style={styles.imgProfileUser}
              source={{ uri: dataUser.UserId.FotoUser }}
              alt={dataUser.UserId.Name}
            />
          </View>

          <View style={styles.positionTitle}>
            <Text
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}
            >
              Welcome {dataUser.UserId.Name}
            </Text>

            <View style={styles.row}>
              <Icon name="login" color="#777777" size={20} />
              <Text style={{ color: "#777777", marginLeft: 5 }}>
                {dataUser.UserId.Login}
              </Text>
            </View>

            <View style={styles.row}>
              <Icon name="email" color="#777777" size={20} />
              <Text style={{ color: "#777777", marginLeft: 5 }}>
                {dataUser.UserId.Email}
              </Text>
            </View>
          </View>
        </>
      ) : (
        <LoadingSmallSize type={"img"} />
      )}
    </View>
  );
};


export default InfoUser;