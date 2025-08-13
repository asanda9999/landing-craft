import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Services',
      links: ['Landing Pages', 'Website Design', 'E-commerce', 'SEO Optimization', 'Maintenance', 'Consulting']
    },
    {
      title: 'Industries',
      links: ['Restaurants', 'Healthcare', 'Real Estate', 'Professional Services', 'E-commerce', 'Startups']
    },
    {
      title: 'Company',
      links: ['About us', 'Portfolio', 'Process', 'Blog', 'Case Studies', 'Testimonials']
    },
    {
      title: 'Support',
      links: ['FAQs', 'Contact us', 'Get Quote', 'Project Status', 'Pricing']
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="text-3xl font-bold">Hydra Tech</div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Creating stunning, high-converting landing pages for small businesses. 
              We help you establish a strong online presence and drive real results.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li key={linkIndex}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-white transition-all duration-200 block"
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* App Store Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-black px-6 py-3 rounded-lg flex items-center gap-3 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
          >
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <div className="text-white text-xs font-bold">📱</div>
            </div>
            <div>
              
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-6 py-3 rounded-lg flex items-center gap-3 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
          >
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <div className="text-white text-xs font-bold">▷</div>
            </div>
            <div>
             
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Hydra Tech. All rights reserved.
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <motion.a href="#" whileHover={{ color: '#ffffff' }} className="transition-colors duration-200">
                Privacy Policy
              </motion.a>
              <motion.a href="#" whileHover={{ color: '#ffffff' }} className="transition-colors duration-200">
                Terms of Service
              </motion.a>
              <motion.a href="#" whileHover={{ color: '#ffffff' }} className="transition-colors duration-200">
                Cookie Policy
              </motion.a>
              <motion.a href="#" whileHover={{ color: '#ffffff' }} className="transition-colors duration-200">
                Legal
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;