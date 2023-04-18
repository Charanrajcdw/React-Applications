import Form from "../../components/Form/Form";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.formDetails}>
        <h2 className={styles.formTitle}>Contact Us</h2>
        <p className={styles.formDescription}>Our Sales Team will reach out to you ASAP!</p>
      </div>
      <Form />
    </div>
  );
}

export default Footer;
