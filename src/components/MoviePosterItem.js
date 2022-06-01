import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  ActivityIndicator,
} from "react-native";
import defaultStyles from "../config/styles";
import IconHeartFilledWhite from "../assets/icons/icon-heart-on.svg";
import IconHeartFilledRed from "../assets/icons/icon-heart-on-red.svg";
import * as action from "../store/actions";
import { useSelector, useDispatch } from "react-redux";

const MoviePosterItem = ({ movie }) => {
  const [isLoadingImg, setIsLoadingImg] = useState(true);
  const { favoriteMovies } = useSelector((state) => state.movies);

  const dispatch = useDispatch();

  const toggleFavoriteMovie = () => {
    dispatch(action.toggleFavoriteMovie(movie));
  };

  const displayFavoriteMovieIcon = () => {
    const exists =
      favoriteMovies.findIndex((item) => item.id === movie.id) !== -1;
    if (exists) {
      return <IconHeartFilledRed />;
    }

    return <IconHeartFilledWhite />;
  };

  return (
    <TouchableOpacity style={styles.mainContainer}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        }}
        resizeMode="stretch"
        style={{ height: 250 }}
        onLoadEnd={() => setIsLoadingImg(false)}
      />
      <TouchableOpacity
        style={styles.btnHeartContainer}
        onPress={toggleFavoriteMovie}
        hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
      >
        {displayFavoriteMovieIcon()}
      </TouchableOpacity>

      {isLoadingImg && (
        <View style={styles.imageLoader}>
          <ActivityIndicator size="large" color={defaultStyles.colors.red} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "48%",
    marginBottom: 20,
  },
  btnHeartContainer: {
    position: "absolute",
    right: 20,
    top: 10,
  },
  imageLoader: {
    position: "absolute",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MoviePosterItem;
