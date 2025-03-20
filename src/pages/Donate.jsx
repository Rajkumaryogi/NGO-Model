import React from "react";
import ImpactCards from "../components/ImpactCards";
import Qr from "../assets/Qr.jpeg";
import DonateButton from "../components/DonateButton"; // Import the updated DonateButton component

const Donate = () => {
  // Function to handle QR Code download
  const downloadQR = () => {
    const qrImage = document.getElementById("qrCode");
    const link = document.createElement("a");
    link.href = qrImage.src;
    link.download = "DhartiFoundation_QR.png";
    link.click();
  };

  // Function to share QR Code
  const shareQR = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Dharti Foundation QR Code",
          text: "Donate to Dharti Foundation via QR Code",
          url: document.getElementById("qrCode").src,
        });
      } else {
        alert("Sharing is not supported on this browser.");
      }
    } catch (error) {
      console.error("Error sharing QR Code:", error);
    }
  };

  return (
    <section className="border w-full min-h-screen bg-gradient-to-r from-blue-600 to-green-500 text-white p-6 md:p-14 flex flex-col items-center justify-center mt-16">
      {/* Donation Details Section with Welcome Line */}
      <div className="relative flex flex-col lg:flex-row items-center bg-gradient-to-b from-green-500 to-blue-800 p-6 md:p-8 rounded-2xl shadow-2xl max-w-3xl w-full border border-opacity-40 animate-fadeIn">
        {/* Left - Welcome Line */}
        <div className="flex-1 text-center lg:text-left mb-4 lg:mb-0">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-yellow-300 animate-slideIn">
            Make a Difference 🌍 Today!
          </h2>
        </div>
        {/* Right - Donation Details */}
        <div className="flex-1 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-yellow-300">Donation Details 💖</h2>
          <div className="text-left space-y-2 md:space-y-4 text-sm md:text-lg">
            <p className="flex justify-between"><span className="font-semibold">✨ Name:</span> Rajkumar Yogi</p>
            <p className="flex justify-between"><span className="font-semibold">🏦 A/c No:</span> 40519530725</p>
            <p className="flex justify-between"><span className="font-semibold">🔑 IFSC:</span> SBIN0031845</p>
            <p className="flex justify-between"><span className="font-semibold">📲 PhonePe:</span> 9785641782</p>
            <p className="flex justify-between"><span className="font-semibold">💰 UPI Id:</span> rajkumar6777y@ybl</p>
          </div>
          {/* Replace the button with DonateButton */}
          <DonateButton />
        </div>
      </div>

      {/* Hero Section */}
      <div className="border mt-6 md:mt-10 p-6 md:p-8 bg-gradient-to-b from-green-500 to-blue-800 rounded-2xl shadow-2xl max-w-3xl w-full text-center lg:text-left flex flex-col lg:flex-row items-center animate-fadeIn">
        {/* Left Section - QR Code */}
        <div className="flex-1 flex flex-col items-center">
          <div className="bg-white p-2 md:p-4 rounded-2xl shadow-xl">
            <img id="qrCode" src={Qr} alt="QR Code" className="w-32 md:w-48 lg:w-64 rounded-xl shadow-lg" />
          </div>
        </div>

        {/* Right Section - Text Content */}
        <div className="flex-1 text-center lg:text-left mt-6 lg:mt-0">
          <h1 className="text-xl md:text-3xl text-yellow-300 font-bold mb-4"> ! Your heading goes here</h1>
          <p className="text-sm md:text-lg opacity-90 max-w-lg mx-auto lg:mx-0">
            Current time common people are far away from legal advice for expensive legal constant fees. That's why we provide free legal advice.
          </p>

          {/* QR Code Buttons */}
          <div className="mt-4 md:mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button onClick={downloadQR} className="bg-yellow-400 text-black px-5 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-lg font-bold shadow-lg transition-all duration-300 hover:bg-yellow-600 hover:scale-105 active:scale-95 animate-pulse">
              Download QR
            </button>
            <button onClick={shareQR} className="bg-blue-700 text-black px-5 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-lg font-bold shadow-lg transition-all duration-300 hover:bg-blue-900 hover:scale-105 active:scale-95 animate-pulse">
              Share QR
            </button>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 1s ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slideIn {
            animation: slideIn 1s ease-in-out;
          }
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
          }
        `}
      </style>
      <ImpactCards />
    </section>
  );
};

export default Donate;