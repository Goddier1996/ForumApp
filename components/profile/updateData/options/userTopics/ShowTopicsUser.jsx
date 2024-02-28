import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../../style/profile.style";
import { useState } from "react";
import ListTopics from "./ListTopics";
import LoadingSmallSize from "../../../../tools/loading/LoadingSmallSize";
import CustomAlert from "../../../../tools/customAlert/CustomAlert";



const ShowTopicsUser = ({ topicsUserId }) => {

  const [modalVisibleTopic, setModalVisibleTopic] = useState(false);

  const [showInfoHaveThisUserPopup, setShowInfoHaveThisUserPopup] =
    useState(false);

  
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() =>
          topicsUserId.TopicsIdUser.length === 0
            ? setShowInfoHaveThisUserPopup(true)
            : setModalVisibleTopic(true)
        }
      >
        <View style={styles.menuItem}>
          <Text style={styles.menuItemText}>
            {topicsUserId.loading ? null : "My Topics"}
          </Text>
          <Text style={styles.menuItemText}>
            {topicsUserId.loading ? (
              <LoadingSmallSize type={"text"} />
            ) : topicsUserId.TopicsIdUser.length === 0 ? (
              "0"
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

      {/* show alert if user dont have topics */}
      <CustomAlert
        displayMode={"infoProfileUser"}
        displayMsg={"Hi You Don't Have Topics's"}
        visibility={showInfoHaveThisUserPopup}
        dismissAlert={setShowInfoHaveThisUserPopup}
      />
    </>
  );
};


export default ShowTopicsUser;