import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import GlobleStyle from "../../utlis/GlobleStyle";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeItemFromCart,
  deleteFullCart,
} from "../../scr/redux/CartSlice";
const DishCard = ({ dishes, id }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);
  const checkRestaurantAndNavigateToCart = () => {
    if (cartItem.length > 0) {
      const selectedRestaurantId = id;
      const firstCartItem = cartItem[0];

      if (
        firstCartItem.ResturantId &&
        firstCartItem.ResturantId !== selectedRestaurantId
      ) {
        Alert.alert(
          "Confirmation",
          "Choosing dishes from a different restaurant will clear your cart. Are you sure you want to proceed?",
          [
            { text: "Cancel", style: "cancel" },
            {
              text: "Clear Cart",
              style: "destructive",
              onPress: () => {
                dispatch(deleteFullCart());
              },
            },
          ]
        );
      } else {
        dispatch(addToCart({ ...dishes, ResturantId: id }));
      }
    } else {
      dispatch(addToCart({ ...dishes, ResturantId: id }));
    }
  };
  return (
    <View style={[GlobleStyle.spaceHorizontal, styles.DishCard]}>
      <View style={styles.dishContainer}>
        <Image source={{ uri: dishes.image }} style={styles.dishImg} />
        <View style={styles.dishTxt}>
          <Text style={styles.dishTitle}>{dishes.name}</Text>
          <Text numberOfLines={2} style={styles.dishDesc}>
            {dishes.description}
          </Text>
          <Text style={styles.dishPrice}>${dishes.price}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.addToCart}
        onPress={() => {
          checkRestaurantAndNavigateToCart();
        }}
      >
        <Text style={{ color: "white" }}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DishCard;
