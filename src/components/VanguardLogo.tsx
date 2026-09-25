import React from 'react';

interface VanguardLogoProps {
  className?: string;
  markOnly?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  layout?: 'horizontal' | 'stacked';
  lightText?: boolean;
  onClick?: () => void;
}

export const VanguardLogo: React.FC<VanguardLogoProps> = ({
  className = '',
  markOnly = false,
  size = 'md',
  layout = 'horizontal',
  lightText = false,
  onClick,
}) => {
  // Dimension and typography definitions
  const dimensions = {
    sm: {
      markWidth: 36,
      markHeight: 26,
      textScale: 'text-sm sm:text-base',
      subtextScale: 'text-[8px] sm:text-[9px]',
      subtextTracking: 'tracking-[0.26em]',
      gap: 'gap-2.5',
    },
    md: {
      markWidth: 48,
      markHeight: 35,
      textScale: 'text-lg sm:text-xl',
      subtextScale: 'text-[9.5px] sm:text-[10.5px]',
      subtextTracking: 'tracking-[0.32em]',
      gap: 'gap-3',
    },
    lg: {
      markWidth: 64,
      markHeight: 46,
      textScale: 'text-2xl sm:text-3xl',
      subtextScale: 'text-xs sm:text-xs',
      subtextTracking: 'tracking-[0.35em]',
      gap: 'gap-4',
    },
    xl: {
      markWidth: 84,
      markHeight: 61,
      textScale: 'text-3xl sm:text-4xl',
      subtextScale: 'text-xs sm:text-sm',
      subtextTracking: 'tracking-[0.38em]',
      gap: 'gap-4',
    },
    '2xl': {
      markWidth: 120,
      markHeight: 88,
      textScale: 'text-4xl sm:text-5xl',
      subtextScale: 'text-sm sm:text-base',
      subtextTracking: 'tracking-[0.4em]',
      gap: 'gap-5',
    },
  }[size];

  // Official Brand Primary Colors
  // Navy: #18365B (Left chevron, text, primary anchor)
  // Slate/Steel Blue: #4C6E8E (Right chevron, secondary brand accent)
  const navyColor = lightText ? '#FFFFFF' : '#18365B';
  const slateColor = lightText ? '#8FB0CF' : '#4C6E8E';
  const shadowColor = lightText ? '#050C17' : '#0E1F35';
  const textColor = lightText ? 'text-white' : 'text-[#18365B]';
  const subtextColor = lightText ? 'text-slate-300' : 'text-[#18365B]';

  return (
    <div
      onClick={onClick}
      className={`inline-flex ${
        layout === 'stacked' ? 'flex-col items-center text-center' : 'items-center'
      } ${dimensions.gap} select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
      id="vanguard-official-brandmark"
      aria-label="Vanguard Tech Pty.(Ltd)"
    >
      {/* Official Interlocking Geometric Dual-Chevron 3D Emblem */}
      <svg
        width={dimensions.markWidth}
        height={dimensions.markHeight}
        viewBox="0 0 360 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
        role="img"
        aria-label="Vanguard Official 3D Interlocking Dual-Chevron Logo Mark"
      >
        <defs>
          {/* Crisp drop-shadow where the Slate Blue chevron crosses over the Navy Blue chevron */}
          <filter id="vanguardCrossShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="-3"
              dy="4"
              stdDeviation="3.5"
              floodColor={shadowColor}
              floodOpacity={lightText ? 0.65 : 0.42}
            />
          </filter>
        </defs>

        {/* Left Chevron: Official Deep Navy (#18365B) */}
        <path
          d="M 140 220 L 50 48 L 88 72 L 80 84 L 140 168 L 200 84 L 192 72 L 230 48 Z"
          fill={navyColor}
        />

        {/* Right Chevron: Official Slate / Steel Blue (#4C6E8E) with 3D Overlap Shadow */}
        <path
          d="M 220 220 L 130 48 L 168 72 L 160 84 L 220 168 L 280 84 L 272 72 L 310 48 Z"
          fill={slateColor}
          filter="url(#vanguardCrossShadow)"
        />
      </svg>

      {/* Official Typography: VANGUARD TECH / PTY.(LTD) */}
      {!markOnly && (
        <div
          className={`flex flex-col leading-tight ${
            layout === 'stacked' ? 'items-center text-center mt-1' : ''
          }`}
        >
          {/* Primary Wordmark */}
          <span
            className={`font-display font-extrabold tracking-[0.16em] uppercase ${
              dimensions.textScale
            } ${textColor}`}
          >
            VANGUARD TECH
          </span>

          {/* Subtitle with official wide tracking */}
          <span
            className={`font-sans font-semibold uppercase ${dimensions.subtextTracking} ${
              dimensions.subtextScale
            } ${subtextColor} mt-0.5 opacity-90`}
          >
            PTY.(LTD)
          </span>
        </div>
      )}
    </div>
  );
};

