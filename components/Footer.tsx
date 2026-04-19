'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { href: 'https://github.com/tejass-06', label: 'GitHub', boxiconClass: 'bx bxl-github' },
    { href: 'https://www.linkedin.com/in/tejas-ingole-73585232b', label: 'LinkedIn', boxiconClass: 'bx bxl-linkedin' },
    { href: 'https://instagram.com', label: 'Instagram', boxiconClass: 'bx bxl-instagram' },
    { href: 'https://x.com/Tejass_i06', label: 'Twitter', boxiconClass: 'bx bxl-twitter' },
    { href: 'mailto:tejasingole912@gmail.com', label: 'Email', boxiconClass: 'bx bx-envelope' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-black dark:bg-black text-white py-12 px-4 border-t border-purple-500/30" data-aos="fade-in" data-aos-duration="800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Tejas Ingole
            </h3>
            <p className="text-gray-400 text-sm">
              B.Tech Student | Web Developer | IoT Enthusiast | Building innovative digital solutions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ x: 5 }}
                  className="block text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex flex-wrap items-center gap-4">
              {socialLinks.map((link) => {
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-purple-400 hover:bg-gray-700 transition-colors flex items-center justify-center"
                    title={link.label}
                  >
                    <i className={link.boxiconClass} style={{ fontSize: '20px' }}></i>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gray-800 mb-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm"
        >
          <p>
            &copy; 2024 Tejas Kailas Ingole. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart size={16} className="text-red-500" /> by Tejas
          </p>
          <p>
            Powered by Next.js, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
