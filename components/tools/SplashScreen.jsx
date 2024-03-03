import { View, Animated } from "react-native";
import styles from "./style/tools.style";
import ProgressBar from "react-native-progress/Bar";


const SplashScreen = () => {

  const imageScale = new Animated.Value(0.1);

  Animated.timing(imageScale, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();


  return (
    <View style={styles.container}>
      <Animated.Image
        source={{
          uri: "https://i.postimg.cc/FFjjLbzL/c1.png",
        }}
        style={[
          styles.image,
          { transform: [{ scale: imageScale }, { rotate: "5deg" }] },
        ]}
      />

      <View>
        <ProgressBar
          width={200}
          height={10}
          indeterminate={true}
          style={styles.loading}
          color={"#fff"}
        />
      </View>

      <View style={styles.bottomView}>
        <Animated.Text
          style={[
            styles.textStyle,
            { transform: [{ scale: imageScale }, { rotate: "0deg" }] },
          ]}
        >
          Made and Style @Artem Kot
        </Animated.Text>
      </View>
    </View>
  );
};


export default SplashScreen;