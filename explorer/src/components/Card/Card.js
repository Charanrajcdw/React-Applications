import Button from "../Button/Button";
import styles from "./Card.module.css";

function Card(props) {
  return (
    <div className={styles.card}>
      <img src={`images/${props.city.city}.png`} alt={props.city.city} />
      <p className={styles.cardDescription}>{props.city.place}</p>
      <h5 className={styles.cardName}>{props.city.city}</h5>
      <p className={styles.cardContent}>{props.city.shortDescription}</p>
      <Button value="READ MORE" />
    </div>
  );
}

export default Card;
