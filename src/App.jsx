import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import NewPage from "./pages/NewPage";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-8">
      <nav className="flex justify-center gap-6 mb-8 text-lg sm:text-xl">
        <NavLink to="/"className={({ isActive }) => isActive? "text-blue-800 font-semibold": "text-blue-600 hover:text-blue-800 transition duration-300"}>
          Bosh sahifa
        </NavLink>
        <NavLink to="/newPage" className={({ isActive }) => isActive ? "text-blue-800 font-semibold" : "text-blue-600 hover:text-blue-800 transition duration-300"}>
          Yangi sahifa
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newPage" element={<NewPage />} />
      </Routes>
    </div>
  );
};

export default App;
