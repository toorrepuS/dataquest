import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Index from "./pages/Index";

const AppRouter: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </Router>
);

export default AppRouter;
