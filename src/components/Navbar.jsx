import { motion } from "framer-motion";
import { useScrollSpy } from "../hooks/useScrollSpy";

const Navbar = () => {
  const activeSection = useScrollSpy(["home", "about", "projects", "contact"]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-12 md:h-16 px-4 sm:px-0">
          {/* Logo - Shows on both mobile and desktop */}
          <motion.div className="text-base font-bold text-white">
            Portfolio
          </motion.div>

          {/* Desktop Navigation - Only shows on desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className={`text-xs font-medium transition-colors duration-200 hover:text-white ${
                  activeSection === item.href.slice(1)
                    ? "text-white"
                    : "text-gray-300"
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
