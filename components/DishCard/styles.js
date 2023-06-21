import { StyleSheet } from "react-native";
import GlobleColor from "../../utlis/GlobleColor";
export default StyleSheet.create({
  DishCard: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    alignItems: "center",
    borderBottomColor: GlobleColor.Grey,
    paddingVertical: 10,
  },
  dishTxt: { paddingLeft: 10, width: "60%" },
  dishContainer: { flexDirection: "row", alignItems: "center", flex: 1 },
  dishImg: {
    width: 70,
    aspectRatio: 1 / 1,
  },
  dishTitle: {
    fontWeight: "bold",
  },
  dishPrice: {
    fontSize: 13,
    fontWeight: "bold",
  },
  dishDesc: {
    color: GlobleColor.TxtGrey,
  },
  addToCart: {
    backgroundColor: GlobleColor.Black,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
