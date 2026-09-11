import React, { useState } from 'react';
import { Camera, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  // Exactly 6 images
  const items = GALLERY_ITEMS.slice(0, 6);

  return (
    <section id="gallery" className="w-full bg-white py-6 sm:py-8 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header: Compact */}
        <div className="flex items-center gap-2 mb-3.5 sm:mb-5">
          <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-[#24523d]">
            <Camera className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg md:text-xl font-black text-slate-900 tracking-tight leading-none">
              Photo Gallery
            </h2>
            <p className="text-[11px] text-slate-500 font-medium mt-0.5">
              Ambience, kitchen crafts & dining moments
            </p>
          </div>
        </div>

        {/* Compact Grid: 3 cols on mobile, 6 on desktop */}
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 cursor-pointer shadow-2xs hover:shadow-xs transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2 text-white">
                <span className="text-[10px] font-bold line-clamp-1">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightweight Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-lg w-full bg-white rounded-2xl overflow-hidden shadow-xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition"
              aria-label="Close image preview"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden bg-slate-100">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3 text-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#24523d]">
                {activeItem.category}
              </span>
              <h4 className="text-sm font-bold text-slate-900 mt-0.5">
                {activeItem.title}
              </h4>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
