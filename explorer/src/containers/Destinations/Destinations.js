import DestinationCard from "../../components/destinationCard/DestinationCard";
import styles from "./Destinations.module.css";

function Destinations(props) {
  return (
    <div className={styles.destinationsContent}>
      <h2 className={styles.destinationsTitle}>{props.title}</h2>
      <p className={styles.destinationsDescription}>{props.description}</p>
      <div className={styles.destinationsContainer}>
        {props.cities.map((city, index) => (
          <DestinationCard city={city} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Destinations;
