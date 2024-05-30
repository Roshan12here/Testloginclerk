import React from 'react';
import Header from './Navbar';
import Slider from './Carousel';

export const Hero = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1">
        <Slider />
      </div>
    </div>
  );
};

export default Hero;
