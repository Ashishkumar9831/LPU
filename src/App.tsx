import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HistoryTimeline from './components/HistoryTimeline';
import Academics from './components/Academics';
import SmartCampus from './components/SmartCampus';
import Facilities from './components/Facilities';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans transition-colors duration-300 relative">
        {/* Global Watermark */}
        <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden opacity-5 dark:opacity-10">
          <img 
            src="https://www.lpu.in/images/logo/logo-media.png" 
            alt="" 
            className="w-full max-w-5xl object-contain grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <HistoryTimeline />
            <Academics />
            <SmartCampus />
            <Facilities />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
