import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import TradingAccounts from "../pages/TradingAccounts";
import About from "../pages/About";
import Deposits from "../pages/Deposits";
import CopyTrading from "../pages/CopyTrading";
import Calculator from "../pages/Calculator";
import Calendar from "../pages/Calendar";
import FAQ from "../pages/FAQ";
import Partnership from "../pages/Partnership";

import Contact from "../pages/Contact";

const UserRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/accounts" element={<TradingAccounts />} />
        <Route path="/about" element={<About />} />
        <Route path="/deposits" element={<Deposits />} />
        <Route path="/copy-trading" element={<CopyTrading />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default UserRoutes;
