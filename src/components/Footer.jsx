import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Syedjunaid30', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/syedjunaid21', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:junaid68555@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <motion.h3
              className="text-2xl font-bold text-white mb-4"
            >
              Syed Junaid
            </motion.h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Full Stack Developer passionate about creating beautiful,
              functional, and user-friendly applications that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-all duration-200"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 transition-colors duration-200"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-3 text-gray-400">
              <p>Bengaluru, India</p>
              <p>junaid68555@gmail.com</p>
              <p>+91 8431102124</p>
            </div>
            <motion.button
              onClick={() => scrollToSection('#contact')}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 border border-gray-600/50 shadow-lg shadow-black/50 px-6 py-2 rounded-lg transition-all duration-200"
            >
              Let's Work Together
            </motion.button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-900 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>© 2024 Syed Junaid. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart size={16} className="text-red-500 fill-current" />
              </motion.div>
              <span>and React</span>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 text-gray-400 transition-colors duration-200"
            >
              <span>Back to Top</span>
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;