import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<HomePage />}></Route>
          <Route exact path="/home" element={<HomePage />}></Route>
          <Route exact path="/details/*" element={<DetailsPage />}></Route>
        </Route>
        <Route path="*" element={<Navigate replace to="/" />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
