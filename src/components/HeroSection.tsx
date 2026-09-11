import React from 'react';
import { Phone, Utensils } from 'lucide-react';
import { RESTAURANT_INFO, HERO_IMAGE } from '../data/restaurantData';

interface HeroSectionProps {
  onViewMenu: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onViewMenu }) => {
  return (
    <section id="hero" className="relative w-full h-[360px] sm:h-[420px] md:h-[480px] overflow-hidden flex items-center justify-center text-center px-4 bg-slate-100">
      {/* Single Static Optimized Hero Image - Loaded Eagerly */}
      <img
        src={HERO_IMAGE}
        alt="Western Grill - Premium Grilled Steak"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="async"
      />

      {/* Light, soft vignette for clear text readability without darkening the appetizing food */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-black/25" />

      {/* Very short, clean hero content */}
      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-md">
          Western Grill
        </h1>

        <p className="text-base sm:text-xl md:text-2xl text-white font-medium my-3 sm:my-4 italic drop-shadow">
          &ldquo;Grill, Gather &amp; Enjoy&rdquo;
        </p>

        <div className="flex items-center justify-center gap-3 mt-1">
          <button
            onClick={onViewMenu}
            className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#24523d] text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#1a3c2c] shadow-md active:scale-95 transition cursor-pointer flex items-center gap-2"
          >
            <Utensils className="w-4 h-4 text-amber-300" />
            <span>View Menu</span>
          </button>

          <a
            href={RESTAURANT_INFO.phoneTel}
            className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white text-slate-900 font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-slate-100 shadow-md active:scale-95 transition flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#24523d]" />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </section>
  );
};
