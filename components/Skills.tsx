'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const skills = [
    { 
      name: 'CSS3', 
      icon: 'bx bxl-css3',
      description: 'Mastered modern CSS3 with Tailwind CSS',
      learned: 'Self-taught through projects and online resources',
      since: '2022',
      proficiency: 'Advanced',
      projects: 'Portfolio website, Responsive designs'
    },
    { 
      name: 'JavaScript', 
      icon: 'bx bxl-javascript',
      description: 'Core JavaScript with ES6+ features',
      learned: 'Online courses and hands-on projects',
      since: '2021',
      proficiency: 'Expert',
      projects: 'Web applications, Interactive features'
    },
    { 
      name: 'TypeScript', 
      icon: 'bx bxl-typescript',
      description: 'Type-safe JavaScript development',
      learned: 'Through Next.js projects and documentation',
      since: '2023',
      proficiency: 'Advanced',
      projects: 'Large-scale applications, Type safety'
    },
    { 
      name: 'React', 
      icon: 'bx bxl-react',
      description: 'Component-based UI library',
      learned: 'Udemy courses and open-source contributions',
      since: '2022',
      proficiency: 'Expert',
      projects: 'QuickBlood, Portfolio apps'
    },
    { 
      name: 'Next.js', 
      icon: 'bx bxl-nodejs',
      description: 'Full-stack React framework',
      learned: 'Official documentation and real-world projects',
      since: '2023',
      proficiency: 'Advanced',
      projects: 'This portfolio, Production apps'
    },
    { 
      name: 'Node.js', 
      icon: 'bx bxl-nodejs',
      description: 'Backend JavaScript runtime',
      learned: 'YouTube tutorials and API development',
      since: '2022',
      proficiency: 'Advanced',
      projects: 'REST APIs, Express servers'
    },
    { 
      name: 'PostgreSQL', 
      icon: 'bx bxl-postgresql',
      description: 'Advanced relational database',
      learned: 'Database design courses',
      since: '2023',
      proficiency: 'Intermediate',
      projects: 'Data modeling, Complex queries'
    },
    { 
      name: 'Git', 
      icon: 'bx bxl-git',
      description: 'Version control system',
      learned: 'Daily use in projects and GitHub',
      since: '2021',
      proficiency: 'Advanced',
      projects: 'Collaborative development'
    },
    { 
      name: 'Python', 
      icon: 'bx bxl-python',
      description: 'Versatile scripting language',
      learned: 'B.Tech curriculum and personal projects',
      since: '2020',
      proficiency: 'Advanced',
      projects: 'Bird detection system, Automation'
    },
    { 
      name: 'Django', 
      icon: 'bx bxl-django',
      description: 'Python web framework',
      learned: 'College projects and online resources',
      since: '2022',
      proficiency: 'Intermediate',
      projects: 'Backend applications'
    },
    { 
      name: 'MongoDB', 
      icon: 'bx bxl-mongodb',
      description: 'NoSQL document database',
      learned: 'Project-based learning with QuickBlood',
      since: '2023',
      proficiency: 'Advanced',
      projects: 'QuickBlood app, Data storage'
    },
    { 
      name: 'Arduino', 
      icon: 'bx bxs-chip',
      description: 'Microcontroller programming',
      learned: 'B.Tech IoT projects and workshops',
      since: '2021',
      proficiency: 'Advanced',
      projects: 'Bird detection, Home automation IoT'
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-black" data-aos="fade-in" data-aos-duration="800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Skills & Expertise
          </h2>
          <div className="h-1 w-20 bg-purple-500 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedSkill(skill.name)}
            >
              <div className="relative h-28 flex items-center justify-center">
                {/* Glowing background on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-purple-600 dark:border-purple-500 bg-gray-900 dark:bg-gray-950 transition-all duration-300 group-hover:border-purple-400 group-hover:shadow-lg group-hover:shadow-purple-500/30" />
                
                {/* Icon */}
                <div className="relative z-10 flex flex-col items-center justify-center gap-2 p-4">
                  <i className={`${skill.icon} text-4xl text-purple-400 transition-transform duration-300 group-hover:scale-110 group-hover:text-pink-400`}></i>
                  <span className="text-xs font-semibold text-gray-200 dark:text-gray-100 text-center mt-1">
                    {skill.name}
                  </span>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400/0 to-pink-500/0 group-hover:from-purple-400/30 group-hover:to-pink-500/20 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Skill Detail Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full p-8 border-2 border-purple-500 shadow-purple-500/20 relative z-20"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-600 dark:text-gray-300" />
              </button>

              {/* Skill Info */}
              {skills.map((skill) => skill.name === selectedSkill && (
                <div key={skill.name} className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-900 dark:bg-purple-950 rounded-lg">
                      <i className={`${skill.icon} text-4xl text-purple-400`}></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {skill.name}
                      </h3>
                      <span className="text-sm text-purple-400 font-semibold">
                        {skill.proficiency}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300">
                    {skill.description}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                        Since
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">{skill.since}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                        How Learnt
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">{skill.learned}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                        Projects
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">{skill.projects}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="w-full mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors shadow-lg shadow-purple-500/25"
                  >
                    Close
                  </button>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
