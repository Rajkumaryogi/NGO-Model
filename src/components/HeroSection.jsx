
import React from "react";
import home from "../assets/home.jpg";


const HeroSection = () => {
  return (
    // Hero Section Container with Background Image and Gradient Overlay
    <section
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24 overflow-hidden"
      style={{ backgroundImage: `url(${home})` }} // Replace with your image path
    >
      {/* Gradient Overlay for Better Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-black/40"></div>

      {/* Content Wrapper with Animations */}
      <div className="relative z-10 max-w-4xl text-center text-white">
        {/* Animated Title with Typing Effect */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight animate-fadeInUp">
          Empower. <span className="text-yellow-400">Inspire.</span> Transform.
        </h1>

        {/* Subtitle with Fade-In Animation */}
        <p className="mt-4 text-lg sm:text-xl md:text-2xl opacity-90 animate-fadeInUp delay-200">
          Join hands with us to create a <span className="font-semibold text-yellow-400">positive impact</span> in the world.
        </p>

        {/* Call to Action Buttons with Hover Effects */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 animate-fadeInUp delay-400">
          <a
            href="/donate"
            className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-yellow-500 transform hover:scale-105 transition duration-300 hover:shadow-xl"
          >
            Donate Now
          </a>
          <a
            href="/join"
            className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-white hover:text-black transform hover:scale-105 transition duration-300 hover:shadow-xl"
          >
            Join Us
          </a>
        </div>
        
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-400 rounded-full opacity-40 animate-float"></div>
      <div className="absolute bottom-16 right-20 w-24 h-24 bg-green-500 rounded-full opacity-30 animate-float delay-1000"></div>
      <div className="absolute top-20 right-10 w-12 h-12 bg-purple-500 rounded-full opacity-30 animate-float delay-2000"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-blue-500 rounded-full opacity-30 animate-float delay-1500"></div>

      {/* Animated Stars for a Magical Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
      
    </section>
  );
};

export default HeroSection;
