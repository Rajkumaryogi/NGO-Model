import React, { useEffect, useState } from "react";

const ImpactCards = () => {
  // Card data
  const impactData = [
    {
      title: "Empowering Lives Through Healthcare",
      description:
        "Highlighting the impact on healthcare initiatives, medical camps, and blood donation programs.",
      icon: "🩺",
    },
    {
      title: "Building a Sustainable Future: Your Contribution Matters",
      description:
        "Emphasizing the organization's efforts in afforestation, environmental initiatives, and long-term impact.",
      icon: "🌱",
    },
    {
      title: "Saving Lives: The Power of Your Donation",
      description:
        "Focusing on the direct impact on saving lives through blood donation, medical camps, and health awareness.",
      icon: "❤️",
    },
    {
      title: "Supporting Social Causes: ACF's Comprehensive Approach",
      description:
        "Showcasing the organization's multi-faceted approach, including legal advice, social awareness, and support for the underprivileged.",
      icon: "🤝",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % impactData.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="border rounded-2xl max-w-3xl w-full mt-10 py-12 bg-gradient-to-b from-green-500 to-blue-800 text-white flex flex-col items-center overflow-hidden animate-fadeIn">
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold mb-8 animate-fadeIn text-center text-yellow-400">
        Why Dharti International Foundation?
      </h2>
      
      {/* Cards Container */}
      <div className="relative w-full max-w-5xl overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {impactData.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 p-6 flex flex-col items-center text-center">
              <div className="p-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl">
                {/* Icon */}
                <div className="text-6xl mb-4 animate-bounce">{item.icon}</div>
                {/* Title */}
                <h3 className="text-2xl font-semibold mb-2 text-yellow-300">
                  {item.title}
                </h3>
                {/* Description */}
                <p className="text-lg opacity-80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="mt-6 flex space-x-2">
        {impactData.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-yellow-400 scale-125' : 'bg-white opacity-50'}`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default ImpactCards;
