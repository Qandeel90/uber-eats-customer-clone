import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import GlobleColor from "../../utlis/GlobleColor";
import GlobleStyle from "../../utlis/GlobleStyle";
const RestaurantCard = ({ restaurants }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Restaurant", { restaurant: restaurants })
      }
      style={[styles.container, GlobleStyle.spaceVertical]}
    >
      <>
        <Image source={{ uri: restaurants.image }} style={styles.image} />
        <View style={styles.fav}>
          <MaterialIcons
            name="favorite-outline"
            size={25}
            color={GlobleColor.Heart}
          />
        </View>
        <View style={styles.cardTextContainer}>
          <View style={styles.leftText}>
            <Text style={styles.title}>{restaurants.name}</Text>
            <Text style={styles.subTitle}>
              ${restaurants.deliveryFee} &#8226; {restaurants.minDeliveryTime}-
              {restaurants.maxDeliveryTime} min
            </Text>
          </View>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>{restaurants.rating}</Text>
          </View>
        </View>
      </>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
