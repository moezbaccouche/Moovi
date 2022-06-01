import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import defaultStyles from "../../../config/styles";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../../../store/actions";
import MoviePosterItem from "../../../components/MoviePosterItem";
import MoviesList from "../../../components/MoviesList";

const RecommendedMoviesList = () => {
  const { movies } = useSelector((state) => state.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action.getRecommendedMovies());
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitleText}>Recommandés</Text>
        <TouchableOpacity>
          <Text style={styles.showAllMoviesText}>Voir tout</Text>
        </TouchableOpacity>
      </View>
      <MoviesList movies={movies} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 60,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  sectionTitleText: {
    fontFamily: defaultStyles.fonts.bold,
    color: defaultStyles.colors.white,
    fontSize: 18,
  },
  showAllMoviesText: {
    fontSize: 16,
    color: defaultStyles.colors.white,
    fontFamily: defaultStyles.fonts.medium,
  },
});

export default RecommendedMoviesList;
