import { Text, View, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "../style/comment.style";


const CardComment = ({ typeComment, dataComment }) => {

  const route = useRoute();

  return (
    <View
      key={typeComment === "Question" ? route.params._id : dataComment._id}
      style={
        typeComment === "Question"
          ? styles.containerQuestion
          : styles.containerAnswer
      }
    >
      <View style={styles.borderImage}>
        <Text
          style={
            typeComment === "Question"
              ? styles.mainCommentTopic
              : styles.answerCommentTopic
          }
        >
          {typeComment}
        </Text>

        <Image
          style={styles.imageUser}
          source={{
            uri:
              typeComment === "Question"
                ? route.params.allDataTopic.imageUser
                : dataComment.FotoUser,
          }}
          alt={"user img"}
        />
        <Text style={styles.name}>
          {typeComment === "Question"
            ? route.params.allDataTopic.NameUser
            : dataComment.NameUser}
        </Text>

          <Text style={styles.time}>
           
            {typeComment === "Question"
              ? route.params.allDataTopic.DatePublished
              : dataComment.DatePublished}
          </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.message}>
          {typeComment === "Question"
            ? route.params.allDataTopic.MessageForTopic
            : dataComment.MessageUser}
        </Text>

      </View>
    </View>
  );
};


export default CardComment;