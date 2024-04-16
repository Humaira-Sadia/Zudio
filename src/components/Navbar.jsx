import React, { useEffect, useState } from "react";
import { IoIosNotifications, IoIosSearch } from "react-icons/io";
import { FaUserCircle, FaHeart, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        console.log("Scrolled:", isScrolled);
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
  return (
    <>
      {/* sticky navbar */}
      <div
        className={`top-0 ${
          scrolled ? "sticky" : ""
        } h-20 flex items-center justify-between px-8 transition-all duration-300 my-8`}
      >
        <div className="logo">
          <img src="./images/logo.png" alt="logo" width={"120px"} />
        </div>

        {/* search bar */}
        <div className="hidden sm:flex justify-between items-center search w-2/3 p-1 rounded-full border border-black">
          <input
            type="text"
            placeholder="Search for anything"
            className="font-subHeading"
          />
          <div className="bg-blue p-1 text-white rounded-full hover">
            <IoIosSearch style={{ height: "30px", width: "30px" }} />
          </div>
        </div>

        {/* favIcons  */}
        <div className="cursor-pointer flex justify-around p-2 text-3xl lg:w-[15%] md:w-1/3 w-1/2">
          <img src="./images/heart.svg" className="hover" alt="heart" width={"27px"}/>
          <img src="./images/notification.svg" className="hover" alt="notification" width={"27px"}/>
          <img src="./images/cart.svg" className="hover" alt="cart" width={"27px"}/>
          <img src="./images/user.svg" className="hover" alt="user" width={"27px"}/>
        </div>
      </div>
    </>
  );
};

export default Navbar;
