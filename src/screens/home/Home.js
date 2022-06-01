import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import defaultStyles from "../../config/styles";
import CategoriesList from "./items/CategoriesList";
import HomeHeader from "./items/HomeHeader";
import RecommendedMoviesList from "./items/RecommendedMoviesList";

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <HomeHeader />
      <CategoriesList />
      <RecommendedMoviesList />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: defaultStyles.colors.black,
  },
});

export default Home;
