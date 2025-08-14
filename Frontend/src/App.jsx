// App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./subscription/Home.jsx";
import MealPage from "./pages/MealPage";
import Subscription from "./pages/Subscription";
import Diamond from "./subscription/Diamond.jsx";
import Elite from "./subscription/Elite.jsx";

import Header from "./components/Header.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Subscription />} />
        <Route path="/home" element={<Home />} />
        <Route path="/diamond" element={<Diamond />} />
        <Route path="/elite" element={<Elite />} />
        <Route path="/meal/:type" element={<MealPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      
    </>
  );
}
