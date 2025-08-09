import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.05 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-20 right-10 w-96 h-96 bg-gray-300 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.03 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-gray-400 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight"
              >
                Beautiful landing pages
                <br />
                <span className="text-black">
                  that convert visitors
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
              >
                We create stunning, high-converting landing pages for small businesses. 
                From design to deployment, we handle everything so you can focus on growing your business.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
              >
                <Play className="w-5 h-5" />
                View Portfolio
              </motion.button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-8 pt-4"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-black">200+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-black">98%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-black">7 Days</div>
                <div className="text-sm text-gray-600">Avg Delivery</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="w-72 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-gray-900 rounded-[2.5rem] p-6 flex flex-col">
                    <div className="flex justify-between items-center mb-8">
                      <div className="text-white text-sm font-medium">Portfolio</div>
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="text-white mb-4">
                      <div className="text-sm opacity-80">Latest Project</div>
                      <div className="text-2xl font-bold">Bakery Site</div>
                    </div>

                    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 mb-6">
                      <div className="text-white/80 text-sm mb-1">Conversion Rate</div>
                      <div className="text-white text-3xl font-bold">+47%</div>
                    </div>

                    <div className="space-y-3 flex-1">
                      {['Design', 'Develop', 'Deploy', 'Optimize'].map((action, index) => (
                        <motion.div
                          key={action}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + index * 0.1 }}
                          className="bg-white/10 backdrop-blur-md rounded-xl p-3 flex items-center gap-3"
                        >
                          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <div className="w-5 h-5 bg-white/60 rounded"></div>
                          </div>
                          <div className="text-white font-medium">{action}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -left-8 top-20 w-32 h-20 bg-white rounded-xl shadow-lg p-3"
              >
                <div className="text-xs text-gray-600 mb-1">Leads Generated</div>
                <div className="text-lg font-bold text-black">+127</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute -right-6 bottom-32 w-36 h-24 bg-white rounded-xl shadow-lg p-3"
              >
                <div className="text-xs text-gray-600 mb-1">Revenue Growth</div>
                <div className="text-lg font-bold text-black">+34%</div>
                <div className="text-xs text-gray-500">This month</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;