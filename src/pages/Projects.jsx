import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectCarousel from "../components/ProjectCarousel";
import ProjectDetailsModal from "../components/ProjectDetailsModal";
import GetInvolved from "../components/GetInvolved";

// Project categories
const categories = ["All", "Healthcare", "Education", "Environment", "Blood Donation", "Legal Aid", "Social Welfare"];

// Sample projects
const projects = [
  { title: "Free Health Checkup Camp", category: "Healthcare", description: "Providing medical assistance to 500+ people.", image: "https://source.unsplash.com/400x250/?healthcare" },
  { title: "Tree Plantation Drive", category: "Environment", description: "Planted 10,000+ trees to combat deforestation.", image: "https://source.unsplash.com/400x250/?trees" },
  { title: "Blood Donation Camp", category: "Blood Donation", description: "Encouraging voluntary blood donations to save lives.", image: "https://source.unsplash.com/400x250/?blood" },
  { title: "Legal Aid Awareness", category: "Legal Aid", description: "Educating people about their legal rights and responsibilities.", image: "https://source.unsplash.com/400x250/?law" },
  { title: "Education for Underprivileged", category: "Education", description: "Providing free education & books to children.", image: "https://source.unsplash.com/400x250/?education" },
  { title: "Social Welfare", category: "Social Welfare", description: "Providing free education & books to children.", image: "https://source.unsplash.com/400x250/?education" },
  
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects when category changes
  useEffect(() => {
    setFilteredProjects(selectedCategory === "All" ? projects : projects.filter(p => p.category === selectedCategory));
  }, [selectedCategory]);

  return (
    <section className=" mt-8 w-full min-h-screen bg-gradient-to-r from-blue-600 to-green-500 text-white  pt-16 pb-1">
      <h2 className="text-5xl font-extrabold text-center mb-12 animate-fadeIn text-yellow-400">Our Projects</h2>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg transition-all ${selectedCategory === category ? "bg-yellow-400 text-black font-bold" : "bg-white bg-opacity-20 hover:bg-opacity-40"}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>


      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            isHovered={hoverIndex === index}
            onClick={() => setSelectedProject(project)}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          />
        ))}
      </div>
      {/* Featured Projects Carousel */}
      <ProjectCarousel projects={projects} />

      {/* Project Details Modal */}
      <ProjectDetailsModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <div className="w-full my-10 py-6 bg-gradient-to-r from-blue-800 to-green-500 text-white text-center border rounded-lg">
      <GetInvolved/>
      </div>
    </section>
  );
};

export default Projects;
