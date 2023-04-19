import Form from "../../components/form/Form";
import styles from "./Footer.module.css";
import { FOOTER } from "../../constants/container";

function Footer() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.formDetails}>
        <h2 className={styles.formTitle}>{FOOTER.title}</h2>
        <p className={styles.formDescription}>{FOOTER.description}</p>
      </div>
      <Form />
    </div>
  );
}

export default Footer;
