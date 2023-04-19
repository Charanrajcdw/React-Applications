import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import HomePage from "./pages/home/Home";
import DetailsPage from "./pages/details/Details";
import { ROUTES } from "./constants/routes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path={ROUTES.index} element={<HomePage />}></Route>
          <Route exact path={ROUTES.home} element={<HomePage />}></Route>
          <Route exact path={ROUTES.details} element={<DetailsPage />}></Route>
          <Route path="*" element={<Navigate replace to={ROUTES.index} />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
