import React from "react";
import Logo from "../assets/DFlogo.ico";

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaYoutube } from "react-icons/fa";
import Newsletter from "../pages/Newsletter";

// Footer component for the website
const Footer = () => {

  

  return (
    <footer className="bg-gradient-to-r from-blue-500 to-green-400 text-black py-10 border">
      {/* Footer Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          
          {/* 1️⃣ Logo and About Section */}
          <div className="transition transform hover:scale-105">
            <img src= {Logo} alt="DIF Logo" className="h-24 w-24 mx-auto md:mx-0 " />
            <p className="mt-4 text-sm opacity-90">
              Dharti International Foundation is dedicated to creating positive social change through education, healthcare, and environmental initiatives.
            </p>
          </div>

          {/* 2️⃣ Office Address Section */}
          <div className="transition transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Office Address</h3>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaMapMarkerAlt /> B116 Damodar Hostel,JNU,New Delhi,INDIA (110067)
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2 mt-2">
              <FaPhoneAlt /> +91 97856 41782
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2 mt-2">
              <FaEnvelope /> rajkumar6777y@gmail.com
            </p>

            {/* Social Media Icons */}
            <div className="mt-6 flex justify-center md:justify-start space-x-4">
              <a href="https://www.youtube.com/channel/UCpblaL_wwjaa0SlODsaWtdw"
                 target="_blank"
                 rel="noopener noreferrer"
               className="text-2xl hover:text-red-700 transition transform hover:scale-110"><FaYoutube /></a>
              <a href="https://www.facebook.com/dhartifoundationofficial"
                 target="_blank"
                 rel="noopener noreferrer"
               className="text-2xl hover:text-blue-900 transition transform hover:scale-110"><FaFacebook /></a>
              
              <a href="https://x.com/rajkumar6777y"
                 target="_blank"
                 rel="noopener noreferrer"
               className="text-2xl hover:text-blue-700 transition transform hover:scale-110"><FaTwitter /></a>
              <a href="https://www.instagram.com/dharti.international/"
                 target="_blank"
                 rel="noopener noreferrer"
                  className="text-2xl hover:text-purple-600 transition transform hover:scale-110"><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/dharti-international/posts/?feedView=all" 
                 target="_blank"
                 rel="noopener noreferrer"
                  className="text-2xl hover:text-blue-900 transition transform hover:scale-110"><FaLinkedin /></a>
            </div>

          </div>

          {/* 3️⃣ Quick Links Section */}
          <div className="transition transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/projects" className="hover:underline">Projects</a></li>
              <li><a href="/donate" className="hover:underline">Donate</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* 4️⃣ Newsletter Subscription Section */}
          <div className="transition transform hover:scale-105">
          <Newsletter/>
            
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-6 text-center text-sm opacity-80">
          © {new Date().getFullYear()} Dharti International Foundation. All Rights Reserved.Created by @
          <a href="https://www.linkedin.com/in/rajkumaryogi-jnu/"
             target="_blank"
 className="hover:bg-red-900 text-yellow-400">
            YOGI
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
