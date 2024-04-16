import React from "react";

const Footer = () => {
  return (
    <section className="flex flex-col justify-center text-center items-center">
      <div className="grid grid-cols-2 bg-red font-heading text-white shadow w-2/3 h-24 rounded-3xl items-center translate-y-1/2">
        <h1>Help and Contact</h1>
        <h1>About eBay</h1>
      </div>

      <footer className="bg-grey__light flex flex-col justify-center items-center">
        <div className="grid grid-cols-5 gap-x-6 h-60 justify-center items-center p-4 bg-grey__light">
          {/* 1st col  */}
          <div className="font-subHeading flex flex-col items-start ">
            <h3 className="font-heading">Buy</h3>
            <a href="#">Registration</a>
            <a href="#">eBay Money Back Guarantee</a>
            <a href="#">Binding & buying help</a>
            <a href="#">Stores</a>
          </div>
          {/* 2nd col  */}
          <div className="font-subHeading flex flex-col items-start">
            <h3 className="font-heading">Buy</h3>
            <a href="#">Registration</a>
            <a href="#">eBay Money Back Guarantee</a>
            <a href="#">Binding & buying help</a>
            <a href="#">Stores</a>
          </div>
          {/* 3rd col  */}
          <div className="font-subHeading flex flex-col items-start">
            <h3 className="font-heading">Buy</h3>
            <a href="#">Registration</a>
            <a href="#">eBay Money Back Guarantee</a>
            <a href="#">Binding & buying help</a>
            <a href="#">Stores</a>
          </div>
          {/* 4th col  */}
          <div className="font-subHeading flex flex-col items-start">
            <h3 className="font-heading">Buy</h3>
            <a href="#">Registration</a>
            <a href="#">eBay Money Back Guarantee</a>
            <a href="#">Binding & buying help</a>
            <a href="#">Stores</a>
          </div>
          {/* 5th col  */}
          <div className="font-subHeading flex flex-col items-start p-5">
            <h3 className="font-heading">Buy</h3>
            <a href="#">Registration</a>
            <a href="#">eBay Money Back Guarantee</a>
            <a href="#">Binding & buying help</a>
            <a href="#">Stores</a>
          </div>
          
        </div>

        {/* bottom-section */}
        <div className="bottom-section">
          <hr />
          <div className="grid grid-cols-2">
            <p>Copyright @1995-{new Date().getFullYear()} eBay Inc. All Rights Reserved.  </p>
            <div className="">
              <a href="#">PRIVACY POLICY</a><br />
              <a herf="#">TERMS & CONDITIONS</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
