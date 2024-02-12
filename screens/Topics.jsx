import { Text, ImageBackground } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTopicsIdCategories } from "../Redux/fetchData/topicsIdCategory";
import CardTopic from "../components/topics/showModel/CardTopic";
import ShowMessageNotHaveTopics from "../components/topics/showModel/ExtrasTools/ShowMessageNotHaveTopics";
import SignInAddNewTopic from "../components/topics/showModel/ExtrasTools/SignInAddNewTopic";
import Loading from "../components/tools/loading/Loading";



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
      <ImageBackground
        source={{ uri: "https://i.postimg.cc/sfKm58XJ/download.jpg" }}
        style={{ width: "100%", height: "100%" }}
      >
        {topics.loading ? (
          <Loading />
        ) : !topics.loading && topics.error ? (
          <Text>Error: {topics.error}</Text>
        ) : null}

        {!topics.loading ? (
          <>
            <SignInAddNewTopic backgroundTopic={route.params.topicImage} />

            {topics.Topics.length == 0 ? (
              <ShowMessageNotHaveTopics />
            ) : (
              // show all topics this Category
              <CardTopic dataTopic={topics.Topics} />
            )}
          </>
        ) : null}
      </ImageBackground>
    </>
  );
};


export default Topics;