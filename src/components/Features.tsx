import React from 'react';
import { motion } from 'framer-motion';
import { FeaturesSectionWithHoverEffects } from './ui/feature-section-with-hover-effects';

const Features = () => {
  return (
    <section id="features" className="relative py-20 bg-black overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{
            opacity: 0,
            y: -150,
            rotate: -15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotate: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 2.4,
            delay: 0.3,
            ease: [0.23, 0.86, 0.39, 0.96],
            opacity: { duration: 1.2 },
          }}
          className="absolute left-[-10%] md:left-[-5%] top-[15%] md:top-[20%] w-[600px] h-[140px]"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: -150,
            rotate: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotate: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 2.4,
            delay: 0.5,
            ease: [0.23, 0.86, 0.39, 0.96],
            opacity: { duration: 1.2 },
          }}
          className="absolute right-[-5%] md:right-[0%] top-[70%] md:top-[75%] w-[500px] h-[120px]"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: -150,
            rotate: 8,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotate: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 2.4,
            delay: 0.4,
            ease: [0.23, 0.86, 0.39, 0.96],
            opacity: { duration: 1.2 },
          }}
          className="absolute left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%] w-[300px] h-[80px]"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: -150,
            rotate: -20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotate: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 2.4,
            delay: 0.6,
            ease: [0.23, 0.86, 0.39, 0.96],
            opacity: { duration: 1.2 },
          }}
          className="absolute right-[15%] md:right-[20%] top-[10%] md:top-[15%] w-[200px] h-[60px]"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: -150,
            rotate: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotate: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 2.4,
            delay: 0.7,
            ease: [0.23, 0.86, 0.39, 0.96],
            opacity: { duration: 1.2 },
          }}
          className="absolute left-[20%] md:left-[25%] top-[5%] md:top-[10%] w-[150px] h-[40px]"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/[0.15] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Everything your business needs,
            <br />
            <span className="text-white">
              nothing you don't
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From initial design to final deployment, we provide comprehensive landing page solutions 
            that help small businesses establish a strong online presence and drive growth.
          </p>
        </motion.div>

        {/* New Feature Section with Hover Effects */}
        <div className="bg-gray-900 rounded-3xl border border-gray-800 overflow-hidden">
          <FeaturesSectionWithHoverEffects />
        </div>
      </div>
    </section>
  );
};

export default Features;