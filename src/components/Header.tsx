import React from 'react';
import { Menu, Phone, Instagram, Facebook } from 'lucide-react';
import { CustomLogo } from './CustomLogo';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeaderProps {
  onOpenDrawer: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenDrawer,
  activeSection,
  onNavigate,
}) => {
  const desktopNavItems = [
    { id: 'hero', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xs border-b border-slate-100 shadow-2xs">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          
          {/* Mobile Left: Drawer button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={onOpenDrawer}
              className="p-2 -ml-1.5 rounded-lg text-slate-700 hover:bg-slate-100 transition active:scale-95"
              aria-label="Open navigation"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center flex-1 md:flex-initial">
            <button
              onClick={() => onNavigate('hero')}
              className="cursor-pointer focus:outline-none text-left"
            >
              <CustomLogo size="md" showLocation={true} />
            </button>
          </div>

          {/* Desktop Navigation Links: Home, Menu, About, Gallery, Contact */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {desktopNavItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs lg:text-sm font-semibold transition cursor-pointer ${
                    isActive
                      ? 'text-[#24523d] bg-emerald-50 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden lg:flex items-center gap-1 border-r border-slate-200 pr-2 mr-1">
              <a
                href={RESTAURANT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-slate-500 hover:text-[#24523d] transition rounded-lg hover:bg-slate-100"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-slate-500 hover:text-[#24523d] transition rounded-lg hover:bg-slate-100"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Call Icon / Desktop Phone Pill */}
            <a
              href={RESTAURANT_INFO.phoneTel}
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-[#24523d] text-white shadow-2xs hover:bg-[#1c4130] transition active:scale-95"
              aria-label="Call Western Grill"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>

            <a
              href={RESTAURANT_INFO.phoneTel}
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#24523d] text-white text-xs font-bold tracking-wide shadow-2xs hover:bg-[#1a3d2c] transition active:scale-98"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};
