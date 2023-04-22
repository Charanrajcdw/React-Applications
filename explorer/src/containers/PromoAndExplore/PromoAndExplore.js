import Button from "../../components/button/Button";
import Dropdown from "../../components/dropdown/Dropdown";
import styles from "./PromoAndExplore.module.css";
import { PROMO_AND_EXPLORE } from "../../constants/container";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PromoAndExplore = () => {
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();
  function handleDropdownClick(event) {
    setDestination(event.target.value);
  }
  function handleExploreClick(place) {
    destination && navigate(`/details/${destination.toLowerCase()}`);
  }
  return (
    <div className={styles.promoSection}>
      <div className={styles.posterContent}>
        <p>{PROMO_AND_EXPLORE.title}</p>
        <p>
          {PROMO_AND_EXPLORE.description.slice(0, -5)}
          <span>{PROMO_AND_EXPLORE.description.slice(-5)}</span>
        </p>
        <Dropdown name="destinations" id="destinations" handleClick={handleDropdownClick} />
        <Button value="EXPLORE" style={styles.promoButton} handleClick={handleExploreClick} />
      </div>
      <div className={styles.posterImage}>
        <img src="images/bike.webp" alt="explorer logo" width="100%" />
      </div>
    </div>
  );
};

export default PromoAndExplore;
