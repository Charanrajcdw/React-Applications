import axios from "axios";

export const getWeather = async (placeName) => {
  const cities = await axios.get(
    `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${placeName}&days=1&aqi=no&alerts=yes;`
  );
  return cities.data.current.temp_c + "°C";
};
