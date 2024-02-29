import { View } from "react-native";
import ImageBlurLoading from "react-native-image-blur-loading";
import styles from "../../screens/register/register.style";


const ShowHeaterTitle = () => {
  return (
    <View style={styles.titleHeater}>
      <ImageBlurLoading
              style={styles.titleHeaterImg}
        source={{
          uri: "https://i.postimg.cc/Z54mCW5F/Pngtree-transparent-register-now-button-8709661.png",
        }}
      />
    </View>
  );
};


export default ShowHeaterTitle;