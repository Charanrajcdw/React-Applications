import Card from "../../components/DestinationCard/DestinationCard";
import styles from "./Destinations.module.css";
import cities from "../../assets/data/places.json";
import { DESTINATIONS } from "../../constants/containerConstants";

const Destinations = () => {
  return (
    <div className={styles.destinationsContent}>
      <h2 className={styles.destinationsTitle}>{DESTINATIONS.title}</h2>
      <p className={styles.destinationsDescription}>{DESTINATIONS.description}</p>
      <div className={styles.destinationsContainer}>
        {cities.map((city, index) => (
          <Card city={city} key={`city${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Destinations;
