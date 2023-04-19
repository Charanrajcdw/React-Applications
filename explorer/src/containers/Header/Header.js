import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { HEADER } from "../../constants/containerConstants";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Link to="/">
        <img src="/images/logo.png" alt="logo" className={styles.headerLogo} />
      </Link>
      <div className={styles.headerMenu}>
        {HEADER.menuItems.map((menuItem, index) => (
          <Link to={`/${menuItem.split(" ").join("")}`} key={`menu${index}`}>
            {menuItem}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
