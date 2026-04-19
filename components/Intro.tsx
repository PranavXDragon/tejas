'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface IntroProps {
  onComplete: () => void;
}

export default function Intro({ onComplete }: IntroProps) {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center z-50"
    >
      {/* Background animation */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-3xl"
        />
      </div>

      {/* Content */}
      <motion.div
        variants={itemVariants}
        className="relative z-10 text-center"
      >
        {/* Logo/Initials */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex justify-center"
        >
          <motion.div
            animate={{
              rotateY: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 2 }}
            className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center shadow-2xl"
          >
            <span className="text-6xl font-bold text-white">TJ</span>
          </motion.div>
        </motion.div>

        {/* Name */}
        <motion.div variants={itemVariants} className="mb-4">
          <div className="text-5xl md:text-6xl font-bold text-white flex justify-center gap-2">
            {['T', 'e', 'j', 'a', 's'].map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-blue-200 mb-8"
        >
          Full Stack Developer
        </motion.p>

        {/* Progress bar */}
        <motion.div
          variants={itemVariants}
          className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden"
        >
          <motion.div
            animate={{ scaleX: [0, 1] }}
            transition={{ duration: 2.5 }}
            className="h-full bg-gradient-to-r from-blue-400 to-purple-600 origin-left"
          />
        </motion.div>

        {/* Loading text */}
        <motion.p
          variants={itemVariants}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-6 text-blue-300 text-sm tracking-widest"
        >
          LOADING PORTFOLIO...
        </motion.p>
      </motion.div>

      {/* Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            opacity: [1, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.2,
          }}
          className="absolute w-2 h-2 bg-blue-400 rounded-full"
          style={{
            left: '50%',
            top: '50%',
          }}
        />
      ))}
    </motion.div>
  );
}
