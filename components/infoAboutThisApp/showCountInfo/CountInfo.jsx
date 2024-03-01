import { View, Text, Image } from "react-native";
import { BarIndicator } from "react-native-indicators";
import styles from "../style/info.style";


const CountInfo = ({ imgCount, typeCount, type }) => {
  return (
    <View style={styles.menuBox}>
      <Image style={styles.icon} source={{ uri: imgCount }} alt={imgCount} />
      <Text style={styles.info}>{type}</Text>
      {typeCount.loading || typeCount === 0 ? (
        <BarIndicator
          color="#00b23d"
          style={styles.loadingCountInfo}
          size={10}
        />
      ) : !typeCount.loading && typeCount.error ? (
        <Text>Error: {typeCount.error}</Text>
      ) : null}

      {!typeCount.loading ? (
        <Text style={styles.info}>{typeCount === 0 ? "" : typeCount}</Text>
      ) : null}
    </View>
  );
};


export default CountInfo;