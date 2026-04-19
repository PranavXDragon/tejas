'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const themes = ['light', 'dark', 'gradient', 'neon'];

  return (
    <div className="flex items-center gap-2">
      {themes.map((t) => (
        <motion.button
          key={t}
          onClick={() => setTheme(t)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`p-2 rounded-lg transition-all ${
            theme === t
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
          title={t}
        >
          {t === 'light' && <Sun size={18} />}
          {t === 'dark' && <Moon size={18} />}
          {t === 'gradient' && <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded" />}
          {t === 'neon' && <div className="w-4 h-4 bg-cyan-500 rounded" />}
        </motion.button>
      ))}
    </div>
  );
}
