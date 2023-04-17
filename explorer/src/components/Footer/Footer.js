import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.contactForm}>
      <div className={styles.formDetails}>
        <h2 className={styles.formTitle}>Contact Us</h2>
        <p className={styles.formDescription}>Our Sales Team will reach out to you ASAP!</p>
      </div>
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
    </div>
  );
}

export default Footer;
