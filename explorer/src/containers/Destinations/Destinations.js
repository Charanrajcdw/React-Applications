import DestinationCard from "../../components/DestinationCard/DestinationCard";
import styles from "./Destinations.module.css";
import { getCities } from "../../services/cityServices";
import { useEffect, useState } from "react";
import { DESTINATIONS } from "../../constants/containerConstants";

function Destinations() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    (async () => {
      setCities(await getCities());
    })();
  }, []);
  return (
    <div className={styles.destinationsContent}>
      <h2 className={styles.destinationsTitle}>{DESTINATIONS.title}</h2>
      <p className={styles.destinationsDescription}>{DESTINATIONS.description}</p>
      <div className={styles.destinationsContainer}>
        {cities.map((city, index) => (
          <DestinationCard city={city} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Destinations;
