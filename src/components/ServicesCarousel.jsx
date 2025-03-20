import React, { useEffect, useState } from "react";

const ServicesCarousel = ({ services }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden mt-6">
      <h2 className="text-3xl font-semibold text-center mb-6 text-yellow-300">Featured Initiatives</h2>
      <div className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {services.slice(0, 6).map((service, index) => (
          <div key={index} className="w-full flex-shrink-0 p-4">
            <div className="relative bg-white bg-opacity-20 rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
              <div className="p-6 text-center border">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-yellow-300">{service.title}</h3>
                <p className="text-lg opacity-80">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCarousel;
