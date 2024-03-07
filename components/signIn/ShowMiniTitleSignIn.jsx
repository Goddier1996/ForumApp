import { View, Image } from "react-native";

const ShowMiniTitleSignIn = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        style={{ height: 140, width: 150 }}
        source={{
          uri: "https://i.postimg.cc/vmKtmrtK/login.webp",
        }}
        alt="login"
      />
    </View>
  );
};

export default ShowMiniTitleSignIn;
