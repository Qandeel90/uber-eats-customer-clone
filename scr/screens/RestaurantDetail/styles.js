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
    fontSize: 28,
    fontWeight: "bold",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuTxt: { color: GlobleColor.TxtGrey },
  bottomBtn: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 10,
    alignItems: "center",
    marginHorizontal: 13,
    marginVertical: 10,
    justifyContent: "center",
  },
});
