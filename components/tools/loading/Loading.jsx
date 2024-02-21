import { View } from "react-native";
import styles from "../style/tools.style";
import { BarIndicator } from "react-native-indicators";

const Loading = () => {
  return (
    <View style={styles.loadingImage}>
      <BarIndicator color="#00b23d" size={40} />
    </View>
  );
};


export default Loading;