import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { useTypewriter } from "../hooks/useTypewriter";
import VantaTopology from "./VantaTopology";

const Home = () => {
  const [ref, isInView] = useInView();
  const { displayText, isComplete } = useTypewriter(
    "AI/ML Developer & Full Stack Engineer",
    100,
    1000
  );

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

  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <VantaTopology className="section-padding">
      <section
        id="home"
        ref={ref}
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="container-custom relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center"
          >
            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 mb-4 font-mono tracking-wider"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-normal"
              style={{
                fontFamily: "Inter, system-ui, -apple-system, sans-serif",
              }}
            >
              Syed Junaid
            </motion.h1>

            {/* Animated Title */}
            <motion.div variants={itemVariants} className="mb-8">
              <motion.h2
                className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 min-h-[3rem] md:min-h-[4rem] tracking-wide"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {displayText}
                {!isComplete && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="text-cyan-400"
                  >
                    |
                  </motion.span>
                )}
              </motion.h2>
              <p
                className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                I create innovative AI-powered applications and secure web
                solutions. Passionate about machine learning, computer vision,
                and modern web technologies.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-3 rounded-lg bg-black/40 backdrop-blur-sm text-white font-medium hover:bg-black/60 transition-all duration-300 border border-gray-600/50 shadow-lg shadow-black/50"
              >
                View My Work
              </motion.button>
              <motion.a
                href="/resume.pdf"
                download="Syed_Junaid_Resume.pdf"
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg bg-black/40 backdrop-blur-sm text-white font-medium hover:bg-black/60 transition-all duration-300 border border-gray-600/50 shadow-lg shadow-black/50 flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </motion.a>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-3 rounded-lg bg-black/40 backdrop-blur-sm text-white font-medium hover:bg-black/60 transition-all duration-300 border border-gray-600/50 shadow-lg shadow-black/50"
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center space-x-6 mb-12"
            >
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-black/40 backdrop-blur-sm shadow-lg shadow-black/50 text-gray-300 hover:text-white hover:bg-black/60 transition-all duration-300 border border-gray-600/50"
                  aria-label={label}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.button
              variants={itemVariants}
              onClick={scrollToAbout}
              className="animate-bounce"
            >
              <ChevronDown size={32} className="text-gray-400" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </VantaTopology>
  );
};

export default Home;
