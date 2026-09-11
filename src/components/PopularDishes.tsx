import React from 'react';
import { Plus, Flame, ArrowRight } from 'lucide-react';
import { POPULAR_DISHES } from '../data/restaurantData';
import { MenuItem } from '../types';

interface PopularDishesProps {
  onSelectDish: (dish: MenuItem) => void;
  onViewAllMenu: () => void;
}

export const PopularDishes: React.FC<PopularDishesProps> = ({
  onSelectDish,
  onViewAllMenu,
}) => {
  // Strictly 4 popular picks as requested
  const items = POPULAR_DISHES.slice(0, 4);

  return (
    <section id="popular" className="w-full bg-white py-6 sm:py-8 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header - Clean & Compact */}
        <div className="flex items-center justify-between mb-3.5 sm:mb-5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center text-[#24523d]">
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg md:text-xl font-black text-slate-900 tracking-tight leading-none">
                Popular Picks
              </h2>
              <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                Top customer favorites & grilled specialties
              </p>
            </div>
          </div>

          <button
            onClick={onViewAllMenu}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#24523d] hover:text-[#193a2b] transition cursor-pointer"
          >
            <span>Full Menu</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* 4 Compact Cards: 2-col on mobile, 4-col on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 md:gap-4">
          {items.map((dish) => (
            <div
              key={dish.id}
              onClick={() => onSelectDish(dish)}
              className="group bg-white rounded-2xl border border-slate-200/80 hover:border-[#24523d]/40 shadow-2xs hover:shadow-xs transition flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {dish.badge && (
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-amber-500 text-white font-bold text-[10px] tracking-wide shadow-2xs">
                      {dish.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-2.5 sm:p-3">
                  <h3 className="font-extrabold text-xs sm:text-sm text-slate-900 line-clamp-1 group-hover:text-[#24523d] transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-snug">
                    {dish.description}
                  </p>
                </div>
              </div>

              {/* Price & Plus button */}
              <div className="px-2.5 pb-2.5 sm:px-3 sm:pb-3 pt-1 flex items-center justify-between border-t border-slate-100 mt-1">
                <span className="text-[10px] sm:text-xs font-semibold text-slate-600">
                  {dish.price}
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectDish(dish);
                  }}
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#24523d] text-white flex items-center justify-center hover:bg-[#1b3d2d] shadow-2xs active:scale-90 transition cursor-pointer"
                  aria-label={`Inquire about ${dish.name}`}
                >
                  <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
