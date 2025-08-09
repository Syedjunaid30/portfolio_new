import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Projects = () => {
  const [ref, isInView] = useInView();

  const projects = [
    {
      id: 1,
      title: 'Online Voting System',
      description: 'A secure, web-based voting platform integrated with face recognition to ensure one-time vote casting. Includes an admin panel and real-time result dashboard.',
      image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=500&h=300&fit=crop',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Python Flask', 'MySQL'],
      github: '#',
      live: '#',
      featured: true,
      category: 'Internship Project',
      organization: 'CDAC Bengaluru, Electronic City',
    },
    {
      id: 2,
      title: 'Video Dubbing with ML-driven Lip Synchronization',
      description: 'An AI-powered tool for dubbing videos into different languages with accurate lip-syncing using deep learning. Integrates Wav2Lip and voice synthesis for realistic results.',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=300&fit=crop',
      technologies: ['Python', 'Flask', 'Deep Learning', 'Wav2Lip', 'HTML/CSS'],
      github: '#',
      live: '#',
      featured: true,
      category: 'Academic Project',
      organization: 'Final Year Major Project',
    },
    {
      id: 3,
      title: 'Air Canvas',
      description: 'Draw in the air using hand gestures detected via webcam in real-time using OpenCV and Mediapipe. An innovative approach to digital drawing without physical contact.',
      image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=500&h=300&fit=crop',
      technologies: ['Python', 'OpenCV', 'Mediapipe'],
      github: '#',
      live: '#',
      featured: false,
      category: 'Mini Project',
      organization: 'Presentation',
    },
    {
      id: 4,
      title: 'AI-Driven NLP to SQL Query and Visualization',
      description: 'An intelligent system that converts natural language queries into SQL commands and provides data visualization. Bridges the gap between non-technical users and database querying.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      technologies: ['Python', 'NLP', 'SQL', 'Data Visualization', 'Machine Learning'],
      github: '#',
      live: '#',
      featured: false,
      category: 'Hackathon Project',
      organization: 'Competition Entry',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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
      className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-lg shadow-cyan-500/20 border border-gray-800 transition-all duration-300 h-[600px] flex flex-col"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden h-48 flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.a
            href={project.github}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white transition-colors"
            aria-label="View Source Code"
          >
            <Github size={20} />
          </motion.a>
        </div>
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-cyan-400 bg-cyan-900/20 px-2 py-1 rounded-full">
            {project.category}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
          {project.title}
        </h3>

        <p className="text-sm text-gray-400 mb-3 font-medium">
          {project.organization}
        </p>

        <p className="text-gray-400 mb-4 flex-grow text-sm leading-relaxed line-clamp-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex space-x-4 mt-auto">
          <motion.a
            href={project.github}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-cyan-400 transition-colors"
          >
            <Github size={16} />
            <span>View Code</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" ref={ref} className="section-padding bg-black">
      <div className="container-custom">
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
              Here are some of my recent projects that showcase my skills and experience
              in web development. Each project represents a unique challenge and solution.
            </p>
          </motion.div>

          {/* Projects Grid - All Same Size */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;