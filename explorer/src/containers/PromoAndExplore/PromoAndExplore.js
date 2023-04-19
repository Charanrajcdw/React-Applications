import Button from "../../components/button/Button";
import Dropdown from "../../components/dropdown/Dropdown";
import styles from "./PromoAndExplore.module.css";
import { PROMO_AND_EXPLORE } from "../../constants/container";

const PromoAndExplore = () => {
  return (
    <div className={styles.promoSection}>
      <div className={styles.posterContent}>
        <p>{PROMO_AND_EXPLORE.title}</p>
        <p>
          {PROMO_AND_EXPLORE.description.slice(0, -5)}
          <span>{PROMO_AND_EXPLORE.description.slice(-5)}</span>
        </p>
        <Dropdown name="destinations" id="destinations" />
        <Button value="EXPLORE" style={styles.promoButton} />
      </div>
      <div className={styles.posterImage}>
        <img src="images/bike.webp" alt="explorer logo" width="100%" />
      </div>
    </div>
  );
};

export default PromoAndExplore;
