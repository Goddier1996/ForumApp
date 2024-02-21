import { FlatList, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCommentsIdTopics } from "../../../Redux/featuers/comments/commentsIdTopic";
import { useRoute } from "@react-navigation/native";
import Loading from "../../tools/loading/Loading";
import CardComment from "../extrasTools/CardComment";
import MainShowBottomOptions from "../bottomOptions/MainShowBottomOptionsComment";



const AllCommentsThisTopic = () => {

  const route = useRoute();

  const commentTopic = useSelector((state) => state.commentTopic);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchCommentsIdTopics(route.params.allDataTopic._id));
  }, [route.params.allDataTopic._id]);


  return (
    <>
      {commentTopic.loading ? (
        <Loading />
      ) : !commentTopic.loading && commentTopic.error ? (
        <Text>Error: {commentTopic.error}</Text>
      ) : null}

      {!commentTopic.loading ? (
        <>
          {/* show all comment this Topic */}
          <FlatList
            data={commentTopic.Comments}
            renderItem={({ item }) => {
              return <CardComment typeComment={"Answer"} dataComment={item} />;
            }}
          />

          {/* here option user can add new comment and show count topics this category */}
          <MainShowBottomOptions
            countComment={commentTopic.Comments.length}
            nameTopic={route.params.allDataTopic.nameTopic}
            background={route.params.backgroundTopic}
          />
        </>
      ) : null}
    </>
  );
};

export default AllCommentsThisTopic;
