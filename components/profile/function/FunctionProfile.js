import AsyncStorage from "@react-native-async-storage/async-storage";


export async function logOutFromProfile(setToken, navigation) {

    // const deleteUser = await AsyncStorage.getItem("user");
    // const currentUser = JSON.parse(deleteUser);
    await setToken(null)
    // navigation?.goBack();
    AsyncStorage.clear();
    navigation.navigate("HomePage", { screen: "HomePage" });
    // AsyncStorage.removeItem("user");
}
