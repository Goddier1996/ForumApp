import { View, Text } from "react-native";
import styles from "../style/profile.style";


const TitlePullDownRefreshScreen = () => {
  return (
    <View style={styles.titlePosition}>
      <Text style={styles.titlePositionStyle}>
        Pull down to Refresh your data
      </Text>
    </View>
  );
};


export default TitlePullDownRefreshScreen;