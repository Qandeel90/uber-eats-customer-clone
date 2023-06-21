import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";
import Home from "../screens/Home/Home";
import RestaurantDetail from "../screens/RestaurantDetail/RestaurantDetail";

import Cart from "../screens/Cart/Cart";
import Order from "../screens/Order/Order";
import OrderDetail from "../screens/OrderDetail/OrderDetail";
import Profile from "../screens/Profile/Profile";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import React, { useEffect, useState, useRef } from "react";
import { Logout, getLoginPref } from "../Api/Storage";
import Toast from "react-native-toast-message";
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const RootNav = () => {
  const [auth, setAuth] = useState(false);
  const navigationRef = useRef(null);

  const checkLogin = async () => {
    const res = await getLoginPref();
    if (res) {
      setAuth(true);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const TabNav = () => {
    const navigation = useNavigation();

    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="black"
        inactiveColor="gray"
        barStyle={{
          backgroundColor: "white",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Orders"
          component={OrderStack}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="list-alt" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="user-alt" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  const HomeStack = () => {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Restaurant"
          component={RestaurantDetail}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    );
  };

  const OrderStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Orders" component={Order} />
        <Stack.Screen name="Order" component={OrderDetail} />
      </Stack.Navigator>
    );
  };
  const ProfileStack = () => {
    const handleLogout = async () => {
      const res = await Logout();
      if (res) {
        setAuth(false);
        navigationRef.current?.reset({
          index: 0,
          routes: [{ name: "Login" }],
        });
      }
    };
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={() => <Profile handleLogout={handleLogout} />}
        />
        <Stack.Screen name="Order" component={OrderDetail} />
      </Stack.Navigator>
    );
  };
  const AuthStack = () => {
    const navigation = useNavigation();

    const handleLogin = () => {
      setAuth(true);
      if (auth) {
        navigation.navigate("Home");
        Toast.show({
          type: "success",
          text1: "Login Sccessfully",
        });
      }
    };

    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={() => <Login handleLogin={handleLogin} />}
          options={{ headerShown: false, tabBarVisible: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false, tabBarVisible: false }}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer ref={navigationRef}>
      {!auth ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="AuthStack" component={AuthStack} />
        </Stack.Navigator>
      ) : (
        <TabNav />
      )}
    </NavigationContainer>
  );
};

export default RootNav;
