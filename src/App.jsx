import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="">
          <Routes>
            <Route path="/" element={<Hero />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
