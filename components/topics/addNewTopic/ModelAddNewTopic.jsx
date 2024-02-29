import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import styles from "../style/topics.style";
import { useSelector, useDispatch } from "react-redux";
import { exitFromModel, saveTopic } from "../function/topicFunction";
import LoadingSmallSize from "../../tools/loading/LoadingSmallSize";
import Ionicons from "react-native-vector-icons/Ionicons";


const ModelAddNewTopic = ({
  modalVisible,
  setModalVisible,
  userInfo,
  idCategory,
  titleCategory,
  backgroundTopic,
}) => {


  // Redux
  const dispatch = useDispatch();
  const { loadingAdd } = useSelector((state) => state.topics);

  const [newTopic, setNewTopic] = useState("");
  const [questionTopic, setQuestionTopic] = useState("");

  const [errors, setErrors] = useState({});


  // check if user input value
  const validateForm = () => {
    let errors = {};

    if (!newTopic)
      errors.newTopic = (
        <Ionicons name="information-circle" color={"#e48a33"} size={30} />
      );
    if (!questionTopic)
      errors.questionTopic = (
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
              <ImageBackground
                source={{
                  uri: "https://i.postimg.cc/jdThhLtb/Pngtree-lotus-topic-602786.png",
                }}
                style={styles.imageAddTopic}
              />
            </View>
            <SafeAreaView style={styles.authBox}>
              <View style={styles.createFreeSpace}>
                <TextInput
                  style={styles.input}
                  onChangeText={setNewTopic}
                  value={newTopic}
                  placeholder="Write Title Topic"
                  placeholderTextColor={"black"}
                />
                {/* here show title topic user need input value */}
                {errors.newTopic ? errors.newTopic : null}
              </View>

              <View style={styles.createFreeSpace}>
                <TextInput
                  style={styles.textArea}
                  keyboardType="default"
                  placeholder="Write Your Question"
                  multiline={true}
                  numberOfLines={10}
                  onChangeText={setQuestionTopic}
                  value={questionTopic}
                  placeholderTextColor={"black"}
                />
                {/* here show message user need input value */}
                {errors.questionTopic ? errors.questionTopic : null}
              </View>
            </SafeAreaView>

            <View style={styles.buttonClick}>
              <TouchableOpacity
                activeOpacity={0.9}
                style={
                  !loadingAdd
                    ? styles.buttonSaveTopic
                    : styles.buttonSaveTopicLoading
                }
                onPress={() =>
                  !loadingAdd
                    ? saveTopic(
                        () => validateForm(),
                        newTopic,
                        questionTopic,
                        userInfo,
                        dispatch,
                        setErrors,
                        setNewTopic,
                        setQuestionTopic,
                        () => setModalVisible(!modalVisible),
                        idCategory,
                        titleCategory,
                        backgroundTopic
                      )
                    : null
                }
              >
                {loadingAdd ? (
                  <LoadingSmallSize type={"save"} />
                ) : (
                  <Text style={styles.textStyle}>Add New Topic</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.buttonExitComment}
                onPress={() =>
                  exitFromModel(
                    () => setModalVisible(!modalVisible),
                    () => setErrors({}),
                    () => setNewTopic(""),
                    () => setQuestionTopic("")
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


export default ModelAddNewTopic;