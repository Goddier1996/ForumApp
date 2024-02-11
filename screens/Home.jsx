import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../Redux/fetchData/allCategories";



const Home = () => {

  
  // use redux
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchCategories());
  }, []);


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

      {category.loading ? (
        <View style={styles.loadingImage}>
          <Image
            style={styles.sizeLoadingImage}
            source={{
              uri: "https://i.postimg.cc/vm3V2tNH/Please-Wait-Loading-Image-Gif.gif",
            }}
          />
        </View>
      ) : !category.loading && category.error ? (
        <Text>Error: {category.error}</Text>
      ) : null}

      {!category.loading ? (
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={category.Categories}
          horizontal={false}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item._id}
              style={[styles.card, { backgroundColor: item.color }]}
              onPress={() => idCategory(item._id, item.title, item.imageTopic)}
            >
              <View style={styles.cardHeader}>
                <Text style={styles.title}>{item.title}</Text>
              </View>

              <Image style={styles.cardImage} source={{ uri: item.image }} />
            </TouchableOpacity>
          )}
        />
      ) : null}
    </ImageBackground>
  );
};




export default Home;




const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 5,
    marginTop: 20,
  },
  listContainer: {
    alignItems: "center",
  },
  /******** card **************/
  card: {
    marginHorizontal: 7,
    marginVertical: 7,
    flexBasis: "45%",
    paddingTop: 12.5,
    paddingBottom: 25,
    borderRadius: 10,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },

  cardImage: {
    height: 70,
    width: 70,
    alignSelf: "center",
  },
  title: {
    fontSize: 16,
    flex: 1,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  startImage: {
    height: "40%",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  loadingImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sizeLoadingImage: {
    width: 400,
    height: 400,
  },
});
