import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import styles from "./Form.module.css";

function Form() {
  return (
    <form className={styles.formContent}>
      <label htmlFor="cityName">Name</label>
      <input name="cityName" id="cityName" type="text" />
      <label htmlFor="homeTown">Your Home Town</label>
      <Dropdown name="homeTown" id="homeTown" />
      <label htmlFor="destinationTown">Where would you like to go?</label>
      <Dropdown name="destinationTown" id="destinationTown" />
      <label htmlFor="contactNumber">Contact Number</label>
      <input name="contactNumber" id="contactNumber" type="text" pattern="[0-9]+" />
      <Button value="SUBMIT INTEREST" />
    </form>
  );
}

export default Form;
