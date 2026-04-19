'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, Target, Star } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: 'Hackathon Champion',
      description: 'Won 1st place in multiple state-level hackathons',
      year: '2023-2024',
    },
    {
      icon: Award,
      title: 'IoT Innovation Award',
      description: 'Recognition for innovative IoT project implementations',
      year: '2024',
    },
    {
      icon: Target,
      title: 'STP Coordinator',
      description: 'Mentored 100+ students in tech skills development',
      year: '2023-Present',
    },
    {
      icon: Star,
      title: 'Dean\'s List',
      description: 'Consistent academic excellence with high CGPA',
      year: '2022-2024',
    },
    {
      icon: Award,
      title: 'Technical Publication',
      description: 'Published research paper on IoT and Machine Learning',
      year: '2024',
    },
    {
      icon: Trophy,
      title: 'Coding Competitions',
      description: 'Ranked in top 10% in competitive programming contests',
      year: '2023-2024',
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4" data-aos="fade-in" data-aos-duration="800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Achievements & Recognitions
          </h2>
          <div className="h-1 w-20 bg-purple-500 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="p-6 rounded-xl bg-gray-800 dark:bg-gray-800 border-3 border-purple-500 shadow-xl shadow-purple-500/15 hover:shadow-2xl hover:shadow-purple-500/30 transition-all relative z-10"
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon size={32} className="text-purple-400" />
                  <span className="text-xs font-semibold bg-purple-900/50 dark:bg-purple-900/70 text-purple-300 dark:text-purple-200 px-3 py-1 rounded-full">
                    {achievement.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 text-white dark:text-white">{achievement.title}</h3>
                <p className="text-sm text-gray-300 dark:text-gray-400">{achievement.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional sections info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gray-800 dark:bg-gray-800 rounded-xl text-center border-3 border-purple-500 shadow-xl shadow-purple-500/15 relative z-10"
        >
          <h3 className="text-2xl font-bold text-white dark:text-white mb-2">
            📚 Participation & Certifications
          </h3>
          <p className="text-gray-300 dark:text-gray-400 mb-4">
            Active participant in tech conferences, workshops, and webinars. Completed certifications in cloud computing, full-stack development, and IoT systems.
          </p>
          <div className="inline-block px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-500 transition-colors cursor-pointer">
            View All Details
          </div>
        </motion.div>
      </div>
    </section>
  );
}
