import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import styles from "./styles";
import GlobleStyle from "../../../utlis/GlobleStyle";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import {
  removeItemFromCart,
  addToCart,
  deleteCartItem,
  deleteFullCart,
} from "../../redux/CartSlice";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigation = useNavigation();

  const cart = useSelector((state) => state?.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  console.log(cartItems[0]);
  const totalAmt = () => {
    let total = 0;
    cartItems.map((item) => {
      total += item?.price * item?.qty;
    });
    return total.toFixed(2);
  };
  const handleRemoveItem = (item) => {
    dispatch(deleteCartItem(item));
  };

  return (
    <View style={[GlobleStyle.spaceHorizontal, styles.Container]}>
      {cartItems.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={styles.header}>
              <Text style={styles.itemsHeadTxt}>Your Items</Text>
              <TouchableOpacity
                style={styles.clearCart}
                onPress={() => dispatch(deleteFullCart())}
              >
                <Text style={{ color: "white" }}>Clear All</Text>
              </TouchableOpacity>
            </View>
          }
          ListFooterComponent={({ item }) => (
            <View style={styles.totalContainer}>
              <View style={styles.subTotal}>
                <Text>Subtotal</Text>
                <Text>${totalAmt()}</Text>
              </View>
              <View style={styles.Total}>
                <Text>Total</Text>
                <Text>${totalAmt()}</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  console.warn(item);
                }}
                style={styles.bottomContainer}
              >
                <Text style={styles.bottomTxt}>
                  Create Order &#8226; ${totalAmt()}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          data={cartItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <View style={styles.items}>
                <View style={styles.itemTitle}>
                  <TouchableOpacity
                    style={{ paddingRight: 10 }}
                    onPress={() => handleRemoveItem(item)}
                  >
                    <Ionicons name="trash" color={"red"} size={23} />
                  </TouchableOpacity>
                  <View>
                    <Text style={{ fontWeight: "bold" }}>{item?.name}</Text>
                    <Text>${(item?.price).toFixed(2)}</Text>
                  </View>
                </View>
                <View style={styles.qtyContainer}>
                  <TouchableOpacity
                    style={styles.qtyBtn}
                    onPress={() => {
                      if (item.qty > 1) {
                        dispatch(removeItemFromCart(item));
                      }
                    }}
                  >
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      -
                    </Text>
                  </TouchableOpacity>
                  <Text style={{ fontWeight: "bold", paddingHorizontal: 10 }}>
                    {item.qty}
                  </Text>
                  <TouchableOpacity
                    style={styles.qtyBtn}
                    onPress={() => {
                      dispatch(addToCart(item));
                    }}
                  >
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      +
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 20, fontWeight: "400" }}>Cart is Empty</Text>
        </View>
      )}
    </View>
  );
};

export default Cart;
