import { View, Image } from "react-native";
import styles from "../../../style/login.style";


const ShowTitleCheckEmail = () => {
  return (
    <View style={styles.forgetPasswordImg}>
      <Image
        style={{ height: 70, width: 70 }}
        source={{
          uri: "https://i.postimg.cc/rFSscv1R/q1.webp",
        }}
        alt="forget password"
      />
    </View>
  );
};


export default ShowTitleCheckEmail;