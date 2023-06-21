import { StyleSheet } from "react-native";
import GlobleColor from "../../utlis/GlobleColor";
export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: GlobleColor.LightGrey,
    borderBottomWidth: 0.5,
  },
  orderImage: { width: 55, aspectRatio: 4 / 4 },
  orderTxt: { paddingLeft: 10 },
  text: { color: GlobleColor.Grey },
  title: { fontWeight: "bold", fontSize: 17 },
});
