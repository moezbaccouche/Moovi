import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import defaultStyles from "../config/styles";
import MoviePosterItem from "./MoviePosterItem";

const MoviesList = ({ movies, ListHeaderComponent = null }) => {
  return (
    <FlatList
      numColumns={2}
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <MoviePosterItem movie={{ ...item }} />}
      columnWrapperStyle={styles.columnWrapperStyle}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};

const styles = StyleSheet.create({
  columnWrapperStyle: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});

export default MoviesList;
