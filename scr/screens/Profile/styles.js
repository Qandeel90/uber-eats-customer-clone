import { StyleSheet } from "react-native";
import GlobleColor from "../../../utlis/GlobleColor";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  profile: {
    backgroundColor: GlobleColor.LightGrey,
    alignSelf: "center",
    borderRadius: 100,
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
    marginVertical: 20,
  },
  profileImg: {
    width: "30%",
    aspectRatio: 1 / 1,

    borderRadius: 100,
  },
  cameraIcon: {
    position: "absolute",
    bottom: 5,
    right: 10,
    alignSelf: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50,
    elevation: 5,
  },
  UserData: {
    width: "80%",
  },
  data: {
    justifyContent: "space-between",
    marginVertical: 5,
    paddingVertical: 5,
    borderBottomColor: GlobleColor.LightGrey,
    borderBottomWidth: 0.5,
  },
  label: { color: GlobleColor.TxtGrey },
  userTxt: { fontSize: 17, fontWeight: "bold" },
  bottomBtn: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    alignSelf: "center",
  },
  logoutBtn: {
    backgroundColor: "black",
    flexDirection: "row-reverse",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 30,
  },
  logoutTxt: { color: "white", paddingLeft: 10, fontSize: 19 },
  updateBtn: {
    backgroundColor: "black",
    flexDirection: "row-reverse",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 30,
  },
  updateTxt: { color: "white", paddingLeft: 10, fontSize: 19 },
  modelData: {
    justifyContent: "space-between",
    marginVertical: 5,
    paddingVertical: 5,
  },
  inputs: {
    backgroundColor: "lightgray",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
