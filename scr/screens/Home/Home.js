import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import RestaurantCard from "../../../components/RestaurantCard/RestaurantCard";
import restaurants from "../../../assets/data/restaurants.json";
import GlobleStyle from "../../../utlis/GlobleStyle";
import { useDispatch, useSelector } from "react-redux";
import { addRestaurants } from "../../redux/RastaurantSlice";

const Home = () => {
  const myRestaurants = useSelector((state) => state.myRestaurants);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addRestaurants(restaurants));
  }, []);

  return (
    <View style={[styles.container, GlobleStyle.spaceHorizontal]}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={myRestaurants[0]}
        showsVerticalScrollIndicator={false}
        renderItem={(item) => (
          <RestaurantCard RestaurantCard restaurants={item.item} />
        )}
      />
    </View>
  );
};

export default Home;
