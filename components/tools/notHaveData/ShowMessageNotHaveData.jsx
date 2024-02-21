import { Text, View, Image } from "react-native";
import styles from "../style/tools.style";
import ImageBlurLoading from "react-native-image-blur-loading";


const ShowMessageNotHaveData = ({ typeData }) => {
  return (
    <View style={styles.loadingImageDontHave}>
      <ImageBlurLoading
        style={styles.notHaveItems}
        source={{
          uri: "https://media.tenor.com/IbZePZ2opZkAAAAi/rascal-nothing-to-see-here.gif",
        }}
      />
      <Text style={styles.message}>
        {"\n"}
        {typeData === "comment" ? (
          <>Add Comment{"\n"}This Topic Don't Have Comment's</>
        ) : (
          <>Add New Topic{"\n"}This Category Don't Have Topic's</>
        )}
      </Text>
    </View>
  );
};


export default ShowMessageNotHaveData;