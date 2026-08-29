import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Sun, Moon, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeProvider';

const searchData = [
  { category: 'Departments', items: ['Computer Science (CSE)', 'Data Science & AI', 'Electronics (ECE)', 'Mechanical Engineering', 'Civil Engineering'] },
  { category: 'Student Services', items: ['Attendance Management', 'Assignments & Grading', 'Course Registration', 'Digital Library', 'Hostel Booking', 'Notice Board'] },
  { category: 'Faculty & Administration', items: ['Faculty Portal', 'Teacher Dashboard', 'Admin Dashboard', 'Dean of Academics'] }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { theme, toggleTheme } = useTheme();

  const filteredResults = searchData.map(section => ({
    ...section,
    items: section.items.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
  })).filter(section => section.items.length > 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#' },
    { name: 'Academics', href: '#' },
    { name: 'Admissions', href: '#' },
    { name: 'Facilities', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-800 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 z-50">
            <img 
              src="https://www.lpu.in/images/logo/logo-media.png" 
              alt="LPU Logo" 
              className="h-10 w-auto bg-white rounded p-1"
              referrerPolicy="no-referrer"
            />
            <span className={`text-xl font-bold tracking-tight hidden sm:block ${isScrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`}>
              Lovely Professional University
            </span>
            <span className={`text-xl font-bold tracking-tight sm:hidden ${isScrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`}>
              LPU
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors ${
                  isScrolled ? 'text-slate-600 dark:text-slate-300' : 'text-slate-200'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <button
              onClick={() => setIsSearchOpen(true)}
              className={`p-2 rounded-full transition-colors ${
                isScrolled ? 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isScrolled ? 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
              isScrolled 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-white text-blue-900 hover:bg-blue-50'
            }`}>
              Student Portal
            </button>
          </nav>

          <div className="flex items-center gap-4 md:hidden z-50">
            <button
              onClick={() => setIsSearchOpen(true)}
              className={`p-2 rounded-full transition-colors ${
                isScrolled || isMobileMenuOpen ? 'text-slate-600 dark:text-slate-300' : 'text-white'
              }`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isScrolled || isMobileMenuOpen ? 'text-slate-600 dark:text-slate-300' : 'text-white'
              }`}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button 
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled || isMobileMenuOpen ? 'text-slate-900 dark:text-white' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white dark:bg-slate-950 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-2xl font-semibold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="px-6 py-4 mt-4 rounded-xl bg-blue-600 text-white font-semibold w-full text-lg text-center">
                Student Portal
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-slate-900/50 backdrop-blur-sm flex items-start justify-center pt-24 px-4"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800"
            >
              <div className="flex items-center px-6 py-4 border-b border-slate-100 dark:border-slate-800">
                <Search className="w-6 h-6 text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Search departments, services, faculty..."
                  className="w-full bg-transparent border-none outline-none px-4 py-2 text-slate-900 dark:text-white placeholder-slate-400 text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="max-h-[60vh] overflow-y-auto p-4">
                {filteredResults.length === 0 ? (
                  <div className="text-center py-12 text-slate-500 dark:text-slate-400">
                    No results found for "{searchQuery}"
                  </div>
                ) : (
                  filteredResults.map((section) => (
                    <div key={section.category} className="mb-6 last:mb-0">
                      <h4 className="px-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                        {section.category}
                      </h4>
                      <ul className="space-y-1">
                        {section.items.map((item) => (
                          <li key={item}>
                            <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-3">
                              <Search className="w-4 h-4 text-slate-400" />
                              {item}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
