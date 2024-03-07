import MainTopicComment from "../components/comments/showMainTopic/MainTopicComment";
import AllCommentsThisTopic from "../components/comments/showCommentsTopic/AllCommentsThisTopic";


const MessagesTopics = () => {
  return (
    <>
      {/* here show main Topic comment */}
      <MainTopicComment />

      {/* show all comments this topic */}
      <AllCommentsThisTopic />
    </>
  );
};


export default MessagesTopics;