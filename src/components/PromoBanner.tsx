import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface PromoBannerProps {
  onExploreMenu: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onExploreMenu }) => {
  return (
    <section className="w-full bg-white py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-emerald-50/70 border border-emerald-100/80 p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xs">
          
          {/* Left Text Block */}
          <div className="max-w-md text-left w-full md:w-auto">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#24523d]/10 text-[#24523d] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1.5">
              <Sparkles className="w-3 h-3 text-amber-600" />
              <span>Gather &amp; Dine</span>
            </div>

            <h3 className="font-display text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-tight">
              GOOD FOOD. <span className="text-[#24523d]">GREAT MOMENTS.</span>
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1 mb-3.5 leading-relaxed">
              Enjoy fresh grilled favorites with family and friends at Commercial Market, Rawalpindi.
            </p>

            <button
              onClick={onExploreMenu}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#24523d] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1a3d2c] shadow-2xs active:scale-95 transition cursor-pointer"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Image Composition */}
          <div className="w-full md:w-5/12 flex items-center justify-center md:justify-end">
            <div className="relative w-full max-w-sm h-32 sm:h-36 rounded-xl overflow-hidden shadow-2xs border border-white">
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=450&q=75"
                alt="Delicious family grill meal"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-white/95 text-[10px] font-bold text-slate-800 shadow-2xs">
                Fresh • Hot • Flavorful
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
