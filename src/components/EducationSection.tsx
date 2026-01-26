import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import ArmenGrad from '@/assets/armenanna.jpg'

const educationItems = [
  {
    icon: Award,
    title: 'SMM Professional Certification',
    institution: 'Udemy',
    description: 'Comprehensive social media marketing strategies and growth techniques',
    year: '2023',
  },
  {
    icon: Award,
    title: 'Video Production Masterclass',
    institution: 'Cotta Pictures',
    description: 'Advanced video editing, color grading, and storytelling for social media',
    year: '2024',
  },
  {
    icon: GraduationCap,
    title: 'Marketing',
    institution: 'YSRC College',
    description: 'Data-driven content creation and performance optimization',
    year: 'Since 2023',
  },
];

export const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="section-padding bg-noise relative">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Background
            </span>
            <h2 className="section-title">
              Education & <span className="gradient-text">Training</span>
            </h2>
            <p className="section-subtitle mb-12">
              Professional education in SMM and content creation, continuously 
              learning and adapting to the latest trends in digital marketing.
            </p>

            <div className="space-y-6">
              {educationItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="glass-card-hover p-6 flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <span className="text-sm text-primary font-medium">{item.year}</span>
                    </div>
                    <p className="text-primary text-sm mb-1">{item.institution}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="glass-card p-8 rounded-3xl">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/ to-accent/ flex items-center justify-center overflow-hidden">
                 <img src={ArmenGrad} />
                </div>
              </div>

             
       
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
