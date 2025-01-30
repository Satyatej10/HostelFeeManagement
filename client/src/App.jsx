import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Dashboard from "./Pages/Dashboard";
import PaymentPage from "./Pages/PaymentPage";
import MessCard from "./Pages/MessCard";
import Rooms from "./Pages/Rooms";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/messcard" element={<MessCard />} />
        <Route path="/rooms" element={<Rooms />} />
      </Routes>
    </Router>
  );
};

export default App;
