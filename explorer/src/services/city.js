import axios from "axios";
import { BASE_API_URL } from "../constants/routes";

const cityAPI = axios.create({
  baseURL: BASE_API_URL,
});

export const getCities = async () => {
  const cities = await cityAPI.get("");
  return cities.data;
};

export const getCity = async (cityName) => {
  const city = await cityAPI.get(`/places/${cityName}`);
  return city.data;
};

export const getSimilarCities = async (cityName) => {
  const similarCities = await cityAPI.get(`/places/related/${cityName}`);
  return similarCities.data;
};
