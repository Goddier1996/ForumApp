import { View, Image } from "react-native";
import styles from "../../screens/register/register.style";

const ShowHeaterTitle = () => {

  return (
    <View style={styles.titleHeater}>
      <Image
        style={styles.titleHeaterImg}
        source={{
          uri: "https://i.postimg.cc/WpmrPfTf/44.webp",
        }}
        alt="register"
      />
    </View>
  );
};


export default ShowHeaterTitle;