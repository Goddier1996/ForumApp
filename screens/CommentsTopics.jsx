import {
  ScrollView,
  ImageBackground,
} from "react-native";
import MainTopicComment from "../components/commentsI/showMainTopic/MainTopicComment";
import ShowTitleTopic from "../components/commentsI/extrasTools/ShowTitleTopic";
import AllCommentsThisTopic from "../components/commentsI/showCommentsTopic/AllCommentsThisTopic";



const MessagesTopics = () => {


  return (
    <ImageBackground
      source={{ uri: "https://i.postimg.cc/sfKm58XJ/download.jpg" }}
      style={{ width: "100%", height: "100%",flex: 1 }}
    >
      <ScrollView >
        

        {/* here show title topic */}
        <ShowTitleTopic />
        
        {/* here show main Topic comment */}
        <MainTopicComment />
        
        {/* show all comments this topic */}
        <AllCommentsThisTopic/>

      </ScrollView>
    </ImageBackground>
  );
};


export default MessagesTopics;
