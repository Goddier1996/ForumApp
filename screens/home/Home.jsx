import { ImageBackground } from "react-native";
import ShowAllCategories from "../../components/categories/ShowAllCategories";
import styles from "./home.style";
import { ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
  return (
    <>
      <ImageBackground
        style={styles.startImage}
        source={{ uri: "https://i.postimg.cc/YS6yTphP/home1111.jpg" }}
        PlaceholderContent={<ActivityIndicator />}
      >
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0)"]}
          style={{ height: "100%", width: "100%" }}
        />
      </ImageBackground>

      {/* here show all Categories */}
      <ShowAllCategories />
    </>
  );
};


export default Home;