import React from 'react';
import { X, Phone, MessageSquare, Utensils, Sparkles } from 'lucide-react';
import { MenuItem } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ItemDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({
  item,
  onClose,
}) => {
  if (!item) return null;

  // Formulate WhatsApp order inquiry message
  const whatsappUrl = `https://wa.me/923300007697?text=${encodeURIComponent(
    `Hello Western Grill, I would like to inquire about the ${item.name} from your menu.`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition backdrop-blur-xs"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dish Image */}
        <div className="relative aspect-16/10 w-full bg-slate-100">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          {item.badge && (
            <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-bold shadow-xs flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>{item.badge}</span>
            </div>
          )}
        </div>

        {/* Content Details */}
        <div className="p-4 sm:p-5">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#24523d] bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
              {item.category}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            {item.name}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 font-medium mt-2 leading-relaxed">
            {item.description}
          </p>

          <div className="mt-4 p-3 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Pricing</span>
              <span className="text-sm font-extrabold text-[#24523d]">{item.price}</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Kitchen</span>
              <span className="text-xs font-semibold text-slate-700">Freshly Made to Order</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-5 space-y-2">
            <a
              href={RESTAURANT_INFO.phoneTel}
              className="w-full py-3 bg-[#24523d] text-white rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2 hover:bg-[#1a3c2c] shadow-xs active:scale-98 transition"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>Call Hotline to Order ({RESTAURANT_INFO.phone})</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-emerald-600 text-white rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2 hover:bg-emerald-700 shadow-xs active:scale-98 transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </a>

            <button
              onClick={onClose}
              className="w-full py-2 text-xs text-slate-500 font-semibold hover:text-slate-800 transition"
            >
              Return to Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
