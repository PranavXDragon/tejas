'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import axios from 'axios';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await axios.post('/api/contact', formData);
      setStatus('success');
      setMessage(response.data.message);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error: any) {
      setStatus('error');
      setMessage(error.response?.data?.error || 'Something went wrong. Please try again.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tejasingole912@gmail.com',
      href: 'mailto:tejasingole912@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7410127039',
      href: 'tel:+917410127039',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nagpur, India',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-black" data-aos="fade-in" data-aos-duration="800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-purple-600 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Contact Methods */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Have a project in mind or just want to say hello? Feel free to reach out through any of these channels. I&apos;d love to hear from you!
            </p>

            <div className="space-y-4">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 dark:bg-gray-800 border-3 border-purple-500 shadow-lg shadow-purple-500/15 hover:shadow-2xl hover:shadow-purple-500/30 transition-all relative z-10"
                  >
                    <Icon size={28} className="text-purple-400" />
                    <div>
                      <p className="text-sm text-gray-400 dark:text-gray-500">{method.label}</p>
                      <p className="font-semibold text-white dark:text-white">{method.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Response time info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 bg-gray-800 dark:bg-gray-800 rounded-lg border-3 border-purple-500 shadow-lg shadow-purple-500/15 relative z-10"
            >
              <p className="text-sm text-gray-300 dark:text-gray-400">
                <strong className="text-purple-400">Response Time:</strong> I typically respond within 24 hours
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-3 border-purple-500 dark:border-purple-500 bg-gray-800 dark:bg-gray-800 text-white dark:text-white focus:border-purple-400 dark:focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all shadow-md shadow-purple-500/20 relative z-10"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-3 border-purple-500 dark:border-purple-500 bg-gray-800 dark:bg-gray-800 text-white dark:text-white focus:border-purple-400 dark:focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all shadow-md shadow-purple-500/20 relative z-10"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-3 border-purple-500 dark:border-purple-500 bg-gray-800 dark:bg-gray-800 text-white dark:text-white focus:border-purple-400 dark:focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all shadow-md shadow-purple-500/20 relative z-10"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-3 border-purple-500 dark:border-purple-500 bg-gray-800 dark:bg-gray-800 text-white dark:text-white focus:border-purple-400 dark:focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none shadow-md shadow-purple-500/20 relative z-10"
                  placeholder="Tell me about your project or just say hi!"
                />
              </div>

              {/* Status Messages */}
              {status !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`p-4 rounded-lg text-sm font-semibold ${
                    status === 'success'
                      ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100'
                      : status === 'error'
                      ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100'
                      : 'bg-purple-900/50 dark:bg-purple-900/70 text-purple-300 dark:text-purple-200'
                  }`}
                >
                  {message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <div className="animate-spin">⏳</div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
