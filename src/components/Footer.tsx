import React from 'react';
import { Phone, MapPin, Mail, Instagram, Facebook } from 'lucide-react';
import { CustomLogo } from './CustomLogo';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-white border-t border-slate-100 pt-8 pb-20 md:pb-10 text-slate-600">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-slate-100">
          
          {/* Col 1: Brand */}
          <div className="space-y-2">
            <CustomLogo size="md" showLocation={true} />
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed mt-1">
              Fresh grilled favorites and casual dining in Commercial Market, Satellite Town, Rawalpindi.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href={RESTAURANT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-pink-600 hover:border-pink-300 transition shadow-2xs"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={RESTAURANT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-blue-600 hover:border-blue-300 transition shadow-2xs"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-2">
              Quick Links
            </h4>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-semibold">
              <button
                onClick={() => onNavigate('hero')}
                className="hover:text-[#24523d] transition cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => onNavigate('menu')}
                className="hover:text-[#24523d] transition cursor-pointer"
              >
                Menu
              </button>
              <button
                onClick={() => onNavigate('popular')}
                className="hover:text-[#24523d] transition cursor-pointer"
              >
                Popular Picks
              </button>
              <button
                onClick={() => onNavigate('gallery')}
                className="hover:text-[#24523d] transition cursor-pointer"
              >
                Gallery
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="hover:text-[#24523d] transition cursor-pointer"
              >
                About Us
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="hover:text-[#24523d] transition cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-2">
              Contact
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-start gap-1.5 text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-[#24523d] shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.location}</span>
              </li>
              <li>
                <a
                  href={RESTAURANT_INFO.phoneTel}
                  className="flex items-center gap-1.5 text-slate-800 font-bold hover:text-[#24523d] transition"
                >
                  <Phone className="w-3.5 h-3.5 text-[#24523d]" />
                  <span>{RESTAURANT_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${RESTAURANT_INFO.email}`}
                  className="flex items-center gap-1.5 text-slate-600 hover:text-[#24523d] transition break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-[#24523d]" />
                  <span>{RESTAURANT_INFO.email}</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-1.5">
          <p>© {new Date().getFullYear()} {RESTAURANT_INFO.name}. All rights reserved.</p>
          <p>Commercial Market, Satellite Town, Rawalpindi</p>
        </div>

      </div>
    </footer>
  );
};
