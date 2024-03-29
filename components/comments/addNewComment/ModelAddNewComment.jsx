import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import styles from "../style/comment.style";
import { useSelector, useDispatch } from "react-redux";
import { exitFromModel, saveComment } from "../function/CommentFunction";
import LoadingSmallSize from "../../tools/loading/LoadingSmallSize";
import Ionicons from "react-native-vector-icons/Ionicons";
import ImageBlurLoading from "react-native-image-blur-loading";



const ModelAddNewComment = ({
  modalVisible,
  setModalVisible,
  background,
  nameTopic,
  idTopic,
  userInfo,
}) => {


  // Redux
  const dispatch = useDispatch();
  const { loadingAdd } = useSelector((state) => state.commentTopic);

  const [comment, setComment] = useState("");



  const [errors, setErrors] = useState({});

  // check if user input value
  const validateForm = () => {
    let errors = {};

    if (!comment)
      errors.comment = (
        <Ionicons name="information-circle" color={"#e48a33"} size={30} />
      );

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };


  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={true}>
        <View style={styles.outSideBackgroundModel}>
          <View style={styles.outInsideBackgroundModel}>
            <View style={styles.background}>
              <ImageBlurLoading
                source={{ uri: background }}
                style={styles.image}
                alt={nameTopic}
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
              {errors.comment ? errors.comment : null}
            </SafeAreaView>

            <View style={styles.buttonClick}>
              <TouchableOpacity
                activeOpacity={0.9}
                style={
                  !loadingAdd
                    ? styles.buttonSaveComment
                    : styles.buttonSaveCommentLoading
                }
                onPress={() =>
                  !loadingAdd
                    ? saveComment(
                        () => validateForm(),
                        idTopic,
                        comment,
                        userInfo,
                        dispatch,
                        setErrors,
                        setComment,
                        () => setModalVisible(!modalVisible)
                      )
                    : null
                }
              >
                {loadingAdd ? (
                  <LoadingSmallSize type={"save"} />
                ) : (
                  <Text style={styles.textStyle}>Save</Text>
                )}
              </TouchableOpacity>

              {!loadingAdd ? (
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
              ) : null}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};


export default ModelAddNewComment;