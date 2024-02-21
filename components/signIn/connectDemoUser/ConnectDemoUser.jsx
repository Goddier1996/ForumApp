import { Text, TouchableOpacity, View } from "react-native";
import styles from "../style/login.style";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { signInDemoUser } from "../function/login";

const ConnectDemoUser = ({ setToken }) => {

  const navigation = useNavigation();

  // Redux
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  return (
    <View style={styles.connectDemoUser}>
      <TouchableOpacity style={styles.connectDemoUser}>
        <Text
          onPress={() => signInDemoUser(dispatch, setToken, navigation)}
          style={styles.connectClick}
        >
          {/* connect Demo User */}
          {loading ? "loading" : "connect Demo User"}
        </Text>
      </TouchableOpacity>

      <Text>{error ? error : ""}</Text>
    </View>
  );
};


export default ConnectDemoUser;