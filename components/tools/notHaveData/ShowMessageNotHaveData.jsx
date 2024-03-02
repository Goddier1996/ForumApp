import { Text, View, Image } from "react-native";
import styles from "../style/tools.style";


const ShowMessageNotHaveData = ({ typeData }) => {
  return (
    <View style={styles.loadingImageDontHave}>
      <Image
        style={styles.notHaveItems}
        source={{
          uri: "https://media.tenor.com/IbZePZ2opZkAAAAi/rascal-nothing-to-see-here.gif",
        }}
        alt="message not have"
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