'use client';

import { motion } from 'framer-motion';
import { GitBranch, ExternalLink, Code2 } from 'lucide-react';

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

export default function Projects() {
  const projects = [
    {
      title: 'QuickBlood - Blood Donation Platform',
      description:
        'An online platform connecting blood donors with recipients. Built with Next.js, MongoDB, and real-time notifications. Includes donor verification and emergency requests.',
      tech: ['Next.js', 'MongoDB', 'Node.js', 'Socket.io'],
      github: 'https://github.com/tejass-06',
      live: '#',
      image: '/quickblood.jpg',
      highlights: ['Real-time matching', 'Donor verification', 'Emergency alerts'],
    },
    {
      title: 'Bird Detection System - IoT',
      description:
        'Smart IoT system to detect and monitor birds in agricultural fields. Uses machine learning for bird detection and alerts farmers to prevent crop damage.',
      tech: ['Python', 'Arduino', 'TensorFlow', 'IoT'],
      github: 'https://github.com/tejass-06',
      live: '#',
      image: '/birddetection.jpg',
      highlights: ['ML detection', 'Real-time alerts', 'Remote monitoring'],
    },
    {
      title: 'Smart Home Automation - IoT',
      description:
        'Smart home system controlling appliances remotely. Features scheduling, voice control integration, and energy monitoring.',
      tech: ['Arduino', 'MQTT', 'React', 'Node.js'],
      github: 'https://github.com/tejass-06',
      live: '#',
      image: '/homeappliances.jpg',
      highlights: ['Voice control', 'Scheduling', 'Energy saving'],
    },
    {
      title: 'AI Chat Application',
      description:
        'Intelligent chat application powered by AI with natural language processing. Features real-time messaging, user authentication, and conversation history.',
      tech: ['Next.js', 'TypeScript', 'OpenAI API', 'Firebase'],
      github: 'https://github.com/tejass-06',
      live: '#',
      image: '/quickblood.jpg',
      highlights: ['AI-powered', 'Real-time chat', 'User analytics'],
    },
  ];

  return (
    <section id="projects" className="py-8 px-4 bg-black" data-aos="fade-in" data-aos-duration="800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gray-800 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl border-2 border-purple-500 transition-all hover:shadow-purple-500/30 hover:border-pink-500 relative z-10 flex flex-col"
            >
              {/* Image */}
              <div className="h-20 w-full overflow-hidden">
                <motion.img 
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.05 }}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-3 flex-1 flex flex-col">
                <h3 className="text-base font-bold text-white dark:text-white mb-1">
                  {project.title}
                </h3>

                <p className="text-xs text-gray-300 dark:text-gray-400 leading-tight mb-2 flex-1">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1 mb-1">
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-2 py-0.5 bg-purple-900 dark:bg-purple-900/50 text-purple-300 dark:text-purple-300 text-xs rounded-full"
                    >
                      ✨ {highlight}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mb-2">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-gray-700 dark:bg-gray-600 text-gray-200 dark:text-gray-200 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-2">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 bg-purple-600 dark:bg-purple-700 text-white rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors shadow-lg shadow-purple-500/25 text-xs font-semibold"
                  >
                    <GitBranch size={14} />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-900/20 transition-colors text-xs font-semibold"
                  >
                    <ExternalLink size={14} />
                    Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
