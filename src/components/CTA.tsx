import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Star } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Background Decorations */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 w-20 h-20 bg-gray-300 rounded-full opacity-10"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 left-10 w-16 h-16 bg-gray-400 rounded-full opacity-10"
          />

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex justify-center items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                  >
                    <Star className="w-6 h-6 text-black fill-current" />
                  </motion.div>
                ))}
              </div>
              <p className="text-gray-600 mb-6">Rated 4.6/5 by over 100,000 users</p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6"
            >
              Ready to transform your
              <br />
              <span className="text-black">
                online presence?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-10 leading-relaxed"
            >
              Join hundreds of small businesses who've already transformed their online presence 
              with our professional landing pages. Get started with a free consultation today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-10 py-4 rounded-full font-semibold text-lg flex items-center gap-3 hover:bg-gray-800 hover:shadow-xl transition-all duration-300 min-w-[200px] justify-center"
              >
                <Download className="w-5 h-5" />
                Start Project
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 text-gray-800 px-10 py-4 rounded-full font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 min-w-[200px]"
              >
                View Portfolio
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
            >
              <div className="space-y-2">
                <div className="text-2xl font-bold text-black">Free</div>
                <div className="text-gray-600">Consultation</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-black">24/7</div>
                <div className="text-gray-600">Support included</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-black">30 Days</div>
                <div className="text-gray-600">Free revisions</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;