import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`h-22 fixed w-screen top-0 left-0 right-0 z-50 ${scrolled ? 'bg-transparent text-black backdrop-blur-lg' : 'bg-black text-white'} font-bold text-4xl flex items-center p-4 font-heading tracking-wider transition-all duration-300`}>
      <span>ZUDIO</span>
    </div>
  );
};

export default Navbar;
