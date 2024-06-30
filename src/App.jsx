import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Mens from "./components/mens";
import Womens from "./components/womens";
import Beauty from "./components/beauty";
import ShoeCarousel from "./components/footwear";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="">
          <Routes>
            <Route path="/" element={<Hero />} />
          </Routes>
        </div>
        <Featured />
        <Mens />
        <Womens />
        <ShoeCarousel />
        <Beauty />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
