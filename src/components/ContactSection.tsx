import React from 'react';
import { Phone, MapPin, Mail, Navigation, Instagram, Facebook } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="w-full bg-white py-6 sm:py-8 border-b border-slate-100">
      <div className="max-w-3xl mx-auto px-4 text-center">
        
        {/* Header */}
        <h2 className="font-display text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight mb-1">
          Contact &amp; Location
        </h2>
        <p className="text-xs text-slate-500 mb-5">
          Visit or connect with Western Grill in Rawalpindi
        </p>

        {/* Info Card */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200/80 p-5 sm:p-6 text-center max-w-lg mx-auto shadow-2xs">
          <h3 className="font-display text-base sm:text-lg font-black text-slate-900">
            {RESTAURANT_INFO.name}
          </h3>

          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-600 mt-2 font-medium">
            <MapPin className="w-4 h-4 text-[#24523d] shrink-0" />
            <span>{RESTAURANT_INFO.location}</span>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <a
              href={RESTAURANT_INFO.phoneTel}
              className="inline-flex items-center gap-1 text-slate-900 hover:text-[#24523d] transition"
            >
              <Phone className="w-3.5 h-3.5 text-[#24523d]" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>

            <a
              href={`mailto:${RESTAURANT_INFO.email}`}
              className="inline-flex items-center gap-1 text-slate-600 hover:text-[#24523d] transition"
            >
              <Mail className="w-3.5 h-3.5 text-slate-500" />
              <span>{RESTAURANT_INFO.email}</span>
            </a>
          </div>

          {/* 4 Clickable Action Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-5 pt-4 border-t border-slate-200/70">
            <a
              href={RESTAURANT_INFO.phoneTel}
              className="py-2.5 px-3 bg-[#24523d] text-white rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-[#1a3c2c] active:scale-95 transition shadow-2xs"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>Call Now</span>
            </a>

            <a
              href={RESTAURANT_INFO.googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 bg-white border border-slate-300 text-slate-800 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-slate-100 active:scale-95 transition shadow-2xs"
            >
              <Navigation className="w-3.5 h-3.5 text-[#24523d]" />
              <span>Directions</span>
            </a>

            <a
              href={RESTAURANT_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 bg-white border border-slate-300 text-slate-800 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-slate-100 active:scale-95 transition shadow-2xs"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-600" />
              <span>Instagram</span>
            </a>

            <a
              href={RESTAURANT_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 bg-white border border-slate-300 text-slate-800 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-slate-100 active:scale-95 transition shadow-2xs"
            >
              <Facebook className="w-3.5 h-3.5 text-blue-600" />
              <span>Facebook</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
