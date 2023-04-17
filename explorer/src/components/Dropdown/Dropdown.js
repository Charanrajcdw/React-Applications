import styles from "./Dropdown.module.css";
import cities from "../../assets/data/places.json";

function Dropdown(props) {
  return (
    <select name={props.name} id={props.id} className={styles.dropdown}>
      <option value="">Choose</option>
      {cities.map((city, index) => (
        <option key={index} value={city.city}>
          {city.city}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
