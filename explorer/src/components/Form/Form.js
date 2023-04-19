import Dropdown from "../dropdown/Dropdown";
import Button from "../button/Button";
import styles from "./Form.module.css";
import { FORM } from "../../constants/component";

function Form() {
  return (
    <form className={styles.formContent}>
      <label htmlFor="cityName">{FORM.cityName}</label>
      <input name="cityName" id="cityName" type="text" />
      <label htmlFor="homeTown">{FORM.homeTown}</label>
      <Dropdown name="homeTown" id="homeTown" />
      <label htmlFor="destinationTown">{FORM.destinationTown}</label>
      <Dropdown name="destinationTown" id="destinationTown" />
      <label htmlFor="contactNumber">{FORM.contactNumber}</label>
      <input name="contactNumber" id="contactNumber" type="text" pattern="[0-9]+" />
      <Button value={FORM.submitButtonText} />
    </form>
  );
}

export default Form;
