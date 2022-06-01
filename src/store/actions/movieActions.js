import Api from "../../api/Api";
import * as types from "../types";

export const getRecommendedMovies = () => async (dispatch) => {
  const url = "/movie/popular";
  try {
    dispatch({ type: types.GET_RECOMMENDED_MOVIES_REQUEST });
    const res = await Api.get(url);
    console.log("Res getRecommendedMovies", res.data);
    dispatch({
      type: types.GET_RECOMMENDED_MOVIES_SUCCESS,
      payload: res.data.results,
    });
  } catch (e) {
    console.error("Error handling getRecommendedMovies action", e);
    dispatch({ type: types.GET_RECOMMENDED_MOVIES_FAILURE });
  }
};

export const toggleFavoriteMovie = (movie) => (dispatch, getState) => {
  const { favoriteMovies } = getState().movies;

  let newFavoriteMovies = [...favoriteMovies];
  const exists =
    favoriteMovies.findIndex((item) => item.id === movie.id) !== -1;
  if (exists) {
    newFavoriteMovies = newFavoriteMovies.filter(
      (item) => item.id !== movie.id
    );
  } else {
    newFavoriteMovies = [...favoriteMovies, movie];
  }

  console.log("New", newFavoriteMovies);

  dispatch({ type: types.TOGGLE_FAVORITE_MOVIE, payload: newFavoriteMovies });
};
