import styles from "./Dropdown.module.css";
import cities from "../../assets/data/places.json";
import PropTypes from "prop-types";

const Dropdown = (props) => {
  return (
    <select name={props.name} id={props.id} className={styles.dropdown} defaultValue="choose">
      <option value="choose" disabled hidden>
        Choose
      </option>
      {cities.map((city, index) => (
        <option key={`city${index}`} value={city.city}>
          {city.city}
        </option>
      ))}
    </select>
  );
};

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Dropdown;
