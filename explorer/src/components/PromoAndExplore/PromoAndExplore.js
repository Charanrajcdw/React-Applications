import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./PromoAndExplore.module.css";

function PromoAndExplore() {
  return (
    <div className={styles.promoSection}>
      <div className={styles.posterContent}>
        <p>WELCOME TO EXPLORER</p>
        <p>
          Your Adventure Travel Expert in the <span>SOUTH</span>
        </p>
        <Dropdown name="destinations" id="destinations" />
        <Button value="EXPLORE" />
      </div>
      <div className={styles.posterImage}>
        <img src="images/bike.webp" alt="explorer logo" width="100%" />
      </div>
    </div>
  );
}

export default PromoAndExplore;
