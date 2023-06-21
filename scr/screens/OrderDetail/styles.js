import { StyleSheet } from "react-native";
import GlobleColor from "../../../utlis/GlobleColor";
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  Header: {
    borderBottomWidth: 0.5,
    borderBottomColor: GlobleColor.Grey,
  },
  backIcon: {
    position: "absolute",
    top: "14%",
    left: 20,
    zIndex: 1,
    backgroundColor: "white",
    borderRadius: 50,
    padding: 3,
  },
  HeaderImg: {
    width: "100%",
    aspectRatio: 10 / 6,
  },
  HeaderTxt: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  dateTxt: {
    fontSize: 13,
  },
  date: {
    flexDirection: "row",
    alignItems: "center",
  },
  orderTxt: {
    fontSize: 26,
    fontWeight: "bold",
  },
  orderList: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: GlobleColor.LightGrey,
    borderBottomWidth: 0.5,
  },
  leftText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 5,
  },
  orderListTxt: {
    fontSize: 16,
    fontWeight: "500",
  },
  orderListprice: {
    color: GlobleColor.TxtGrey,
  },
  qtyTxt: {
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 25,
    backgroundColor: GlobleColor.LightGrey,
    marginRight: 5,
  },
});
