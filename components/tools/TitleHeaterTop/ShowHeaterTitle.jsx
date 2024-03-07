import { View, Image } from "react-native";


// here show title heater in screen: register,login,info and user profile
const ShowHeaterTitle = ({ type, img }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        style={{
          height:
            type == "login" || type == "Register" || type == "Info"
              ? 140
              : type == "profileUser"
              ? 85
              : 0,
          width:
            type == "login" || type == "Register" || type == "Info"
              ? 220
              : type == "profileUser"
              ? 150
              : 0,
        }}
        source={{
          uri: img,
        }}
        alt={type}
      />
    </View>
  );
};


export default ShowHeaterTitle;