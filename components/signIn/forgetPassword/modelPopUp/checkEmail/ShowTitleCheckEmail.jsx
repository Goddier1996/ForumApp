import ImageBlurLoading from "react-native-image-blur-loading";
import { View } from "react-native";
import styles from "../../../style/login.style";


const ShowTitleCheckEmail = () => {
  return (
    <View style={styles.forgetPasswordImg}>
      <ImageBlurLoading
        style={{ height: 70, width: 70 }}
        source={{
          uri: "https://i.postimg.cc/rFSscv1R/q1.webp",
        }}
      />
    </View>
  );
};

export default ShowTitleCheckEmail;
