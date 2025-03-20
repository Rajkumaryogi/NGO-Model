import React, { useState } from "react";
import Logo from "../assets/DFlogo.ico";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (index) => setOpenDropdown(openDropdown === index ? null : index);
  const closeMenu = () => setIsMenuOpen(false);

  // Navigation items with dropdown options
  const navItems = [
    { title: "Home", path: "/home", links: ["Volunteer", "Admin"] },
    { title: "About", path: "/about", links: ["About1", "About2"] },
    { title: "Services", path: "/services", links: ["Service1", "Service2","Service3"] },
    { title: "Projects", path: "/projects", links: ["Project1", "Project2"] },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-green-400 shadow-md w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="h-14 w-14 object-contain" />
            <div className="flex flex-col">
              <Link to="/" className="text-l font-bold text-black hover:text-gray-300 transition">
                Dharti International Foundation
              </Link>
              <div className="text-sm text-black font-bold flex gap-1">
                <span>Ecology</span> • <span>Economy</span> • <span>Environment</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex space-x-6 text-black">
            {navItems.map((item, index) => (
              <div key={index} className="relative group mt-2">
                {/* Main Navigation Link */}
                <Link to={item.path} className="text-black hover:text-gray-200 py-2 px-4">
                  {item.title}
                </Link>
                
                {/* Dropdown menu - Shows only if there are links */}
                {item.links.length > 0 && (
                  <div className="mt-2 absolute left-0  w-40 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-90 transition-opacity">
                    {item.links.map((link, idx) => (
                      <a key={idx} href="/" className=" block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        {link}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/donate" className="bg-yellow-400 text-black py-2 px-4 rounded-lg hover:bg-yellow-600 transition">
              Donate
            </Link>
            <Link to="/contact" className="text-black hover:text-gray-200 py-2 px-4">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMenu}></div>}
      <div className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-r from-blue-500 to-green-400 shadow-lg transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-200 ease-in-out z-50`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-black">✕</button>
        </div>
        <div className="flex flex-col space-y-2 px-4">
          {navItems.map((item, index) => (
            <div key={index}>
              {/* Main Mobile Navigation Link */}
              <Link to={item.path} className="block text-black py-2 hover:bg-green-200 rounded-md" onClick={closeMenu}>
                {item.title}
                
              </Link>

              {/* Dropdown in Mobile */}
              {item.links.length > 0 && (
                <button onClick={() => toggleDropdown(index)} className="w-full py-1 text-black hover:bg-green-300 rounded-md flex justify-between">
                  {/* <span>More</span> */}
                  <span>{openDropdown === index ? "▲" : "▼"}</span>
                  {openDropdown === index && (
                <div className="pl-4">
                  {item.links.map((link, idx) => (
                    <a key={idx} href="#" className="block text-gray-800 py-1 hover:bg-green-200 rounded-md">
                      {link}
                    </a>
                  ))}
                </div>
              )}
                </button>
              )}

              
            </div>
          ))}
          <Link to="/donate" className="bg-yellow-400 text-black py-2 px-4 rounded-lg hover:bg-yellow-600 transition text-center" onClick={closeMenu}>
            Donate
          </Link>
          <Link to="/contact" className="text-black hover:text-gray-200 py-2 px-4 text-center" onClick={closeMenu}>
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
