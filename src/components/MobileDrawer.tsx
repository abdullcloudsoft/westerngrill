import React from 'react';
import { X, Phone, MapPin, Instagram, Facebook, Mail } from 'lucide-react';
import { CustomLogo } from './CustomLogo';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  activeSection,
  onNavigate,
}) => {
  if (!isOpen) return null;

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'popular', label: 'Popular Picks' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact & Location' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-200"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-[80%] max-w-xs bg-white h-full shadow-2xl flex flex-col justify-between z-10 animate-in slide-in-from-left duration-200">
        <div>
          {/* Header */}
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <CustomLogo size="sm" showLocation={true} />
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Call */}
          <div className="p-3.5 bg-emerald-50/80 border-b border-emerald-100/60 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-[#24523d] uppercase tracking-wider">Hotline</p>
              <p className="text-xs font-black text-slate-900">{RESTAURANT_INFO.phone}</p>
            </div>
            <a
              href={RESTAURANT_INFO.phoneTel}
              className="px-3 py-1.5 bg-[#24523d] text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-2xs active:scale-95 transition"
            >
              <Phone className="w-3 h-3" />
              Call
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    onClose();
                  }}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-between ${
                    isActive
                      ? 'bg-[#24523d] text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer info in Drawer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 text-xs">
          <div className="flex items-start gap-2 text-slate-600 mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#24523d] shrink-0 mt-0.5" />
            <span className="text-[11px] leading-tight">{RESTAURANT_INFO.location}</span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2 pt-2 border-t border-slate-200">
            <a
              href={RESTAURANT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-[#24523d] transition"
              aria-label="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href={RESTAURANT_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-[#24523d] transition"
              aria-label="Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${RESTAURANT_INFO.email}`}
              className="p-2 bg-white rounded-lg border border-slate-200 text-slate-700 hover:text-[#24523d] transition"
              aria-label="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
