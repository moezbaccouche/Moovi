import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import popupReducer from "./popupReducer";

export default combineReducers({
  movies: moviesReducer,
  popups: popupReducer,
});
