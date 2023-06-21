import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import styles from "./styles";
import GlobleStyle from "../../../utlis/GlobleStyle";
import { Ionicons } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import restaurants from "../../../assets/data/restaurants.json";
const OrderDetail = () => {
  const route = useRoute();
  const { name, image, createdAt } = route.params.item.Restaurant;
  const { status } = route.params.item;

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Header
              name={name}
              image={image}
              createdAt={createdAt}
              status={status}
            />
            <Text
              style={[
                styles.orderTxt,
                GlobleStyle.spaceHorizontal,
                GlobleStyle.spaceVertical,
              ]}
            >
              Your order
            </Text>
          </>
        }
        showsVerticalScrollIndicator={false}
        data={restaurants[0].dishes}
        renderItem={(item) => <OrderList item={item.item} />}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default OrderDetail;
const Header = ({ name, image, createdAt, status }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.Header}>
      <Image source={{ uri: image }} style={styles.HeaderImg} />
      <View style={[GlobleStyle.spaceHorizontal, GlobleStyle.spaceVertical]}>
        <Text style={styles.HeaderTxt}>{name}</Text>
        <View style={styles.date}>
          <Text style={styles.dateTxt}>
            {status} &#8226; {createdAt}{" "}
          </Text>
        </View>
      </View>
    </View>
  );
};
const OrderList = ({ item }) => {
  return (
    <View style={[GlobleStyle.spaceHorizontal, styles.orderList]}>
      <View style={styles.leftText}>
        <View style={styles.qtyTxt}>
          <Text>2</Text>
        </View>
        <Text style={styles.orderListTxt}>{item.name}</Text>
      </View>
      <Text style={styles.orderListprice}>${item.price}</Text>
    </View>
  );
};
