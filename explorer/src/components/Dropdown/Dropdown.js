import styles from "./Dropdown.module.css";
import { getCities } from "../../services/city";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Dropdown(props) {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    (async () => {
      setCities(await getCities());
    })();
  }, []);
  return (
    <select name={props.name} id={props.id} className={styles.dropdown} defaultValue="choose">
      <option value="choose" disabled hidden>
        Choose
      </option>
      {cities.map((city, index) => (
        <option key={index} value={city.city}>
          {city.city}
        </option>
      ))}
    </select>
  );
}

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Dropdown;
