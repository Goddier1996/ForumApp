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


const ModelAddNewTopic = ({ modalVisible, setModalVisible }) => {


  const [NewTopic, setNewTopic] = useState("");
  const [MessageTopic, setMessageTopic] = useState("");

  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={true}>
        <View style={styles.outSideBackgroundModel}>
          <View style={styles.outInsideBackgroundModel}>

          <View style={styles.background}>
              <ImageBackground
                source={{ uri: "https://i.postimg.cc/jdThhLtb/Pngtree-lotus-topic-602786.png" }}
                style={styles.imageAddTopic}
              />
            </View>
            <SafeAreaView style={styles.authBox}>
              <View style={styles.createFreeSpace}>
                <TextInput
                  style={styles.input}
                  onChangeText={setNewTopic}
                  value={NewTopic}
                  placeholder="Write Title Topic"
                  placeholderTextColor={"black"}
                />
              </View>

              <TextInput
                style={styles.textArea}
                keyboardType="default"
                placeholder="Write Your Answer"
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
                <Text style={styles.textStyle}>Add New Topic</Text>
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


export default ModelAddNewTopic;