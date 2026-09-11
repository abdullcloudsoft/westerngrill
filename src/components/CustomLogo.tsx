import React from 'react';

interface CustomLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showLocation?: boolean;
  className?: string;
  lightMode?: boolean;
}

export const CustomLogo: React.FC<CustomLogoProps> = ({
  size = 'md',
  showLocation = true,
  className = '',
  lightMode = false,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8 md:w-9 md:h-9',
    lg: 'w-11 h-11 md:w-12 md:h-12',
  };

  const titleSizes = {
    sm: 'text-base font-extrabold tracking-tight',
    md: 'text-lg md:text-xl font-extrabold tracking-tight',
    lg: 'text-2xl md:text-3xl font-extrabold tracking-tight',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Original Western Grill Emblem: Minimalist plate + grill grate + golden flame */}
      <div
        className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-[#24523d] to-[#173729] text-amber-400 shadow-sm border border-[#2f664c]/40 ${iconSizes[size]} shrink-0`}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-amber-400"
        >
          {/* Round grill skillet rim */}
          <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.8" className="text-amber-400/80" />
          {/* Grill crossbars */}
          <path d="M7 16H25" stroke="#E2E8F0" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.8" />
          <path d="M9 11.5H23" stroke="#E2E8F0" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.7" />
          <path d="M9 20.5H23" stroke="#E2E8F0" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.7" />
          {/* Dynamic flame spark in center */}
          <path
            d="M16 6C16 6 18.5 10 18.5 12.5C18.5 14 17.5 15.5 16 15.5C14.5 15.5 13.5 14 13.5 12.5C13.5 11 14.5 9 16 6Z"
            fill="#F59E0B"
          />
          <path
            d="M16 9C16 9 17 11.2 17 12.5C17 13.3 16.5 14 16 14C15.5 14 15 13.3 15 12.5C15 11.8 15.3 10.5 16 9Z"
            fill="#FEF08A"
          />
        </svg>
      </div>

      {/* Brand Wordmark & Location subtitle */}
      <div className="flex flex-col text-left leading-none">
        <span
          className={`font-display font-black tracking-wide ${titleSizes[size]} ${
            lightMode ? 'text-white' : 'text-slate-900'
          }`}
        >
          WESTERN <span className="text-[#24523d] font-bold">GRILL</span>
        </span>
        {showLocation && (
          <span
            className={`text-[10px] md:text-[11px] font-medium tracking-wider uppercase mt-0.5 ${
              lightMode ? 'text-slate-200/90' : 'text-slate-500'
            }`}
          >
            Commercial Market
          </span>
        )}
      </div>
    </div>
  );
};
