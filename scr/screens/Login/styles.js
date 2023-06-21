import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Heading: {
    fontSize: 33,
    fontWeight: "bold",
  },
  loginContainer: {
    flex: 0.6,

    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputs: {
    borderWidth: 1,
    borderColor: "black",
    width: "80%",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 10,
    textDecorationLine: "none",
  },
  loginbtn: {
    marginTop: 10,
    paddingHorizontal: 50,
    paddingVertical: 10,
    backgroundColor: "black",
  },
  logintxt: { color: "white" },
  registerbtn: { paddingVertical: 20, paddingHorizontal: 20 },
  regtxt: {},
});
