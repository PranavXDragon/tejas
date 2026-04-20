'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate minimum loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    // Also hide when the page fully loads
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated Background Orbs */}
          <motion.div
            className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 50, -50, 0],
              y: [0, -50, 50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 50, 0],
              y: [0, 50, -50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: 1,
            }}
          />

          {/* Main Logo Container */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            {/* Logo with rotation */}
            <motion.div
              className="relative"
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <motion.img
                src="/tejasslogo.jpeg"
                alt="Tejas Logo"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-2xl shadow-purple-500/50"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(168, 85, 247, 0.5)',
                    '0 0 40px rgba(168, 85, 247, 0.8)',
                    '0 0 20px rgba(168, 85, 247, 0.5)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              {/* Rotating ring around logo */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-purple-500 border-r-pink-500"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                style={{
                  width: '140px',
                  height: '140px',
                  top: '-8px',
                  left: '-8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            </motion.div>

            {/* Loading text */}
            <motion.div
              className="flex flex-col items-center gap-3"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Tejas Ingole
              </h1>
              <p className="text-sm text-gray-400 tracking-widest">LOADING PORTFOLIO</p>
            </motion.div>

            {/* Animated progress dots */}
            <motion.div className="flex gap-2 mt-4">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Bottom gradient line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
            animate={{
              scaleX: [0, 1],
              opacity: [0, 1],
            }}
            transition={{
              duration: 2,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
