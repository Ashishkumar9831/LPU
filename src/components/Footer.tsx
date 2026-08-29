import React from 'react';
import { MapPin, Phone, Mail, Globe, GraduationCap, Building } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900/95 backdrop-blur-sm text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-3">
              <img 
                src="https://www.lpu.in/images/logo/logo-media.png" 
                alt="LPU Logo" 
                className="h-8 w-auto bg-white rounded p-1"
                referrerPolicy="no-referrer"
              />
              Lovely Professional University
            </h3>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              "Learn Today, Lead Tomorrow"<br/>
              A premier institution for Engineering & Technology, established in 2005.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholder */}
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer" />
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer" />
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>Phagwara, Punjab</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>lpu@gmai.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-blue-500 shrink-0" />
                <span>www.lpuinstitute.edu</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Campus Areas</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Building className="w-4 h-4 text-slate-500" /> Main Campus
              </li>
              <li className="flex items-center gap-2">
                <Building className="w-4 h-4 text-slate-500" /> Academic Block
              </li>
              <li className="flex items-center gap-2">
                <Building className="w-4 h-4 text-slate-500" /> Hostel Area
              </li>
              <li className="flex items-center gap-2">
                <Building className="w-4 h-4 text-slate-500" /> Sports Complex
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Student Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Student Portal</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Online Fee Payment</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Library Catalog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Hostel Management</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Notice Board</a></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-slate-800 text-sm text-center text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Lovely Professional University. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
