import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "../style/topics.style";


const CardTopic = ({ dataTopic }) => {

  const route = useRoute();
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <FlatList
        style={styles.contentList}
        data={dataTopic}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() =>
                navigation.navigate("CommentsTopics", {
                  allDataTopic: item,
                  CategoryName: route.params.name,
                  backgroundTopic: route.params.topicImage,
                })
              }
              key={item._id}
              style={styles.card}
            >
              <View>
                <Image style={styles.image} source={{ uri: item.imageUser }} />
                <Text style={styles.PublishBy}>
                  Created by: {item.NameUser}
                </Text>
              </View>

              <View style={styles.nameTopic}>
                <Text style={styles.name}>{item.nameTopic}</Text>
              </View>

              <View style={styles.positionTime}>
                <Text style={styles.timePublic}>
                  Date Publish: {item.DatePublished}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};


export default CardTopic;