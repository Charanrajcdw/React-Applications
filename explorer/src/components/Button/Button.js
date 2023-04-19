import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button className={`${styles.button} ${props.style}`} onClick={props.handleClick}>
      {props.value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
};

Button.defaultProps = {
  value: "BUTTON",
};

export default Button;
