import axios from "axios";

export const getCities = async () => {
  const cities = await axios.get("https://nijin-server.vercel.app/api/explorer");
  return cities.data;
};
