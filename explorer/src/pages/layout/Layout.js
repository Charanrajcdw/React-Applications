import Header from "../../containers/header/Header";
import Footer from "../../containers/footer/Footer";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
