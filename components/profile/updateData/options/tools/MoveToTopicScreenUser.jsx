import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { moveToUserTopicScreen } from "../../../function/FunctionProfile";
import Ionicons from "react-native-vector-icons/Ionicons";


const MoveToTopicScreenUser = ({ data, setModalVisible }) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => moveToUserTopicScreen(data, setModalVisible, navigation)}
    >
      <Ionicons name="arrow-undo-outline" color={"#e48a33"} size={37} />
    </TouchableOpacity>
  );
};


export default MoveToTopicScreenUser;