import Destinations from "../../containers/destinations/Destinations";
import PromoAndExplore from "../../containers/promoAndExplore/PromoAndExplore";
import styles from "./Home.module.css";

function HomePage() {
  return (
    <>
      <PromoAndExplore />
      <Destinations />
    </>
  );
}

export default HomePage;
