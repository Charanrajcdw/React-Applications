import styles from "./CityBanner.module.css";

const CityBanner = (props) => {
  return (
    <div className={styles.bannerSection}>
      <div className={styles.posterContent}>
        <p>{props.city}</p>
        <p>{props.description}</p>
        <p>32°C</p>
      </div>
      <div className={styles.posterImage}>
        <img src={`/images/${props.city}.png`} alt={props.city} width="100%" />
      </div>
    </div>
  );
};

export default CityBanner;
