import { Text, View, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import ModelAddNewComment from "./ModelAddNewComment";
import styles from "../style/comment.style";
import { checkIfUserConnectToApp } from "../function/CommentFunction";



const AddNewComment = ({ nameTopic, background, idTopic }) => {


  const [modalVisible, setModalVisible] = useState(false);
  const [userConnect, setUserConnect] = useState({});


  useEffect(() => {
    checkIfUserConnectToApp(setUserConnect);
  }, []);


  return (
    <>
      <View style={styles.positionAddComment}>
        {userConnect ? (
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.buttonAddNewComment}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textStyleAddComment}>Add Comment</Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.textStyleUserNeedConnect}>
            Sign In (to add comment){" "}
          </Text>
        )}
      </View>

      {/* show popup add new comment */}
      <ModelAddNewComment
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        background={background}
        nameTopic={nameTopic}
        idTopic={idTopic}
        userInfo={userConnect}
      />
    </>
  );
};


export default AddNewComment;