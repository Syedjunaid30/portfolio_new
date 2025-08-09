import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Model3D = () => {
  const modelRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (modelRef.current) {
        const rect = modelRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        
        modelRef.current.style.transform = `
          perspective(1000px) 
          rotateY(${x * 20}deg) 
          rotateX(${-y * 20}deg)
        `;
      }
    };

    const element = modelRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      return () => element.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <motion.div
      ref={modelRef}
      className="relative w-64 h-64 mx-auto mb-8"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* 3D Cube */}
      <div className="relative w-full h-full transform-gpu transition-transform duration-300 ease-out">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-2xl border border-primary-400/30 shadow-2xl shadow-primary-500/20">
          {/* Front Face */}
          <div className="absolute inset-4 bg-gradient-to-br from-primary-600/10 to-purple-600/10 rounded-xl border border-primary-400/20 flex items-center justify-center">
            <div className="text-6xl font-bold text-primary-400 opacity-80">
              &lt;/&gt;
            </div>
          </div>
          
          {/* Floating Elements */}
          <motion.div
            className="absolute top-4 right-4 w-3 h-3 bg-primary-400 rounded-full"
            animate={{
              y: [-10, 10, -10],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400 rounded-full"
            animate={{
              y: [10, -10, 10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          
          <motion.div
            className="absolute top-1/2 left-2 w-1 h-8 bg-gradient-to-b from-primary-400/50 to-transparent rounded-full"
            animate={{
              scaleY: [0.5, 1.2, 0.5],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 rounded-2xl blur-xl"></div>
      </div>
      
      {/* Base Shadow */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-primary-500/10 rounded-full blur-lg"></div>
    </motion.div>
  );
};

export default Model3D;