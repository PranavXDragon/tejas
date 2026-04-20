'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 3.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, x: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { delay: 3.3, duration: 0.8 },
  },
};

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const AOS = require('aos');
      AOS.refresh();
    }
  }, []);

  return (
    <motion.div
      ref={heroRef}
      className="main"
      id="home"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 3.3, duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Image Section */}
      <motion.div
        className="img-term"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="men-container">
          <img 
            src="/profile.jpeg" 
            alt="Tejas Ingole"
            className="men"
          />
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="main-detail"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p variants={itemVariants}>
          Hello I'm
        </motion.p>
        <motion.h1 variants={itemVariants}>
          Tejas Ingole
        </motion.h1>
        <motion.h4 variants={itemVariants}>
          Full Stack Developer & IoT Enthusiast
        </motion.h4>

        {/* Buttons */}
        <motion.div className="btn" variants={itemVariants}>
          <button
            className="btn-2"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Hire me
          </button>
        </motion.div>

        {/* Social Icons */}
        <motion.div 
          className="social" 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            variants={itemVariants}
          >
            <i className="bx bxl-github"></i>
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            variants={itemVariants}
          >
            <i className="bx bxl-linkedin"></i>
          </motion.a>
          <motion.a
            href="mailto:tejas@example.com"
            aria-label="Email"
            variants={itemVariants}
          >
            <i className="bx bx-envelope"></i>
          </motion.a>
          <motion.a
            href="https://wa.me/917410127039"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            variants={itemVariants}
          >
            <i className="bx bxl-whatsapp"></i>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
