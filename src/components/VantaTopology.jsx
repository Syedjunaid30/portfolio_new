import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import TOPOLOGY from "vanta/dist/vanta.topology.min";

const VantaTopology = ({ children, className = "" }) => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Skip Vanta initialization on mobile devices
    if (isMobile) {
      return;
    }

    const initVanta = () => {
      if (vantaRef.current && window.VANTA && !vantaEffect.current) {
        vantaEffect.current = window.VANTA.TOPOLOGY({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 0.7,
          color: 0x802c8c,
          backgroundColor: 0xe0022,
          maxDistance: 25,
          spacing: 15,
          points: 12,
          showDots: true,
        });
      }
    };

    // Check if Vanta is loaded, if not wait and try again
    if (window.VANTA) {
      initVanta();
    } else {
      const checkVanta = setInterval(() => {
        if (window.VANTA) {
          initVanta();
          clearInterval(checkVanta);
        }
      }, 100);

      return () => clearInterval(checkVanta);
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [isMobile]);

  return (
    <div
      ref={!isMobile ? vantaRef : null}
      className={`w-full h-screen relative ${className}`}
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        // Fallback gradient background for mobile
        ...(isMobile && {
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
        }),
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default VantaTopology;
