import { StyleSheet } from "react-native";
import GlobleColor from "../../../utlis/GlobleColor";

export default StyleSheet.create({
  Container: { flex: 1 },
  restaurantName: { fontWeight: "bold", fontSize: 29 },
  clearCart: {
    backgroundColor: GlobleColor.Black,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: 10,
  },
  itemsHeadTxt: { fontWeight: "bold" },
  items: {
    paddingVertical: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomColor: GlobleColor.LightGrey,
    borderBottomWidth: 0.5,
  },
  qtyTxt: {
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 25,
    backgroundColor: GlobleColor.LightGrey,
    marginRight: 5,
  },
  itemTitle: { flexDirection: "row", alignItems: "center" },
  totalContainer: { paddingVertical: 10 },
  subTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 5,
  },

  Total: { flexDirection: "row", justifyContent: "space-between" },
  bottomContainer: {
    width: "100%",
    marginVertical: 20,
    backgroundColor: GlobleColor.Black,
    alignSelf: "center",
    alignItems: "center",
  },
  bottomTxt: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    color: "white",
  },
  qtyContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  qtyBtn: {
    backgroundColor: GlobleColor.Black,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
