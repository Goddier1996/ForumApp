import { Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTopicsIdCategories } from "../Redux/featuers/topics/topicsIdCategory";
import CardTopic from "../components/topics/showModel/CardTopic";
import Loading from "../components/tools/loading/Loading";
import ShowMessageNotHaveData from "../components/tools/notHaveData/ShowMessageNotHaveData";
import ShowImgTopic from "../components/topics/extrasTools/ShowImgTopic";
import MainShowBottomOptionsTopic from "../components/topics/showBottomOptions/MainShowBottomOptionsTopic";


const Topics = () => {


  const route = useRoute();

  // use redux
  const topics = useSelector((state) => state.topics);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopicsIdCategories(route.params.id));
  }, [route.params.id]);


  return (
    <>
      {/* show img Topic */}
      <ShowImgTopic backgroundTopic={route.params.topicImage} />

      {topics.loading ? (
        <Loading />
      ) : !topics.loading && topics.error ? (
        <Text>Error: {topics.error}</Text>
      ) : null}

      {!topics.loading ? (
        <>
          {/* show bottom options count and button add new topic */}
          <MainShowBottomOptionsTopic
            countTopic={topics.Topics.length}
            idCategory={route.params.id}
            titleCategory={route.params.name}
          />

          {topics.Topics.length == 0 ? (
            <ShowMessageNotHaveData typeData={"topic"} />
          ) : (
            <>
              {/*  show all topics this Category */}
              <CardTopic dataTopic={topics.Topics} />
            </>
          )}
        </>
      ) : null}
    </>
  );
};


export default Topics;