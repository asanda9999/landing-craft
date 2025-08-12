import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: 'R1,500',
      period: 'one-time',
      description: 'Perfect for small businesses getting started online',
      features: [
        'Custom landing page design',
        'Mobile-responsive layout',
        'Basic SEO optimization',
        'Contact form integration',
        'Google Analytics setup',
        '2 rounds of revisions',
        '30-day support'
      ],
      popular: false,
      color: 'bg-black'
    },
    {
      name: 'Professional',
      price: 'R3,000',
      period: 'one-time',
      description: 'Ideal for businesses serious about conversions',
      features: [
        'Everything in Starter',
        'Advanced conversion optimization',
        'A/B testing setup',
        'Lead magnet integration',
        'Email marketing setup',
        'Social media integration',
        '5 rounds of revisions',
        '60-day support',
        'Performance analytics dashboard'
      ],
      popular: true,
      color: 'bg-black'
    },
    {
      name: 'Enterprise',
      price: 'R5,000',
      period: 'one-time',
      description: 'Complete solution for growing businesses',
      features: [
        'Everything in Professional',
        'Multi-page website',
        'E-commerce integration',
        'Advanced SEO package',
        'Content management system',
        'Custom animations',
        'Unlimited revisions',
        '90-day support',
        'Monthly performance reports',
        'Priority support',
      ],
      popular: false,
      color: 'bg-black'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Simple, transparent
            <br />
            <span className="text-black">
              pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our satisfaction guarantee 
            and are designed to deliver real results for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-gray-800 shadow-gray-800/20' 
                  : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </motion.div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-black">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-4 px-6 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-black text-white hover:bg-gray-800 hover:shadow-xl'
                      : 'bg-black text-white hover:bg-gray-800 hover:shadow-lg'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * featureIndex }}
                    className="flex items-center gap-3"
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${plan.color}`}>
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className={`h-1 ${plan.color} rounded-full mt-8`}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-black mb-4">Need something custom?</h3>
          <p className="text-gray-600 mb-6">
            We also offer custom solutions for unique business needs. Get in touch for a personalized quote.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 hover:shadow-lg transition-all duration-300"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;