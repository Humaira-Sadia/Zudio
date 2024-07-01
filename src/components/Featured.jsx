import React, { useState } from "react";
import { categories } from "./constants";

const Featured = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const handleTextClick = (e) => {
    e.stopPropagation();
    const destination = document.getElementById("destination");
    if (destination) {
      destination.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="main-container" className="w-screen h-screen flex flex-wrap p-4">
      {categories.map((category) => (
        <div
          key={category.id}
          id={category.id}
          className={`category-1 relative overflow-hidden cursor-pointer border border-gray-300 p-2 ${
            expandedCategory === category.id
              ? "w-full h-full"
              : expandedCategory
              ? "hidden"
              : "w-1/2 h-1/2"
          }`}
          onClick={() => handleCategoryClick(category.id)}
        >
          <div
            className={`category-text absolute top-0 ${
              category.alignRight ? "right-0" : "left-0"
            } h-full w-[5%] bg-white flex items-center justify-center text-2xl font-bold z-10`}
            onClick={handleTextClick}
          >
            {category.name}
          </div>
          <img
            src={category.image}
            alt={`${category.name}'s Fashion`}
            className={`category-image absolute top-0 ${
              category.alignRight ? "right-[5%]" : "left-[5%]"
            } w-[95%] h-full object-cover`}
          />
        </div>
      ))}
    </div>
  );
};

export default Featured;
