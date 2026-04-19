'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function About() {
  return (
    <section id="about" className="py-20 px-4" data-aos="fade-in" data-aos-duration="800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* About Text */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                I&apos;m a results-driven B.Tech student specializing in <span className="font-semibold text-purple-400">Computer Science and Data Science</span> from Suryodaya College of Engineering & Technology, Nagpur. With a strong foundation in full-stack development and IoT systems, I create innovative digital solutions that bridge the gap between technology and real-world needs.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed font-light">
                In my role as <span className="font-semibold text-purple-400">STP Coordinator</span>, I mentor students and lead technical initiatives. My expertise spans full-stack web development, IoT architecture, and data-driven applications, with a commitment to staying at the forefront of emerging technologies.
              </p>

              <div className="pt-4">
                <p className="text-sm text-gray-400 font-semibold mb-3">CORE EXPERTISE</p>
                <div className="flex flex-wrap gap-2">
                  {['Web Development', 'IoT Systems', 'Data Analysis', 'Backend Architecture', 'Leadership'].map((skill) => (
                    <span key={skill} className="px-3 py-1 text-sm bg-purple-500/10 border border-purple-500/30 text-purple-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20 backdrop-blur-sm">
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-sm text-gray-400 mt-1">Dedicated to Quality</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20 backdrop-blur-sm">
                <p className="text-3xl font-bold text-white">5+</p>
                <p className="text-sm text-gray-400 mt-1">Projects Completed</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-500/20 backdrop-blur-sm">
                <p className="text-3xl font-bold text-white">3+</p>
                <p className="text-sm text-gray-400 mt-1">Years Experience</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Facts Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Facts</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-gray-900 dark:bg-gray-900 rounded-lg border-2 border-purple-500/50 shadow-lg shadow-purple-500/10 relative z-10 hover:border-purple-500 hover:shadow-purple-500/20 transition-all">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-2">College</p>
                <p className="font-semibold text-white text-sm">SCET, Nagpur</p>
              </div>
              <div className="p-4 bg-gray-900 dark:bg-gray-900 rounded-lg border-2 border-purple-500/50 shadow-lg shadow-purple-500/10 relative z-10 hover:border-purple-500 hover:shadow-purple-500/20 transition-all">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-2">Degree</p>
                <p className="font-semibold text-white text-sm">B.Tech CSE (DS)</p>
              </div>
              <div className="p-4 bg-gray-900 dark:bg-gray-900 rounded-lg border-2 border-purple-500/50 shadow-lg shadow-purple-500/10 relative z-10 hover:border-purple-500 hover:shadow-purple-500/20 transition-all">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-2">Location</p>
                <p className="font-semibold text-white text-sm">Nagpur, India</p>
              </div>
              <div className="p-4 bg-gray-900 dark:bg-gray-900 rounded-lg border-2 border-purple-500/50 shadow-lg shadow-purple-500/10 relative z-10 hover:border-purple-500 hover:shadow-purple-500/20 transition-all">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-2">Focus</p>
                <p className="font-semibold text-white text-sm">Web & IoT</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
