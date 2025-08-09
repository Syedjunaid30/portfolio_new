import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ChevronLeft, ChevronRight } from "lucide-react";
import { projectsData } from "../data/projectsData";

const ProjectShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + projectsData.length) % projectsData.length
    );
  };

  const ProjectCard = ({ project, index }) => (
    <motion.div
      variants={itemVariants}
      className="w-[520px] h-[520px] rounded-2xl overflow-hidden shadow-lg border-2 border-black flex-shrink-0"
      style={{
        background: "#000", // Solid black card
      }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
          {project.title}
        </h3>

        {/* Organization */}
        <p className="text-cyan-400 text-sm font-medium mb-3">
          {project.organization}
        </p>

        {/* Description */}
        <div className="bg-black rounded-lg p-3 mb-4">
          <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* GitHub Button */}
        <div className="flex justify-center">
          <motion.a
            href={project.githubLink}
            className="inline-flex items-center space-x-2 bg-cyan-600 text-white font-medium px-6 py-3 rounded-lg text-sm"
          >
            <Github size={16} />
            <span>GitHub</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-800 to-black">
      <section
        id="projects"
        className="section-padding"
        style={{
          background: "linear-gradient(135deg, #303030ff 0%, #000000 100%)",
        }}
      >
        <div className="container-custom">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-4 min-h-[3rem] md:min-h-[4rem]">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Explore my latest work and innovations in AI/ML, web development,
              and computer vision.
            </p>
          </motion.div>

          {/* Project Showcase with Navigation */}
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              className="absolute left-4 md:-left-16 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-black border border-gray-700 rounded-full flex items-center justify-center text-white shadow-lg shadow-black/40"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={nextProject}
              className="absolute right-4 md:-right-16 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-black border border-gray-700 rounded-full flex items-center justify-center text-white shadow-lg shadow-black/40"
            >
              <ChevronRight size={18} />
            </button>

            {/* Projects Container */}
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {projectsData.map((project, index) => (
                  <div
                    key={project.id}
                    className="w-full flex-shrink-0 flex justify-center"
                  >
                    <ProjectCard project={project} index={index} />
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="flex justify-center mt-8 space-x-3">
              {projectsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-cyan-400 scale-125"
                      : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <nav className="bg-black text-white shadow-lg shadow-black/40">
        {/* ...existing code... */}
      </nav>
      <footer className="bg-black text-gray-300 shadow-lg shadow-black/40">
        {/* ...existing code... */}
      </footer>
    </div>
  );
};

export default ProjectShowcase;
