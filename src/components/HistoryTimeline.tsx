import React from 'react';
import { motion } from 'motion/react';

export default function HistoryTimeline() {
  const milestones = [
    { 
      year: '2005', 
      title: 'Foundation & Inception', 
      description: 'Lovely Professional University was established with core engineering departments and an inaugural batch of students.' 
    },
    { 
      year: '2010', 
      title: 'First Graduating Class', 
      description: 'Celebrated the graduation of our founding batch with 100% placement in top-tier tech companies.' 
    },
    { 
      year: '2015', 
      title: 'Campus Expansion', 
      description: 'Inaugurated the new Academic Block, modern hostels, and a state-of-the-art Sports Complex.' 
    },
    { 
      year: '2018', 
      title: 'NAAC A++ Accreditation', 
      description: 'Recognized nationally for academic excellence, exceptional faculty, and outstanding infrastructure.' 
    },
    { 
      year: '2021', 
      title: 'Center of Excellence in AI', 
      description: 'Launched specialized programs in Data Science & AI alongside a dedicated AI research center.' 
    },
    { 
      year: 'Present', 
      title: 'Global Recognition', 
      description: 'THE World University Rankings 2026: 501–600 globally and 5th in India. QS World University Rankings 2027: #791–800. THE Sustainability Impact Rankings 2026: 23rd globally and 1st in India. WURI 2026: 78th globally and 4th in India for innovation.' 
    },
  ];

  return (
    <section className="py-20 bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3">Our Legacy</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Institute History</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            A journey of excellence, innovation, and growth from our inception to the present day.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900/50 md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col md:block"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[24px] md:left-1/2 w-12 h-12 rounded-full bg-white dark:bg-slate-950 border-4 border-blue-500 dark:border-blue-600 shadow-sm flex items-center justify-center -translate-x-1/2 z-10 top-0 md:top-4">
                    <div className="w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                  </div>

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:mr-auto md:text-right' : 'md:pl-16 md:ml-auto'}`}>
                    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800 transition-all">
                      <span className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-bold mb-4 tracking-wide">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{milestone.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
