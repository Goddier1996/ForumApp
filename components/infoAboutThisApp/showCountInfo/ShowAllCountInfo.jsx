import { View } from "react-native";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../../Redux/featuers/category/allCategories";
import { fetchTopics } from "../../../Redux/featuers/topics/allTopics";
import { fetchComments } from "../../../Redux/featuers/comments/allComments";
import { fetchUsers } from "../../../Redux/featuers/users/allUsers";
import CountInfo from "./CountInfo";
import styles from "../style/info.style";


const ShowAllCountInfo = () => {


  // use Redux to get count
  const countAllCategory = useSelector((state) => state.category);
  const countAllTopics = useSelector((state) => state.allTopics);
  const countAllComments = useSelector((state) => state.allComments);
  const countAllUsers = useSelector((state) => state.allUsers);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchTopics());
    dispatch(fetchComments());
    dispatch(fetchUsers());
  }, []);


  return (
    <View style={styles.showCountInfo}>
      <CountInfo
        imgCount={
          "https://img.icons8.com/color/70/000000/administrator-male.png"
        }
        typeCount={countAllUsers.Users.length}
        type={"Users"}
      />

      {/* show count Category */}
      <CountInfo
        imgCount={"https://i.postimg.cc/wBXwVd2K/categories.png"}
        typeCount={countAllCategory.Categories.length}
        type={"Category"}
      />

      {/* show count Topics */}
      <CountInfo
        imgCount={"https://i.postimg.cc/YCgRrwJ4/trending-topic.png"}
        typeCount={countAllTopics.Topics.length}
        type={"Topics"}
      />

      {/* show count Comments */}
      <CountInfo
        imgCount={"https://i.postimg.cc/RZc1rLHK/talk.png"}
        typeCount={countAllComments.Comments.length}
        type={"Comments"}
      />
    </View>
  );
};


export default ShowAllCountInfo;