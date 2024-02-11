import { StyleSheet, Image, ImageBackground } from "react-native";
import ShowAllCategories from "../components/categories/ShowAllCategories";


const Home = () => {

  return (
    <ImageBackground
      blurRadius={1}
      source={{ uri: "https://i.postimg.cc/sfKm58XJ/download.jpg" }}
      style={{ width: "100%", height: "100%" }}
    >
      <Image
        style={styles.startImage}
        source={{ uri: "https://i.postimg.cc/YS6yTphP/home1111.jpg" }}
      />

      {/* here show all Categories */}
      <ShowAllCategories />
      
    </ImageBackground>
  );
};

export default Home;



const styles = StyleSheet.create({
  startImage: {
    height: "40%",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
});