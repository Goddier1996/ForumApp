import { View, Text } from "react-native";
import styles from "../style/profile.style";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { userIdTopics } from "../../../Redux/featuers/topics/topicsIdUser";
import { userIdComments } from "../../../Redux/featuers/comments/commentsIdUser";
import { BarIndicator } from "react-native-indicators";



const CountUserItems = ({ dataUser }) => {


  // use redux
  const topicsUserId = useSelector((state) => state.topicsUserId);
  const commentsUserId = useSelector((state) => state.commentsUserId);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(userIdTopics(dataUser._id));
    dispatch(userIdComments(dataUser._id));
  }, [dataUser]);



  return (
    <View style={styles.infoBoxWrapper}>
      <View
        style={[
          styles.infoBox,
          {
            borderRightColor: "#dddddd",
            borderRightWidth: 1,
          },
        ]}
      >

        
        <Text>{topicsUserId.TopicsIdUser.length}</Text>
        <Text>Count Your Topics</Text>
      </View>

      <View style={styles.infoBox}>
        <Text>{commentsUserId.CommentsIdUser.length}</Text>
        <Text>Count Your Messages</Text>
      </View>
    </View>
  );
};


export default CountUserItems;