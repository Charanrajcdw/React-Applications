import axios from "axios";
import { BASE_API_URL } from "../constants/routes";

const cityAPI = axios.create({
  baseURL: BASE_API_URL,
});

export const getCities = async () => {
  const cities = await cityAPI.get("");
  return cities.data;
};
