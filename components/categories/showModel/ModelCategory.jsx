import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../style/categories.style";
import ImageBlurLoading from "react-native-image-blur-loading";


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

          <ImageBlurLoading
            style={styles.cardImage}
            source={{ uri: item.image }}
          />
        </TouchableOpacity>
      )}
    />
  );
};


export default ModelCategory;