import React from "react";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <h1 className="font-heading text-3xl text-green-600">Home</h1>

      <Banner />

      <h2 className="font-heading text-blue">This is heading</h2>
      <h2 className="font-heading text-bg_primary">This is heading</h2>
      <h2 className="font-subHeading text-yellow">This is subheading</h2>
      <h2 className="font-body text-grey">This is body</h2>
      <h2 className="text-light_blue">This is a normal text</h2>
    </div>
  );
};

export default Home;
