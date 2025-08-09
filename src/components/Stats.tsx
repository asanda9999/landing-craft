import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { number: '200+', label: 'Landing pages created' },
    { number: '98%', label: 'Client satisfaction rate' },
    { number: '7 Days', label: 'Average delivery time' },
    { number: '45%', label: 'Average conversion boost' },
  ];

  return (
    <section className="py-20 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Trusted by businesses
            <br />
            <span className="text-white">
              everywhere
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join hundreds of small businesses who've transformed their online presence 
            and achieved remarkable growth with our landing page solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center group"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                className="text-5xl sm:text-6xl font-bold mb-4 text-white group-hover:scale-110 transition-transform duration-300"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-300 text-lg font-medium group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
              
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className="h-1 bg-white rounded-full mt-4 mx-auto w-16 group-hover:w-24 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Floating Background Elements */}
        <motion.div
          animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-32 h-32 bg-gray-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ x: [20, -20, 20], y: [10, -10, 10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-40 h-40 bg-gray-400/10 rounded-full blur-xl"
        />
      </div>
    </section>
  );
};

export default Stats;