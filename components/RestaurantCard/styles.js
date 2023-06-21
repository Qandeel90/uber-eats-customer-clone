import { StyleSheet } from "react-native";
import GlobleColor from "../../utlis/GlobleColor";
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 10 / 5,
  },
  fav: {
    position: "absolute",
    top: 25,
    right: 15,
  },
  cardTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    color: GlobleColor.Black,
  },
  subTitle: {
    color: GlobleColor.TxtGrey,

    fontSize: 12,
  },
  leftText: {},
  rating: {
    backgroundColor: GlobleColor.LightGrey,
    alignItems: "center",
    justifyContent: "center",
    width: 26,
    height: 26,
    borderRadius: 50,
  },
  ratingText: { color: GlobleColor.Black, fontSize: 13 },
});
