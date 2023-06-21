import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 70,
  },
  heading: {
    fontSize: 33,
    fontWeight: "bold",
  },
  registerContainer: {
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
  registerbtn: {
    marginTop: 10,
    paddingHorizontal: 50,
    paddingVertical: 10,
    backgroundColor: "black",
  },
  registertxt: { color: "white" },
  loginbtn: { paddingVertical: 20, paddingHorizontal: 20 },
  logintxt: {},
});
