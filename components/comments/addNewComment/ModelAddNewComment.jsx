import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  SafeAreaView,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import styles from "../style/comment.style";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { exitFromModel, saveComment } from "../function/CommentFunction";
import LoadingSmallSize from "../../tools/loading/LoadingSmallSize";



const ModelAddNewComment = ({
  modalVisible,
  setModalVisible,
  background,
  nameTopic,
  idTopic,
  userInfo,
}) => {


  const navigation = useNavigation();

  // Redux
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.addComment);

  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState({});


  // check if user input value
  const validateForm = () => {
    let errors = {};

    if (!comment) errors.comment = `Hi ${userInfo.Name}\n Please Input Comment`;

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };


  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={true}>
        <View style={styles.outSideBackgroundModel}>
          <View style={styles.outInsideBackgroundModel}>
            <View style={styles.background}>
              <ImageBackground
                source={{ uri: background }}
                style={styles.image}
              />
            </View>
            <SafeAreaView style={styles.authBox}>
              <TextInput
                style={styles.textArea}
                keyboardType="default"
                placeholder={"Write Comment About Topic Question " + nameTopic}
                multiline={true}
                numberOfLines={10}
                onChangeText={setComment}
                value={comment}
                placeholderTextColor={"black"}
              />
              {/* here show message user need input value */}
              {errors.comment ? (
                <View style={styles.messageUserNeedInputValue}>
                  <Text style={styles.textUserNeedInputValue}>
                    {errors.comment}
                  </Text>
                </View>
              ) : null}
            </SafeAreaView>

            <View style={styles.buttonClick}>
              <TouchableOpacity
                activeOpacity={0.9}
                style={
                  !loading
                    ? styles.buttonSaveComment
                    : styles.buttonSaveCommentLoading
                }
                onPress={() =>
                  !loading
                    ? saveComment(
                        () => validateForm(),
                        idTopic,
                        comment,
                        userInfo,
                        dispatch,
                        navigation,
                        setErrors,
                        setComment,
                        () => setModalVisible(!modalVisible)
                      )
                    : null
                }
              >
                {loading ? (
                  <LoadingSmallSize type={"save"} />
                ) : (
                  <Text style={styles.textStyle}>save</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.buttonExitComment}
                onPress={() =>
                  exitFromModel(
                    () => setModalVisible(!modalVisible),
                    () => setErrors({}),
                    () => setComment("")
                  )
                }
              >
                <Text style={styles.textStyle}>Exit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};


export default ModelAddNewComment;