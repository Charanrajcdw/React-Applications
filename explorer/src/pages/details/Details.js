import Destinations from "../../containers/destinations/Destinations";
import CityBanner from "../../containers/cityBanner/CityBanner";
import { getCities, getCity, getSimilarCities } from "../../services/city";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Details.module.css";

function DetailsPage() {
  const [cities, setCities] = useState([]);
  const [cityDetails, setCityDetails] = useState({});
  const CURRENT_CITY = useLocation().pathname.split("/")[2].toLowerCase();
  const CAPITALIZED_CURRENT_CITY = CURRENT_CITY.charAt(0).toUpperCase() + CURRENT_CITY.slice(1);

  useEffect(() => {
    (async () => {
      let allCities = await getCities();
      let similarCities = await getSimilarCities(CURRENT_CITY);
      let cityDetailsFromAPI = await getCity(CURRENT_CITY);

      allCities = allCities.filter((city) => similarCities.some((similarCity) => city.city === similarCity));
      setCities(allCities);
      setCityDetails(cityDetailsFromAPI);
    })();
  }, [CURRENT_CITY]);

  return (
    <>
      <CityBanner city={CAPITALIZED_CURRENT_CITY} description={cityDetails.place} />
      <p className={styles.fullDescription}>{cityDetails.fullDescription}</p>
      <Destinations title="Similar Destinations" description={`Because you liked ${CAPITALIZED_CURRENT_CITY}`} cities={cities} />
    </>
  );
}

export default DetailsPage;
