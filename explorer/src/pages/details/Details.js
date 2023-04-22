import Destinations from "../../containers/destinations/Destinations";
import CityBanner from "../../containers/cityBanner/CityBanner";
import { getCities, getCity, getSimilarCities } from "../../services/city";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Details.module.css";

function DetailsPage() {
  const [cities, setCities] = useState([]);
  const [cityDetails, setCityDetails] = useState({});
  const { city } = useParams();
  const CAPITALIZED_CURRENT_CITY = city.charAt(0).toUpperCase() + city.slice(1);

  useEffect(() => {
    (async () => {
      let allCities = await getCities();
      let similarCities = await getSimilarCities(city);
      let cityDetailsFromAPI = await getCity(city);

      allCities = allCities.filter((city) => similarCities.some((similarCity) => city.city === similarCity));
      setCities(allCities);
      setCityDetails(cityDetailsFromAPI);
    })();
  }, [city]);

  return (
    <>
      <CityBanner city={CAPITALIZED_CURRENT_CITY} description={cityDetails.place} />
      <p className={styles.fullDescription}>{cityDetails.fullDescription}</p>
      <Destinations title="Similar Destinations" description={`Because you liked ${CAPITALIZED_CURRENT_CITY}`} cities={cities} />
    </>
  );
}

export default DetailsPage;
