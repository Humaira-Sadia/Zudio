import React from 'react'

const Featured = () => {
  let isExpanded = false;
    let expandedCategory = null;

    document.querySelectorAll(".category-1").forEach((category) => {
        const text = category.querySelector(".category-text");
        const image = category.querySelector(".category-image");

        category.addEventListener("click", () => {
            if (isExpanded && expandedCategory === category) {
                resetLayout();
            } else {
                expandCategory(category);
            }
        });

        text.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent triggering the category click event
            const destination = document.getElementById("destination");
            if (destination) {
                destination.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    function expandCategory(category) {
        resetLayout();
        isExpanded = true;
        expandedCategory = category;

        document.querySelectorAll(".category-1").forEach((c) => {
            if (c !== category) {
                c.style.display = "none";
            }
        });

        category.style.width = "calc(100% - 2rem)";
        category.style.height = "calc(100% - 2rem)";

        const image = category.querySelector(".category-image");
        image.style.width = "95%";
    }

    function resetLayout() {
        isExpanded = false;
        expandedCategory = null;

        document.querySelectorAll(".category-1").forEach((c) => {
            c.style.display = "block";
            c.style.width = "calc(50% - 1rem)";
            c.style.height = "calc(50% - 1rem)";

            const image = c.querySelector(".category-image");
            image.style.width = "95%";
        });
    }
  return (
    <div id="main-container" class="w-screen h-screen flex flex-wrap p-4">
      <div id="men1" class="category-1 w-1/2 h-1/2 relative overflow-hidden cursor-pointer border border-gray-300 p-2">
        <div class="category-text  absolute top-0 left-0 h-full w-[5%] bg-white flex items-center justify-center text-2xl font-bold z-10 ">
          Men
        </div>
        <img src="src\images\men.avif" alt="Men's Fashion" class="category-image absolute top-0 left-[5%] w-[95%] h-full object-cover"/>
      </div>
      <div id="women1" class="category-1 w-1/2 h-1/2 relative overflow-hidden cursor-pointer border border-gray-300 p-2">
        <div class="category-text  absolute top-0 right-0 h-full w-[5%] bg-white flex items-center justify-center text-2xl font-bold z-10">
          Women
        </div>
        <img src="src\images\women.avif" alt="Women's Fashion" class="category-image absolute top-0 right-[5%] w-[95%] h-full object-cover"/>
      </div>
      <div id="footwear1" class="category-1 w-1/2 h-1/2 relative overflow-hidden cursor-pointer border border-gray-300 p-2">
        <div class="category-text absolute top-0 left-0 h-full w-[5%] bg-white flex items-center justify-center text-2xl font-bold z-10 ">
          Footwear
        </div>
        <img src="src\images\beauty.avif" alt="Footwear" class="category-image absolute top-0 left-[5%] w-[95%] h-full object-cover"/>
      </div>
      <div id="beauty1" class="category-1 w-1/2 h-1/2 relative overflow-hidden cursor-pointer border border-gray-300 p-2">
        <div class="category-text  absolute top-0 right-0 h-full w-[5%] bg-white flex items-center justify-center text-2xl font-bold z-10">
          Beauty
        </div>
        <img src="src\images\footwear.avif" alt="Beauty Products" class="category-image absolute top-0 right-[5%] w-[95%] h-full object-cover"/>
      </div>
    </div>
      )
}

      export default Featured