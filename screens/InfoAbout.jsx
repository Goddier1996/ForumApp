import { View, ImageBackground } from "react-native";
import InfoAboutApp from "../components/infoAboutThisApp/showInfoAboutApp/InfoAboutApp";
import ShowAllCountInfo from "../components/infoAboutThisApp/showCountInfo/ShowAllCountInfo";
import ShowTitle from "../components/infoAboutThisApp/showInfoAboutApp/ShowTitle";
import styles from "../components/infoAboutThisApp/style/info.style";


const InfoAbout = () => {
  return (
    <ImageBackground
      source={{ uri: "https://i.postimg.cc/SsvsfCh8/11.webp" }}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        {/* show title info */}
        <ShowTitle />

        {/* show all count info */}
        <ShowAllCountInfo />

        {/* here user can read info about this app */}
        <InfoAboutApp />
      </View>
    </ImageBackground>
  );
};


export default InfoAbout;