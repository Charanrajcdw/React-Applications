import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import HomePage from "./pages/home/Home";
import DetailsPage from "./pages/details/Details";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/home" element={<HomePage />}></Route>
          <Route exact path="/details/*" element={<DetailsPage />}></Route>
          <Route path="*" element={<Navigate replace to="/" />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
