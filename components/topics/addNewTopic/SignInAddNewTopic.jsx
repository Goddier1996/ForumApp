import { Text, TouchableOpacity } from "react-native";
import ModelAddNewTopic from "./ModelAddNewTopic";
import { useEffect, useState } from "react";
import styles from "../style/topics.style";
import { checkIfUserConnectToApp } from "../function/topicFunction";


const SignInAddNewTopic = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [userConnect, setUserConnect] = useState({});


  useEffect(() => {
    checkIfUserConnectToApp(setUserConnect);
  }, []);


  return (
    <>
      {userConnect ? 
        <>
          {/* button add new topic */}
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => userConnect && setModalVisible(true)}
            style={styles.buttonAddNewTopic}
          >
            <Text style={styles.textStyleAddNewTopic}>Add New Topic</Text>
          </TouchableOpacity>
        </>
       : 
        <Text style={styles.textStyleSignIn}>Sign In (to add new topic)</Text>
      }

      {/* model add new Topic, only if user sign in to this app */}
      <ModelAddNewTopic
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};


export default SignInAddNewTopic;