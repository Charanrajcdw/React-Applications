import styles from "./CityBanner.module.css";
import { getWeather } from "../../services/weather";
import { useEffect, useState } from "react";

const CityBanner = (props) => {
  const [weather, setWeather] = useState("25°C");
  const cityName = props.city;

  useEffect(() => {
    (async () => {
      setWeather(await getWeather(cityName.toLowerCase()));
    })();
  }, [cityName]);

  return (
    <div className={styles.bannerSection}>
      <div className={styles.posterContent}>
        <p>{cityName}</p>
        <p>{props.description}</p>
        <p>{weather}</p>
      </div>
      <div className={styles.posterImage}>
        <img src={`/images/${cityName}.png`} alt={cityName} width="100%" />
      </div>
    </div>
  );
};

export default CityBanner;
