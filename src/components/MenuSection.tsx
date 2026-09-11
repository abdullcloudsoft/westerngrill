import React, { useMemo } from 'react';
import { Plus, Utensils, Check, Search, X } from 'lucide-react';
import { CATEGORIES, FULL_MENU } from '../data/restaurantData';
import { MenuItem } from '../types';

interface MenuSectionProps {
  selectedCategory: string;
  onSelectCategory: (categorySlug: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectDish: (dish: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onSelectDish,
}) => {
  // Filter menu items by category and search query
  const filteredItems = useMemo(() => {
    return FULL_MENU.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        item.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="menu" className="w-full bg-white py-6 sm:py-8 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#24523d] mb-1">
              <Utensils className="w-3.5 h-3.5" />
              <span>Dining Menu</span>
            </div>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-none">
              OUR MENU
            </h2>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search dishes..."
              className="w-full pl-9 pr-8 py-2 bg-slate-50 hover:bg-slate-100/80 focus:bg-white text-xs sm:text-sm text-slate-800 placeholder-slate-400 rounded-xl border border-slate-200 focus:border-[#24523d] focus:ring-1 focus:ring-[#24523d] outline-none transition"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-slate-600 rounded-full"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs / Chips (Scrollable on mobile) */}
        <div className="mb-4 -mx-3 px-3 sm:mx-0 sm:px-0">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            <button
              onClick={() => onSelectCategory('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider shrink-0 transition cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#24523d] text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
              }`}
            >
              All
            </button>

            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory.toLowerCase() === cat.slug.toLowerCase();
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.slug)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider shrink-0 transition cursor-pointer flex items-center gap-1 ${
                    isActive
                      ? 'bg-[#24523d] text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                  }`}
                >
                  {cat.name}
                  {isActive && <Check className="w-3 h-3 text-amber-300" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Compact Food Card Grid: 2 columns on mobile, 3 on tablet, 4 on desktop */}
        {filteredItems.length === 0 ? (
          <div className="py-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <Utensils className="w-8 h-8 text-slate-400 mx-auto mb-2 opacity-60" />
            <h3 className="text-sm font-bold text-slate-700">No dishes found</h3>
            <p className="text-xs text-slate-500 mt-1">Try selecting a different category or clearing your search.</p>
            <button
              onClick={() => {
                onSelectCategory('all');
                onSearchChange('');
              }}
              className="mt-3 px-3.5 py-1.5 bg-[#24523d] text-white text-xs font-bold rounded-lg hover:bg-[#1a3c2c] transition cursor-pointer"
            >
              Show All Dishes
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-3.5 md:gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectDish(item)}
                className="group bg-white rounded-2xl border border-slate-200/80 hover:border-[#24523d]/40 shadow-2xs hover:shadow-xs transition flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                <div>
                  {/* Optimized compact photo */}
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    {item.badge && (
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-amber-500 text-white font-bold text-[10px] tracking-wide shadow-2xs">
                        {item.badge}
                      </div>
                    )}
                  </div>

                  {/* Text details */}
                  <div className="p-2.5 sm:p-3">
                    <h3 className="font-extrabold text-xs sm:text-sm text-slate-900 group-hover:text-[#24523d] transition-colors line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-snug">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="px-2.5 pb-2.5 sm:px-3 sm:pb-3 pt-1 flex items-center justify-between border-t border-slate-100 mt-1">
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-700">
                    {item.price}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectDish(item);
                    }}
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#24523d] text-white flex items-center justify-center hover:bg-[#1a3c2c] shadow-2xs active:scale-90 transition cursor-pointer"
                    aria-label={`Inquire about ${item.name}`}
                  >
                    <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
