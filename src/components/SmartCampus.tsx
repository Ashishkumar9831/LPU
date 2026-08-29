import React from 'react';
import { motion } from 'motion/react';
import { LayoutDashboard, Calendar, ClipboardCheck, Bell, Users, BookOpen } from 'lucide-react';

export default function SmartCampus() {
  const features = [
    { title: 'Student Dashboard', icon: LayoutDashboard, desc: 'Centralized hub for all student activities and resources.' },
    { title: 'Teacher Dashboard', icon: Users, desc: 'Manage courses, students, and academic progress.' },
    { title: 'Admin Dashboard', icon: LayoutDashboard, desc: 'Overview of campus operations and management.' },
    { title: 'Attendance Management', icon: ClipboardCheck, desc: 'Automated tracking and reporting of student attendance.' },
    { title: 'Assignment Management', icon: BookOpen, desc: 'Digital submission and grading of assignments.' },
    { title: 'Result Management', icon: AwardIcon, desc: 'Secure publishing and viewing of academic results.' },
    { title: 'Event Management', icon: Calendar, desc: 'Campus events scheduling and participation tracking.' },
    { title: 'Notice Board', icon: Bell, desc: 'Real-time announcements and digital notices.' },
  ];

  return (
    <section className="py-20 bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3">Digital Infrastructure</div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Smart Campus Features</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Experience a fully integrated digital ecosystem with role-based access for students, faculty, and administration.
            </p>
          </div>
          <button className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors whitespace-nowrap">
            Login to Portal
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg hover:shadow-blue-900/5 transition-all group bg-white dark:bg-slate-900"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 mb-4 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AwardIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  )
}
