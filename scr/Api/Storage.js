import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveLoginPref = async ({ uid }) => {
  try {
    await AsyncStorage.setItem("api_token", uid);

    console.log("token saved");
  } catch (error) {
    console.log("error", error);
  }
};
export const setvalue = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log("item saved");
    return true;
  } catch (error) {
    console.log("error:", error);
    return error;
  }
};
export const getvalue = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    console.log("Value:", value);
    if (value !== null) {
      return value;
    } else {
      return undefined;
    }
  } catch (e) {
    console.log("error", e);
    return null;
  }
};
export const removeItem = async (key, value) => {
  try {
    AsyncStorage.clear();
  } catch (error) {}
};
export const getLoginPref = async () => {
  try {
    const token = await AsyncStorage.getItem("api_token");
    console.log("login:", token);
    if (token !== null) {
      return token;
    } else {
      return undefined;
    }
  } catch (e) {
    console.log("error", e);
    return null;
  }
};

export const Logout = async () => {
  try {
    await AsyncStorage.removeItem("api_token");

    console.log("logout");
    return true;
  } catch (e) {
    console.log("error", e);
    return false;
  }
};
