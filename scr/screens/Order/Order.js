import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import orders from "../../../assets/data/orders.json";
import { FlatList } from "react-native";
import OrderList from "../../../components/OrderList/OrderList";
import GlobleStyle from "../../../utlis/GlobleStyle";
import { TouchableOpacity } from "react-native";
import { CreateOrder, RetrieveUserById } from "../../Api/Api";
import { useSelector } from "react-redux";
import { getLoginPref } from "../../Api/Storage";
const Order = () => {
  const restaurant = useSelector((state) => state.myRestaurants);
  const cartItem = useSelector((state) => state.cart);
  const filterRes = restaurant[0].filter((item) => {
    return item.id === cartItem[0]?.ResturantId;
  });

  console.log("Big Achivement", filterRes);
  const [userData, setUserData] = useState("");
  const userdata = {
    id: getLoginPref(),
    name: userData?.name,
    address: userData?.address?.country,
    lat: 46.86110499528364,
    lng: 28.54497769418778,
  };

  useEffect(() => {
    RetrieveUserById().then((data) => {
      setUserData(data);
    });
  }, []);

  handelOrder = () => {
    CreateOrder(userdata, filterRes)
      .then(console.log("Send Data sucess"))
      .catch((e) => console.log("error", e));
  };
  return (
    <View style={GlobleStyle.spaceHorizontal}>
      <FlatList
        data={orders}
        renderItem={(item) => <OrderList item={item.item} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
      {/*  <TouchableOpacity onPress={() => handelOrder()}>
        <Text>Click to book order</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Order;
