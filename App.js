import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./scr/screens/Home/Home";
import RootNav from "./scr/navigations/Navigators";
import Toast from "react-native-toast-message";
import store from "./scr/redux/Store";
import { Provider } from "react-redux";
import { useTheme } from "react-native-paper";
export default function App() {
  const theme = useTheme();
  theme.colors.secondaryContainer = "lightgray";
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <RootNav>
          <Toast />
        </RootNav>
      </View>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
