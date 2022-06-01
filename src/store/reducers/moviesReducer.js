import * as types from "../types";

const INITIAL_STATE = {
  isLoadingMovies: false,
  movies: [],
  favoriteMovies: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_RECOMMENDED_MOVIES_REQUEST:
      return {
        ...state,
        isLoadingMovies: true,
      };

    case types.GET_RECOMMENDED_MOVIES_SUCCESS:
      return {
        ...state,
        isLoadingMovies: false,
        movies: action.payload,
      };

    case types.GET_RECOMMENDED_MOVIES_FAILURE:
      return {
        ...state,
        isLoadingMovies: false,
      };

    case types.TOGGLE_FAVORITE_MOVIE:
      return {
        ...state,
        favoriteMovies: action.payload,
      };

    default:
      return state;
  }
};
