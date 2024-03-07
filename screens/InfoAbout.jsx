import { View } from "react-native";
import InfoAboutApp from "../components/infoAboutThisApp/showInfoAboutApp/InfoAboutApp";
import ShowAllCountInfo from "../components/infoAboutThisApp/showCountInfo/ShowAllCountInfo";
import styles from "../components/infoAboutThisApp/style/info.style";
import ShowHeaterTitle from "../components/tools/TitleHeaterTop/ShowHeaterTitle";


const InfoAbout = () => {
  return (
    <>
      {/* show title info */}
      <ShowHeaterTitle type={"Info"} img={"https://i.postimg.cc/3NvjSCMy/info1.webp"} />

      <View style={styles.container}>
        {/* show all count info */}
        <ShowAllCountInfo />

        {/* here user can read info about this app */}
        <InfoAboutApp />
      </View>
    </>
  );
};


export default InfoAbout;