import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Index from "./pages/Index";
import Login from "./pages/Auth/LoginPage";

const AppRouter: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

export default AppRouter;
