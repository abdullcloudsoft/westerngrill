import React from 'react';
import { CATEGORIES } from '../data/restaurantData';

interface CategoryScrollerProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryScroller: React.FC<CategoryScrollerProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="w-full bg-white py-3 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Horizontal carousel container with no visible scrollbar */}
        <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1 -mx-1">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory.toLowerCase() === cat.slug.toLowerCase();
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.slug)}
                className="flex flex-col items-center group shrink-0 focus:outline-none cursor-pointer text-center transition transform active:scale-95"
              >
                {/* Circular thumbnail with active indicator ring */}
                <div
                  className={`relative w-15 h-15 sm:w-17 sm:h-17 rounded-full p-0.5 transition-all duration-200 ${
                    isActive
                      ? 'ring-2 ring-[#24523d] ring-offset-2 scale-105 shadow-md'
                      : 'border border-slate-200/90 group-hover:border-[#24523d]/40'
                  }`}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full rounded-full object-cover shadow-2xs"
                    loading="lazy"
                  />
                  {isActive && (
                    <div className="absolute inset-0 rounded-full bg-[#24523d]/15 pointer-events-none" />
                  )}
                </div>

                {/* Category Name pill */}
                <span
                  className={`mt-1.5 text-xs font-semibold tracking-tight transition-colors duration-150 ${
                    isActive
                      ? 'text-[#24523d] font-extrabold'
                      : 'text-slate-600 group-hover:text-slate-900'
                  }`}
                >
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
