import { StyleSheet } from "react-native";


// this style use show all categories
const styles = StyleSheet.create({

  // use in ModelCategory component
  list: {
    paddingHorizontal: 5,
    marginTop: 20,
  },
  listContainer: {
    alignItems: "center",
  },
  card: {
    marginHorizontal: 7,
    marginVertical: 7,
    flexBasis: "45%",
    paddingTop: 12.5,
    paddingBottom: 25,
    borderRadius: 10,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardImage: {
    height: 60,
    width: 60,
    alignSelf: "center",
  },
  title: {
    fontSize: 16,
    flex: 1,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});


export default styles;