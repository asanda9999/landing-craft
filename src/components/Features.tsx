import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Shield, TrendingUp, Globe, Smartphone, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Custom Design',
      description: 'Unique, mobile-first designs tailored to your brand that stand out from the competition.',
      color: 'bg-blue-500',
    },
    {
      icon: TrendingUp,
      title: 'High Converting',
      description: 'Optimized layouts and copy that turn visitors into customers with proven conversion strategies.',
      color: 'bg-green-500',
    },
    {
      icon: Shield,
      title: 'Fast & Secure',
      description: 'Lightning-fast loading speeds with enterprise-grade security and SSL certificates included.',
      color: 'bg-purple-500',
    },
    {
      icon: Users,
      title: 'SEO Optimized',
      description: 'Built-in SEO best practices to help your business get found by potential customers online.',
      color: 'bg-orange-500',
    },
    {
      icon: Globe,
      title: 'Analytics Ready',
      description: 'Integrated with Google Analytics and tracking tools to measure your success from day one.',
      color: 'bg-indigo-500',
    },
    {
      icon: CreditCard,
      title: 'Easy Updates',
      description: 'Simple content management system so you can update your site without technical knowledge.',
      color: 'bg-pink-500',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Everything your business needs,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              nothing you don't
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial design to final deployment, we provide comprehensive landing page solutions 
            that help small businesses establish a strong online presence and drive growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {feature.description}
              </p>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mt-6"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;