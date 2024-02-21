import AsyncStorage from "@react-native-async-storage/async-storage";


export async function checkIfUserConnectToApp(setUserConnect) {

    const savedUser = await AsyncStorage.getItem("user");
    const currentUser = JSON.parse(savedUser);
    setUserConnect(currentUser);
}
