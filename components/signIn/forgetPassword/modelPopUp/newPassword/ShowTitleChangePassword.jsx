import { View, Text } from "react-native";
import styles from "../../../style/login.style";
import ImageBlurLoading from "react-native-image-blur-loading";



const ShowTitleChangePassword = ({ nameUser }) => {
  return (
    <>
      <View style={styles.forgetPasswordImg}>
        <ImageBlurLoading
          style={{ height: 70, width: 70 }}
          source={{
            uri: "https://i.postimg.cc/rFSscv1R/q1.webp",
          }}
        />
      </View>

      <View style={styles.findTitleUser}>
        <Text style={styles.findTitleUserText}>
          Hello {nameUser}, we found you
        </Text>
      </View>
    </>
  );
};


export default ShowTitleChangePassword;