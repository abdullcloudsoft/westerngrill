import React from 'react';
import { Home, UtensilsCrossed, Phone, Image, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface MobileBottomNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeSection,
  onNavigate,
}) => {
  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'menu', label: 'Menu', icon: UtensilsCrossed },
    { id: 'call', label: 'Call', icon: Phone, isSpecial: true },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'contact', label: 'Contact', icon: MapPin },
  ];

  return (
    <nav
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 px-2 py-1.5 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          if (item.isSpecial) {
            return (
              <a
                key={item.id}
                href={RESTAURANT_INFO.phoneTel}
                className="flex flex-col items-center -mt-5 cursor-pointer group focus:outline-none"
                aria-label="Call Western Grill"
              >
                <div className="w-12 h-12 rounded-full bg-[#24523d] text-white flex items-center justify-center shadow-lg border-2 border-white transform active:scale-90 transition-transform">
                  <Phone className="w-5 h-5 text-amber-300" />
                </div>
                <span className="text-[10px] font-bold text-[#24523d] mt-0.5">Call</span>
              </a>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center py-1 px-2.5 rounded-xl transition-all duration-150 cursor-pointer focus:outline-none ${
                isActive
                  ? 'text-[#24523d] font-bold'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <Icon
                className={`w-5 h-5 transition-transform duration-150 ${
                  isActive ? 'scale-110 stroke-[2.5]' : 'stroke-2'
                }`}
              />
              <span
                className={`text-[10px] mt-1 tracking-tight ${
                  isActive ? 'font-extrabold text-[#24523d]' : 'font-medium text-slate-500'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
