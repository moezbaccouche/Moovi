import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CustomHeader from "../../components/CustomHeader";
import MoviesList from "../../components/MoviesList";
import defaultStyles from "../../config/styles";
import { useSelector, useDispatch } from "react-redux";

const FavoriteMovies = () => {
  const { favoriteMovies } = useSelector((state) => state.movies);

  return (
    <View style={styles.mainContainer}>
      <CustomHeader title="Mes Favoris" />
      {favoriteMovies.length > 0 ? (
        <View style={styles.moviesListContainer}>
          <MoviesList movies={favoriteMovies} />
        </View>
      ) : (
        <View style={styles.emptyStateContainer}>
          <Text style={styles.emptyStateText}>
            Ajoutez des films aux favoris
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: defaultStyles.colors.black,
    paddingBottom: 130,
  },
  moviesListContainer: {
    marginTop: 40,
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyStateText: {
    fontFamily: defaultStyles.fonts.medium,
    color: defaultStyles.colors.white,
    fontSize: 18,
  },
});

export default FavoriteMovies;
