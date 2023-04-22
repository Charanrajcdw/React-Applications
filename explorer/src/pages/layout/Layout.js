import Header from "../../containers/header/Header";
import Footer from "../../containers/footer/Footer";

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
