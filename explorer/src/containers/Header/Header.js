import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <Link to="/">
        <img src="/images/logo.png" alt="logo" className={styles.headerLogo} />
      </Link>
      <div className={styles.headerMenu}>
        <Link to="/Hotels">Hotels</Link>
        <Link to="/Bikes">Bike Rentals</Link>
        <Link to="/Restaurants">Restaurants</Link>
      </div>
    </div>
  );
}

export default Header;
