import { View } from "react-native";
import styles from "../style/comment.style";
import ShowCountComments from "./ShowCountComments";
import AddNewComment from "../addNewComment/AddNewComment";


const MainShowBottomOptions = ({ countComment, nameTopic, background }) => {
  return (
    <View style={styles.borderImageAllComments}>
        
      {/* show count comments this topic */}
      <ShowCountComments countComment={countComment} />

      {/* add new comments */}
      <AddNewComment nameTopic={nameTopic} background={background} />
    </View>
  );
};


export default MainShowBottomOptions;