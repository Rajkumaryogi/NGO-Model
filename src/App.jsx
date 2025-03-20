import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Navbar from "./pages/Xyz";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Projects from "./pages/Projects";
import Donate from "./pages/Donate"
import NotFound from "./pages/NotFound";
import JoinUs from "./components/JoinUs";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">  {/* Ensures content pushes footer down */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/donate" element={<Donate/>} />
          <Route path="/join" element={<JoinUs/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
