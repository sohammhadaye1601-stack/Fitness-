import React from 'react';

interface SolidLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
}

export const SolidLogo: React.FC<SolidLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const titleSizes = {
    sm: 'text-xl tracking-tight leading-none',
    md: 'text-2xl sm:text-3xl tracking-tight leading-none',
    lg: 'text-3xl sm:text-4xl tracking-tight leading-none',
    xl: 'text-4xl sm:text-5xl tracking-tight leading-none',
  };

  const subtitleSizes = {
    sm: 'text-[9px] tracking-widest',
    md: 'text-[10px] sm:text-[11px] tracking-[0.2em]',
    lg: 'text-xs sm:text-sm tracking-[0.25em]',
    xl: 'text-sm sm:text-base tracking-[0.3em]',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Brand Icon: Dynamic Athletic Angular Shield with Cut-Out "S" */}
      <div className={`relative ${iconSizes[size]} flex-shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(220,38,38,0.6)]"
        >
          {/* Outer athletic polygon shield */}
          <path
            d="M50 4L92 24V64L50 96L8 64V24L50 4Z"
            className="fill-neutral-950 stroke-red-600"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          {/* Red Power Accent Corner */}
          <path
            d="M50 11L85 28V45L50 22L15 45V28L50 11Z"
            className="fill-red-600"
            opacity="0.9"
          />
          {/* Bold Athletic 'S' Monogram */}
          <path
            d="M68 34H36L32 50H62L58 72H28L26 80H68L74 58H44L46 42H70L68 34Z"
            fill="white"
          />
          {/* Red Core S Slash */}
          <polygon
            points="58,50 42,50 38,62 54,62"
            fill="#DC2626"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-1">
          <span className={`font-display font-extrabold text-white uppercase ${titleSizes[size]} font-athletic tracking-wider`}>
            SOLID
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-600 mb-0.5 animate-pulse" />
        </div>
        {showSubtitle && (
          <div className="flex items-center gap-1.5">
            <span className={`font-sans font-bold text-neutral-400 uppercase ${subtitleSizes[size]}`}>
              HEALTH &amp; FITNESS
            </span>
            <span className="hidden sm:inline text-red-500 font-extrabold text-[9px]">
              • PORUR
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
