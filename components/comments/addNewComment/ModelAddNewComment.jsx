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


const ModelAddNewComment = ({
  modalVisible,
  setModalVisible,
  background,
  nameTopic,
}) => {

  const [MessageTopic, setMessageTopic] = useState("");

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
                onChangeText={setMessageTopic}
                value={MessageTopic}
                placeholderTextColor={"black"}
              />
            </SafeAreaView>

            <View style={styles.buttonClick}>
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.buttonSaveComment}
                //   onPress={() => checkImputAddNewTopic()}
              >
                <Text style={styles.textStyle}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.buttonExitComment}
                onPress={() => setModalVisible(!modalVisible)}
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