import { View,Image } from "react-native";


const ShowHeaterTitle = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        style={{ height: 179, width: 190 }}
        source={{
          uri: "https://i.postimg.cc/vmKtmrtK/login.webp",
        }}
        alt="login"
      />
    </View>
  );
};


export default ShowHeaterTitle;