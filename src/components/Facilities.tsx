import React from 'react';
import { BookOpen, Users, Coffee, Home } from 'lucide-react';
import { motion } from 'motion/react';

export default function Facilities() {
  const facilities = [
    { title: 'Modern Library', icon: BookOpen, desc: 'Extensive collection of books, journals, and digital resources.' },
    { title: 'Computer Labs', icon: Users, desc: 'State-of-the-art labs equipped with the latest software and hardware.' },
    { title: 'Hostels', icon: Home, desc: 'Comfortable on-campus accommodation with all necessary amenities.' },
    { title: 'Cafeteria', icon: Coffee, desc: 'Hygienic and diverse food options for students and staff.' },
  ];

  return (
    <section className="py-20 bg-slate-50/90 dark:bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Campus Facilities</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Providing a conducive environment for academic and personal growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((fac, index) => {
            const Icon = fac.icon;
            return (
              <motion.div 
                key={fac.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 mb-6 group-hover:bg-blue-600 dark:group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{fac.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{fac.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
