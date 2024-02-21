import AsyncStorage from "@react-native-async-storage/async-storage";


export async function logOutFromProfile(setToken, navigation) {

    await AsyncStorage.removeItem("user");
    const deleteUser = await AsyncStorage.getItem("user");
    const currentUser = JSON.parse(deleteUser);
    await setToken(currentUser)
    // navigation?.goBack();
    navigation.navigate("HomePage", { screen: "HomePage" });
}
