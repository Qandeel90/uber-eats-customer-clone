import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import GlobleStyle from "../../utlis/GlobleStyle";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const OrderList = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Order", { item: item })}
    >
      <View style={[styles.container, GlobleStyle.spaceVertical]}>
        <Image
          style={styles.orderImage}
          source={{ uri: item.Restaurant.image }}
        />
        <View style={styles.orderTxt}>
          <Text style={styles.title}>{item.Restaurant.name}</Text>
          <Text style={styles.text}>
            Delivery &#8226; $ {item.Restaurant.deliveryFee.toFixed(2)}
          </Text>
          <Text style={styles.text}>
            {item.Restaurant.createdAt} &#8226; {item.status}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderList;
