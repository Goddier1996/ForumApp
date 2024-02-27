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
import { useNavigation } from "@react-navigation/native";
import { exitFromModel, saveTopic } from "../function/topicFunction";
import LoadingSmallSize from "../../tools/loading/LoadingSmallSize";
import Ionicons from "react-native-vector-icons/Ionicons";



const ModelAddNewTopic = ({
  modalVisible,
  setModalVisible,
  userInfo,
  idCategory,
  titleCategory,
}) => {


  const navigation = useNavigation();

  // Redux
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.addTopic);

  const [newTopic, setNewTopic] = useState("");
  const [questionTopic, setQuestionTopic] = useState("");


  const [errors, setErrors] = useState({});

  // check if user input value
  const validateForm = () => {
    let errors = {};

    if (!newTopic) errors.newTopic = `Please Input Title Topic`;
    if (!questionTopic) errors.questionTopic = `Please Input Your Question`;

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
                {errors.newTopic ? (
                  <Ionicons
                    name="information-circle"
                    color={"#e48a33"}
                    size={30}
                  />
                ) : null}
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
                {errors.questionTopic ? (
                  <Ionicons
                    name="information-circle"
                    color={"#e48a33"}
                    size={30}
                  />
                ) : null}
              </View>
            </SafeAreaView>

            <View style={styles.buttonClick}>
              <TouchableOpacity
                activeOpacity={0.9}
                style={
                  !loading
                    ? styles.buttonSaveTopic
                    : styles.buttonSaveTopicLoading
                }
                onPress={() =>
                  !loading
                    ? saveTopic(
                        () => validateForm(),
                        newTopic,
                        questionTopic,
                        userInfo,
                        dispatch,
                        navigation,
                        setErrors,
                        setNewTopic,
                        setQuestionTopic,
                        () => setModalVisible(!modalVisible),
                        idCategory,
                        titleCategory
                      )
                    : null
                }
              >
                {loading ? (
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