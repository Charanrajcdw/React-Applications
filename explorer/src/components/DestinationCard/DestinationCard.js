import Button from "../button/Button";
import styles from "./DestinationCard.module.css";
import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className={styles.card}>
      <div>
        <img src={`images/${props.city.city}.png`} alt={props.city.city} />
        <p className={styles.cardDescription}>{props.city.place}</p>
        <h5 className={styles.cardName}>{props.city.city}</h5>
        <p className={styles.cardContent}>{props.city.shortDescription}</p>
      </div>
      <Button value="READ MORE" />
    </div>
  );
}

Card.propTypes = {
  city: PropTypes.shape({
    city: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
