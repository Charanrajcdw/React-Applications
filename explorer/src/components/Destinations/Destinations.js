import Card from "../Card/Card";
import styles from "./Destinations.module.css";
import { getCities } from "../../services/cityServices";
import { useEffect,useState } from "react";

function Destinations() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    (async () => {
      setCities(await getCities());
    })();
  }, []);
  return (
    <div className={styles.destinationsContent}>
      <h2 className={styles.destinationsTitle}>Destinations</h2>
      <p className={styles.destinationsDescription}>Just for you. Because you and your bike are special to us!</p>
      <div className={styles.destinationsContainer}>
        {cities.map((city, index) => (
          <Card city={city} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Destinations;
