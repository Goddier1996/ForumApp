import { ImageBackground } from "react-native";
import MainTopicComment from "../components/comments/showMainTopic/MainTopicComment";
import AllCommentsThisTopic from "../components/comments/showCommentsTopic/AllCommentsThisTopic";


const MessagesTopics = () => {
  return (
    <ImageBackground
      source={{ uri: "https://i.postimg.cc/SsvsfCh8/11.webp" }}
      style={{ width: "100%", height: "100%" }}
    >
      {/* here show main Topic comment */}
      <MainTopicComment />

      {/* show all comments this topic */}
      <AllCommentsThisTopic />
    </ImageBackground>
  );
};


export default MessagesTopics;