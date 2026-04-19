'use client';

import { motion } from 'framer-motion';
import { Award, Calendar, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2.5, ease: 'easeInOut' },
  },
};

export default function Education() {
  const [isInView, setIsInView] = useState(false);

  const educationData = [
    {
      level: '1',
      degree: 'Primary Education',
      school: 'Z.P. Primary School',
      location: 'Talegaon',
      period: '2010 - 2015',
      standard: '1st - 4th',
      icon: '📚',
    },
    {
      level: '2',
      degree: 'Secondary Education',
      school: 'Pratap Highschool',
      location: 'Talegaon',
      period: '2015 - 2021',
      standard: '5th - 10th',
      icon: '📖',
    },
    {
      level: '3',
      degree: 'Senior Secondary',
      school: 'Chh. Shivaji Science',
      location: 'Darwha',
      period: '2021 - 2023',
      standard: '11th - 12th',
      icon: '🔬',
    },
    {
      level: '4',
      degree: 'B.Tech (Current)',
      school: 'SCET',
      location: 'Nagpur',
      period: '2024 - Present',
      standard: 'CS & DS',
      icon: '🎓',
    },
  ];

  return (
    <section id="education" className="py-8 px-4" data-aos="fade-in" data-aos-duration="800" style={{ background: '#0f0f0f' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Education Journey
          </h2>
          <div className="h-1 w-20 bg-purple-500 rounded-full" />
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
          onViewportEnter={() => setIsInView(true)}
        >
          {/* SVG Curved Path */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 1000 550"
            style={{ top: 0, left: 0 }}
          >
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
                <stop offset="33%" stopColor="rgba(168, 85, 247, 0.6)" />
                <stop offset="66%" stopColor="rgba(236, 72, 153, 0.6)" />
                <stop offset="100%" stopColor="rgba(34, 197, 94, 0.6)" />
              </linearGradient>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="rgba(168, 85, 247, 0.8)" />
              </marker>
            </defs>
            {/* Curvy S-shaped winding path - compact version */}
            <motion.path
              d="M 100 50 Q 300 90, 450 170 Q 550 230, 300 290 Q 100 350, 400 425 Q 650 500, 900 460"
              stroke="url(#curveGradient)"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
              markerEnd="url(#arrowhead)"
              initial={{ strokeDasharray: 1500, strokeDashoffset: 1500, opacity: 0 }}
              whileInView={{ strokeDashoffset: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 2.5, ease: 'easeInOut' }}
              viewport={{ once: true }}
            />
            {/* Connection lines from curve to cards */}
            <motion.line x1="100" y1="50" x2="100" y2="80" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="2" strokeDasharray="4" 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              transition={{ delay: 0.2, duration: 0.5 }} 
              viewport={{ once: true }} 
            />
            <motion.line x1="450" y1="170" x2="550" y2="170" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="2" strokeDasharray="4" 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              transition={{ delay: 0.5, duration: 0.5 }} 
              viewport={{ once: true }} 
            />
            <motion.line x1="300" y1="290" x2="100" y2="290" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="2" strokeDasharray="4" 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              transition={{ delay: 0.8, duration: 0.5 }} 
              viewport={{ once: true }} 
            />
            <motion.line x1="400" y1="425" x2="550" y2="425" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="2" strokeDasharray="4" 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              transition={{ delay: 1.1, duration: 0.5 }} 
              viewport={{ once: true }} 
            />
          </svg>

          {/* Education Cards - Aligned with curve */}
          <div className="relative" style={{ minHeight: '550px' }}>
            {/* Level 1 - Start of path */}
            <motion.div
              variants={itemVariants}
              custom={0}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group absolute w-56"
              style={{ top: '10px', left: 'calc(10% - 40px)' }}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                <div className={`w-7 h-7 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center border-2 border-gray-900 shadow-lg`}>
                  <span className="text-white text-xs font-bold">1</span>
                </div>
              </div>

              <div className={`relative h-32 flex flex-col justify-between p-3 rounded-xl border-2 border-gray-700/50 bg-gradient-to-br from-gray-800/40 to-gray-900/30 backdrop-blur-sm transition-all duration-300 group-hover:border-blue-500/60 group-hover:shadow-lg group-hover:shadow-blue-500/20 overflow-hidden`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-br from-blue-500 to-cyan-500" />
                
                <div className="relative z-10 space-y-1.5">
                  <div className="flex items-start justify-between">
                    <span className="text-xl">📚</span>
                    <Award size={12} className="text-blue-400 opacity-60" />
                  </div>
                  <h3 className="text-xs font-bold text-white leading-tight">{educationData[0].degree}</h3>
                  <p className="text-xs text-blue-300 font-semibold truncate">{educationData[0].school}</p>
                </div>

                <div className="relative z-10 space-y-1 border-t border-gray-700/30 pt-2">
                  <div className="flex items-center gap-1">
                    <MapPin size={10} className="text-gray-500 flex-shrink-0" />
                    <span className="text-xs text-gray-300">{educationData[0].location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={10} className="text-gray-500 flex-shrink-0" />
                    <span className="text-xs text-gray-300">{educationData[0].period}</span>
                  </div>
                  <div className="inline-block mt-1">
                    <span className="px-2 py-0.5 bg-blue-500/20 border border-blue-500/40 rounded text-blue-300 text-xs font-semibold">
                      {educationData[0].standard}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Level 2 - Curve right */}
            <motion.div
              variants={itemVariants}
              custom={1}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group absolute w-56"
              style={{ top: '150px', left: 'calc(45% - 112px)' }}
              transition={{ delay: 0.5 }}
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                <div className={`w-7 h-7 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center border-2 border-gray-900 shadow-lg`}>
                  <span className="text-white text-xs font-bold">2</span>
                </div>
              </div>

              <div className={`relative h-32 flex flex-col justify-between p-3 rounded-xl border-2 border-gray-700/50 bg-gradient-to-br from-gray-800/40 to-gray-900/30 backdrop-blur-sm transition-all duration-300 group-hover:border-purple-500/60 group-hover:shadow-lg group-hover:shadow-purple-500/20 overflow-hidden`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-br from-purple-500 to-pink-500" />
                
                <div className="relative z-10 space-y-1.5">
                  <div className="flex items-start justify-between">
                    <span className="text-xl">📖</span>
                    <Award size={12} className="text-purple-400 opacity-60" />
                  </div>
                  <h3 className="text-xs font-bold text-white leading-tight">{educationData[1].degree}</h3>
                  <p className="text-xs text-purple-300 font-semibold truncate">{educationData[1].school}</p>
                </div>

                <div className="relative z-10 space-y-1 border-t border-gray-700/30 pt-2">
                  <div className="flex items-center gap-1">
                    <MapPin size={10} className="text-gray-500 flex-shrink-0" />
                    <span className="text-xs text-gray-300">{educationData[1].location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={10} className="text-gray-500 flex-shrink-0" />
                    <span className="text-xs text-gray-300">{educationData[1].period}</span>
                  </div>
                  <div className="inline-block mt-1">
                    <span className="px-2 py-0.5 bg-purple-500/20 border border-purple-500/40 rounded text-purple-300 text-xs font-semibold">
                      {educationData[1].standard}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Level 3 - Curve left */}
            <motion.div
              variants={itemVariants}
              custom={2}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group absolute w-56"
              style={{ top: '290px', left: 'calc(30% - 112px)' }}
              transition={{ delay: 0.8 }}
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                <div className={`w-7 h-7 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center border-2 border-gray-900 shadow-lg`}>
                  <span className="text-white text-xs font-bold">3</span>
                </div>
              </div>

              <div className={`relative h-32 flex flex-col justify-between p-3 rounded-xl border-2 border-gray-700/50 bg-gradient-to-br from-gray-800/40 to-gray-900/30 backdrop-blur-sm transition-all duration-300 group-hover:border-pink-500/60 group-hover:shadow-lg group-hover:shadow-pink-500/20 overflow-hidden`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-br from-pink-500 to-red-500" />
                
                <div className="relative z-10 space-y-1.5">
                  <div className="flex items-start justify-between">
                    <span className="text-xl">🔬</span>
                    <Award size={12} className="text-pink-400 opacity-60" />
                  </div>
                  <h3 className="text-xs font-bold text-white leading-tight">{educationData[2].degree}</h3>
                  <p className="text-xs text-pink-300 font-semibold truncate">{educationData[2].school}</p>
                </div>

                <div className="relative z-10 space-y-1 border-t border-gray-700/30 pt-2">
                  <div className="flex items-center gap-1">
                    <MapPin size={10} className="text-gray-500 flex-shrink-0" />
                    <span className="text-xs text-gray-300">{educationData[2].location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={10} className="text-gray-500 flex-shrink-0" />
                    <span className="text-xs text-gray-300">{educationData[2].period}</span>
                  </div>
                  <div className="inline-block mt-1">
                    <span className="px-2 py-0.5 bg-pink-500/20 border border-pink-500/40 rounded text-pink-300 text-xs font-semibold">
                      {educationData[2].standard}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Level 4 - End of path */}
            <motion.div
              variants={itemVariants}
              custom={3}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group absolute w-56"
              style={{ top: '430px', right: 'calc(10% - 40px)' }}
              transition={{ delay: 1.1 }}
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                <div className={`w-7 h-7 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center border-2 border-gray-900 shadow-lg`}>
                  <span className="text-white text-xs font-bold">4</span>
                </div>
              </div>

              <div className={`relative h-32 flex flex-col justify-between p-3 rounded-xl border-2 border-gray-700/50 bg-gradient-to-br from-gray-800/40 to-gray-900/30 backdrop-blur-sm transition-all duration-300 group-hover:border-green-500/60 group-hover:shadow-lg group-hover:shadow-green-500/20 overflow-hidden`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-br from-green-500 to-emerald-500" />
                
                <div className="relative z-10 space-y-1.5">
                  <div className="flex items-start justify-between">
                    <span className="text-xl">🎓</span>
                    <Award size={12} className="text-green-400 opacity-60" />
                  </div>
                  <h3 className="text-xs font-bold text-white leading-tight">{educationData[3].degree}</h3>
                  <p className="text-xs text-green-300 font-semibold truncate">{educationData[3].school}</p>
                </div>

                <div className="relative z-10 space-y-1 border-t border-gray-700/30 pt-2">
                  <div className="flex items-center gap-1">
                    <MapPin size={10} className="text-gray-500 flex-shrink-0" />
                    <span className="text-xs text-gray-300">{educationData[3].location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={10} className="text-gray-500 flex-shrink-0" />
                    <span className="text-xs text-gray-300">{educationData[3].period}</span>
                  </div>
                  <div className="inline-block mt-1">
                    <span className="px-2 py-0.5 bg-green-500/20 border border-green-500/40 rounded text-green-300 text-xs font-semibold">
                      {educationData[3].standard}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-4 border-t border-gray-700/30"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
            <div>
              <p className="text-lg font-bold text-purple-400 mb-1">16+</p>
              <p className="text-gray-400 text-xs font-semibold">Years of Education</p>
            </div>
            <div>
              <p className="text-lg font-bold text-purple-400 mb-1">4</p>
              <p className="text-gray-400 text-xs font-semibold">Levels Complete</p>
            </div>
            <div>
              <p className="text-lg font-bold text-purple-400 mb-1">1 Path</p>
              <p className="text-gray-400 text-xs font-semibold">Continuous Journey</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
