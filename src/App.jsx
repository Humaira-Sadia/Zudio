import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Mens from "./components/mens";
import Womens from "./components/womens";
import Beauty from "./components/beauty";
import Footer from "./components/footwear";
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
        <Beauty />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
