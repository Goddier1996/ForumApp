import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../../style/profile.style";
import { useState } from "react";
import ListTopics from "./ListTopics";
import LoadingSmallSize from "../../../../tools/loading/LoadingSmallSize";


const ShowTopicsUser = ({ topicsUserId }) => {

  const [modalVisibleTopic, setModalVisibleTopic] = useState(false);


  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setModalVisibleTopic(true)}
      >
        <View style={styles.menuItem}>
          <Text style={styles.menuItemText}>
            {topicsUserId.loading || topicsUserId.TopicsIdUser.length === 0
              ? ""
              : "My Topics"}
          </Text>
          <Text style={styles.menuItemText}>
            {topicsUserId.loading || topicsUserId.TopicsIdUser.length === 0 ? (
              <LoadingSmallSize type={"text"} />
            ) : (
              topicsUserId.TopicsIdUser.length
            )}
          </Text>
        </View>
      </TouchableOpacity>

      {/* model user topics user */}
      <ListTopics
        DataTopicsUser={topicsUserId.TopicsIdUser}
        modalVisibleTopic={modalVisibleTopic}
        setModalVisibleTopic={setModalVisibleTopic}
      />
    </>
  );
};


export default ShowTopicsUser;