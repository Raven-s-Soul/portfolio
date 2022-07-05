import "./App.css";
import React from "react";
import About from "./components/About";
import Design from "./components/Design";
import Dev from "./components/Dev";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="about" element={<About />} />
          <Route path="design" element={<Design />} />
          <Route path="dev" element={<Dev />} />
          <Route path="" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
