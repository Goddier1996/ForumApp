import { View } from "react-native";
import styles from "../style/tools.style";
import { BarIndicator } from "react-native-indicators";


const LoadingSmallSize = ({type}) => {
  return (
    <View style={type==="img"?styles.loadingImageSmallSize:""}>
    <BarIndicator color="#00b23d" size={type==="img"?25:13} />
  </View>
  )
}

export default LoadingSmallSize