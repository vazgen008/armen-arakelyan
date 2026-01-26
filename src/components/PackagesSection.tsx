import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Sparkles } from 'lucide-react';

const packages = [
  {
    name: 'Basic',
    price: '֏ 30.000',
    description: 'Perfect for small businesses just starting out',
    features: [
      '5 Shooting videos',
      'Shooting by Iphone 16pro max',
      'DJI OSMO SE stabilizer',
      'Mini light',
      'Montage',
      'Stand stick for phone',
    ],
    featured: false,
  },
  {
    name: 'Standard',
    price: '֏ 50.000',
    description: 'Ideal for growing brands seeking impact',
    features: [
      '6 Shooting videos',
     'Shooting by Iphone 16pro max',
      'Video planning',
      'Content writing',
      'Huge circle light',
      'Montage',
      'DJI OSMO SE stabilizer',
      'Stand stick for phone',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    price: '֏ 120.000',
    period: '/Month',
    description: 'Complete solution for established brands',
   features: [
      'Shootings by iPhone 16 Pro Max or DJI Pocket Camera',
      'Monthly Planning',
      'Targeting for Ads',
      'Content Writing',
      'Video Planning',
      'Huge Circle Light',
      'Montage',
      'DJI OSMO SE Stabilizer',
      'Stand Stick for Phone',
      'Monthly Feedback',
    ],
    featured: false,
  },
];

export const PackagesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="packages" className="section-padding relative">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full border border-primary/5"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full border border-accent/5"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Pricing
          </span>
          <h2 className="section-title">
            Choose Your <span className="gradient-text">Package</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Package prices are flexible and may vary based on the scope of work and mutual agreement.
        </p>
        </motion.div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`package-card ${pkg.featured ? 'featured' : ''}`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    <Sparkles size={12} />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-sm text-muted-foreground">{pkg.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-display font-bold gradient-text">
                  {pkg.price}
                </span>
                <span className="text-muted-foreground">{pkg.period}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <Check size={12} className="text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                className={pkg.featured ? 'btn-primary w-full text-center' : 'btn-secondary w-full text-center'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.a>
            </motion.div>
          ))}
       
        </div>
        
      </div>
    </section>
  );
};
