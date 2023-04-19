import { Outlet } from "react-router-dom";
import Header from "../containers/Header/Header";
import Footer from "../containers/Footer/Footer";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainPage;
