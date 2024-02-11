import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";


const ModelCategory = ({ dataCard }) => {


  const navigation = useNavigation();

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.listContainer}
      data={dataCard}
      horizontal={false}
      numColumns={2}
      renderItem={({ item }) => (
        <TouchableOpacity
          key={item._id}
          style={[styles.card, { backgroundColor: item.color }]}
          // here send to Topic screen, data category
          onPress={() =>
            navigation.navigate("Topics", {
              id: item._id,
              name: item.title,
              topicImage: item.imageTopic,
            })
          }
        >
          <View style={styles.cardHeader}>
            <Text style={styles.title}>{item.title}</Text>
          </View>

          <Image style={styles.cardImage} source={{ uri: item.image }} />
        </TouchableOpacity>
      )}
    />
  );
};

export default ModelCategory;



const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 5,
    marginTop: 20,
  },
  listContainer: {
    alignItems: "center",
  },
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
});