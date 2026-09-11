import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full bg-white py-6 sm:py-8 border-b border-slate-100">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="font-display text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight mb-2">
          About Western Grill
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed">
          Western Grill brings grilled favorites and casual dining to {RESTAURANT_INFO.location}. Enjoy a simple, comfortable place for delicious meals with family and friends.
        </p>
      </div>
    </section>
  );
};
