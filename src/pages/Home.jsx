import React from "react";
import HeroSection from "../components/HeroSection";
import ImpactStats2 from "../components/ImpactStats2";
import MissionVision from "../components/MissionVision";
import FeaturedProjects from "../components/FeaturedProjects2";
import Testimonials from "../components/Testimonials";
import GetInvolved from "../components/GetInvolved";


const Home = () => {
  return (
    <div className="px-1">
      <HeroSection />
      <ImpactStats2 />
      <MissionVision />
      <FeaturedProjects />
      <Testimonials />
      <GetInvolved />
    </div>
  );
};

export default Home;
