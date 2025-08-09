import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import myPhoto from '../assets/profile.jpeg';

const About = () => {
  const [ref, isInView] = useInView();

  const skills = [
    {
      category: 'Frontend',
      icon: Globe,
      items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'Backend',
      icon: Database,
      items: ['Python', 'Flask', 'MySQL', 'SQL', 'REST APIs'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      category: 'AI/ML',
      icon: Smartphone,
      items: ['Deep Learning', 'OpenCV', 'Mediapipe', 'NLP', 'Wav2Lip'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      category: 'Tools',
      icon: Code,
      items: ['Git', 'VS Code', 'Jupyter', 'Python IDEs', 'Data Visualization'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  const experience = [
    {
      title: 'Software Development Intern',
      company: 'CDAC Bengaluru, Electronic City',
      period: '2024',
      description: 'Developed a secure online voting system with face recognition technology. Implemented real-time result dashboard and admin panel using Python Flask and MySQL.',
    },
    {
      title: 'Final Year Project',
      company: 'Academic Institution',
      period: '2024',
      description: 'Created an AI-powered video dubbing system with lip synchronization using deep learning. Integrated Wav2Lip technology for realistic dubbing results.',
    },
    {
      title: 'Computer Science Student',
      company: 'University/College',
      period: '2021 - 2024',
      description: 'Focused on AI/ML, web development, and computer vision. Completed multiple projects including hand tracking systems and NLP-to-SQL conversion tools.',
    },
  ];

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

  return (
    <section id="about" ref={ref} className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              I'm a passionate computer science student specializing in AI/ML and full-stack development.
              I love creating innovative solutions that bridge the gap between artificial intelligence
              and practical applications.
            </p>
          </motion.div>

          {/* Bio Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">
                  My Journey
                </h3>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Started my journey in computer science with a focus on AI/ML and web development.
                    Discovered my passion for creating intelligent applications that solve real-world problems.
                  </p>
                  <p>
                    Through internships and academic projects, I've gained hands-on experience in
                    developing secure web applications, AI-powered systems, and computer vision solutions.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new AI technologies,
                    working on innovative projects, or learning about the latest developments in machine learning.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-64 md:h-80 bg-black flex items-center justify-center">
                  <img src={myPhoto} alt="Profile" className="max-h-full w-auto object-contain rounded-2xl border border-gray-800 shadow-2xl shadow-black/20" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-semibold text-white text-center mb-12">
              Skills & Technologies
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  variants={itemVariants}
                  className="bg-gray-900 rounded-xl p-6 text-center border border-gray-800 shadow-lg shadow-cyan-500/10"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center`}>
                    <skill.icon size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {skill.category}
                  </h4>
                  <div className="space-y-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="inline-block bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-semibold text-white text-center mb-12">
              Experience
            </h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-900 rounded-xl p-6 border-l-4 border-cyan-400 border border-gray-800 shadow-lg shadow-cyan-500/10"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-semibold text-white">
                      {exp.title}
                    </h4>
                    <span className="text-primary-400 font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary-400 font-medium mb-3">
                    {exp.company}
                  </p>
                  <p className="text-gray-400">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;