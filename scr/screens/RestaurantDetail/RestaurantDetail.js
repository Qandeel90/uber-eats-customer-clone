import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import DishCard from "../../../components/DishCard/DishCard";
import { Ionicons } from "@expo/vector-icons";
import GlobleStyle from "../../../utlis/GlobleStyle";
import { useSelector, useDispatch } from "react-redux";

const RestaurantDetail = () => {
  const route = useRoute();

  const cartItem = useSelector((state) => state.cart);
  const navigation = useNavigation();
  const { id, name, rating, image, dishes } = route.params.restaurant;
  console.log("check dishes", dishes);
  console.log("check cartItem", cartItem);

  return (
    <View styles={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Header image={image} rating={rating} name={name} id={id} />
            <Text
              style={[
                styles.menuTxt,
                GlobleStyle.spaceHorizontal,
                GlobleStyle.spaceVertical,
              ]}
            >
              Menu
            </Text>
          </>
        }
        showsVerticalScrollIndicator={false}
        data={dishes}
        renderItem={(item) => (
          <DishCard
            navigation={navigation}
            dishes={item.item}
            name={name}
            id={id}
          />
        )}
        keyExtractor={(item) => item.name}
      />
      {cartItem.length > 0 && (
        <TouchableOpacity
          onPress={() => navigation.navigate("Cart")}
          style={styles.bottomBtn}
        >
          <Text style={{ color: "white", fontSize: 17 }}>Go to Cart</Text>
          <Text style={{ color: "lightgray", fontSize: 10 }}>
            Added item : {cartItem.length}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default RestaurantDetail;
const Header = ({ image, rating, name }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.Header}>
      <TouchableOpacity
        style={styles.backIcon}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={22} />
      </TouchableOpacity>
      <Image source={{ uri: image }} style={styles.HeaderImg} />
      <View style={[GlobleStyle.spaceHorizontal, GlobleStyle.spaceVertical]}>
        <Text style={styles.HeaderTxt}>{name}</Text>
        <View style={styles.rating}>
          <Text>$ &#8226; {rating} </Text>
          <Ionicons name="star" size={12} color={"orange"} />
        </View>
      </View>
    </View>
  );
};
