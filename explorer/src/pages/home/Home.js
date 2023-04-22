import Destinations from "../../containers/destinations/Destinations";
import PromoAndExplore from "../../containers/promoAndExplore/PromoAndExplore";
import { getCities } from "../../services/city";
import { useEffect, useState } from "react";
import { DESTINATIONS } from "../../constants/container";

function HomePage() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    (async () => {
      setCities(await getCities());
    })();
  }, []);

  return (
    <>
      <PromoAndExplore />
      <Destinations title={DESTINATIONS.title} description={DESTINATIONS.description} cities={cities} />
    </>
  );
}

export default HomePage;
