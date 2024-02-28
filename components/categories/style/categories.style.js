import { StyleSheet } from "react-native";


// this style use show all categories
const styles = StyleSheet.create({

  // use in ModelCategory component
  list: {
    marginTop: 10,
  },
  listContainer: {
    alignItems: "center",
  },
  card: {
    marginHorizontal: 7,
    marginVertical: 7,
    flexBasis: "45%",
    paddingVertical: 20,
    borderRadius: 10,
  },
  cardHeader: {
    paddingVertical: 5,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    flex: 1,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  positionCardImage: {
    alignItems: "center"
  },
  cardImage: {
    height: 60,
    width: 60,
  },
});


export default styles;