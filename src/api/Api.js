import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusCodes } from "http-status-codes";
import { configureStore } from "../store/store";
import routes from "../navigation/routes";
import { API_KEY } from "@env";

const Api = () => {
  const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
  });

  api.interceptors.request.use(
    async (config) => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      config.params = {
        ...config.params,
        api_key: API_KEY,
      };
      return config;
    },
    (error) => Promise.reject(error)
  );

  api.interceptors.response.use(
    (response) => response,

    (error) => {
      const status = error.response && error.response.status;
      if (status === StatusCodes.INTERNAL_SERVER_ERROR) {
        configureStore.dispatch(
          showErrorAlert({
            title: "Erreur interne",
            content: "Un problème est survenu. Réessayez ultérieurement.",
          })
        );
      }

      if (status === StatusCodes.UNAUTHORIZED) {
        navigation.navigate(routes.HOME);
      }

      if (error.message === "Network Error") {
        configureStore.dispatch(
          showErrorAlert({
            title: "Erreur de connexion",
            content: "Impossible d'établir la connexion avec le serveur.",
          })
        );
      }

      return Promise.reject(error);
    }
  );
  return api;
};

export default Api();
