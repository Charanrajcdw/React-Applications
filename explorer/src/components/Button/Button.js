import styles from "./Button.module.css";
import PropTypes from "prop-types";

function Button(props) {
  return <button className={styles.button}>{props.value}</button>;
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
};

Button.defaultProps = {
  value: "BUTTON",
};

export default Button;
