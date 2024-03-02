import { View, TouchableOpacity, Text } from "react-native";
import styles from "../style/profile.style";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { deleteAccountUser } from "../function/FunctionProfile";
import LoadingSmallSize from "../../tools/loading/LoadingSmallSize";


const ButtonDeleteAccount = ({ idUser, setToken }) => {


  // Redux
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.removeAccount);

  const navigation = useNavigation();


  return (
    <View style={styles.buttonClickRemoveAccount}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={
          !loading
            ? styles.ChangeButtonRemoveAccount
            : styles.ChangeButtonRemoveAccountLoading
        }
        onPress={() =>
          !loading
            ? deleteAccountUser(dispatch, navigation, setToken, idUser)
            : null
        }
      >
        {!loading ? (
          <Text style={styles.RemoveAccountText}>Delete Account</Text>
        ) : (
          <LoadingSmallSize type={"register"} />
        )}
      </TouchableOpacity>
    </View>
  );
};


export default ButtonDeleteAccount;