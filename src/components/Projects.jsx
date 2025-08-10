import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { useEffect, useRef, useState } from "react";
import { projectData } from "../data/projectData";

const Projects = () => {
  const [ref, isInView] = useInView();
  const scrollRef = useRef(null);
  const [showGridView, setShowGridView] = useState(false);

  useEffect(() => {
    if (!isInView || !scrollRef.current) return;

    // Initialize project names with CSS transitions
    projectData.forEach((project, index) => {
      const nameElement = document.querySelector(`.project-name-${index}`);
      if (!nameElement) return;

      // Set initial state and CSS transition
      nameElement.style.transform = "translateX(-100%)";
      nameElement.style.opacity = "0";
      nameElement.style.transition =
        "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    });

    // Monitor scroll progress to trigger animations and show grid view
    const handleScroll = () => {
      const container = scrollRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollStart = -rect.top;
      const scrollEnd = container.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrollStart / scrollEnd));

      // Animate project names based on scroll progress (faster)
      const totalProjects = projectData.length;
      // Use less scroll space for faster animations
      const projectStep = 0.7 / totalProjects; // Use 70% of scroll for names, 30% for transition

      projectData.forEach((project, index) => {
        const nameElement = document.querySelector(`.project-name-${index}`);
        if (!nameElement) return;

        // Calculate individual project animation zones with faster timing
        const projectStart = index * projectStep;
        const projectEnd = (index + 1) * projectStep;

        if (progress >= projectStart && progress < projectEnd) {
          // Active project - show with faster, smooth animation
          const projectProgress =
            (progress - projectStart) / (projectEnd - projectStart);

          if (projectProgress <= 0.3) {
            // Entering phase (first 30% - faster entry)
            const enterProgress = projectProgress / 0.3;
            const easedProgress = 1 - Math.pow(1 - enterProgress, 2);
            const translateX = -100 + 100 * easedProgress;
            nameElement.style.transform = `translateX(${translateX}%)`;
            nameElement.style.opacity = easedProgress.toString();
            nameElement.style.zIndex = "10";
          } else if (projectProgress <= 0.7) {
            // Stable phase (middle 40% - visible for good duration)
            nameElement.style.transform = "translateX(0%)";
            nameElement.style.opacity = "1";
            nameElement.style.zIndex = "10";
          } else {
            // Exiting phase (last 30% - faster exit)
            const exitProgress = (projectProgress - 0.7) / 0.3;
            const easedProgress = Math.pow(exitProgress, 2);
            const translateX = 25 * easedProgress;
            const opacity = 1 - 0.5 * easedProgress;
            nameElement.style.transform = `translateX(${translateX}%)`;
            nameElement.style.opacity = opacity.toString();
            nameElement.style.zIndex = "5";
          }
        } else {
          // Inactive project - completely hidden
          nameElement.style.transform = "translateX(-100%)";
          nameElement.style.opacity = "0";
          nameElement.style.zIndex = "1";
        }
      });

      // Show grid view when scroll animation is complete
      if (progress > 0.85 && !showGridView) {
        setShowGridView(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isInView, showGridView]);

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

  const ProjectCard = ({ project, index }) => (
    <motion.div
      variants={itemVariants}
      className="rounded-xl overflow-hidden shadow-lg border border-gray-600/50 transition-all duration-300 h-[500px] flex flex-col"
      style={{
        background:
          "linear-gradient(145deg, rgba(0,0,0,0.4) 0%, rgba(26,26,26,0.4) 100%)",
        backdropFilter: "blur(10px)",
        boxShadow:
          "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)",
      }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-black/60 text-white rounded-full text-xs font-medium backdrop-blur-sm border border-white/40 shadow-lg">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3
          className="text-xl font-bold text-white mb-2 line-clamp-2"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          {project.title}
        </h3>

        <p
          className="text-sm text-gray-400 mb-3 font-medium"
          style={{ fontFamily: "JetBrains Mono, monospace" }}
        >
          {project.organization}
        </p>

        <p
          className="text-gray-400 mb-4 flex-grow text-sm leading-relaxed line-clamp-3"
          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
        >
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded-md text-xs border border-gray-700/50"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded-md text-xs border border-gray-700/50">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex space-x-4 mt-auto">
          <a
            href={project.github}
            className="flex items-center space-x-2 text-white text-sm transition-all duration-300 hover:text-gray-300 px-4 py-2 border border-white/30 rounded-lg hover:border-white/50 backdrop-blur-sm"
          >
            <Github size={16} />
            <span>View Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      id="projects"
      ref={ref}
      className="section-padding relative"
      style={{
        background:
          "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 25%, #1a1a1a 50%, #0a0a0a 75%, #000000 100%)",
      }}
    >
      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My Projects
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              experience in web development, AI/ML, and computer vision. Each
              project represents a unique challenge and solution.
            </p>
          </motion.div>

          {/* Scroll-Based Project Names Animation */}
          <div ref={scrollRef} className="min-h-[400vh] relative">
            <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center">
              {/* Project Names Container */}
              <div className="relative w-full h-full flex items-center justify-center">
                {projectData.map((project, index) => (
                  <h1
                    key={`name-${project.id}`}
                    className={`project-name-${index} absolute text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight tracking-tight`}
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      maxWidth: "85vw",
                      wordBreak: "break-word",
                      hyphens: "auto",
                      transform: "translateX(-100%)",
                      opacity: 0,
                      textShadow: "0 0 20px rgba(0, 0, 0, 0.8)",
                      backgroundColor: "transparent",
                      padding: "20px",
                      borderRadius: "10px",
                    }}
                  >
                    {project.title}
                  </h1>
                ))}
              </div>
            </div>
          </div>

          {/* Grid View */}
          {showGridView && (
            <div className="relative mt-32">
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold text-white mb-4">
                  All Projects
                </h3>
                <p className="text-gray-400">
                  Explore detailed information about each project
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {projectData.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
