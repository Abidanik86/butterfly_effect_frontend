import React from 'react';

/**
 * ButterflyLogo — Parametric SVG Vector Recreation of the official Butterfly Effect Logo
 * Developed by Mr Abid Hasan Anik
 * Faithfully reproduces the circular vortex, calligraphic 'B' and 'E' wing curves,
 * antique gold thorax & antennae, and dual-tone Peacock Teal / Obsidian Navy gradients.
 */
export const ButterflyLogo = ({
  size = 72,
  className = '',
  variant = 'full', // 'full', 'mark-only', 'monochrome', 'gold'
  animate = false,
  strokeDashoffset = 0,
  glow = false,
  style = {},
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`butterfly-svg ${animate ? 'butterfly-animated' : ''} ${className}`}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        overflow: 'visible',
        filter: glow ? 'drop-shadow(0 0 12px rgba(197, 168, 128, 0.45))' : 'none',
        ...style,
      }}
    >
      <defs>
        {/* Navy to Teal Gradient (Outer Wings & Swirls) */}
        <linearGradient id="beGradientNavyTeal" x1="20" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0C2340" />
          <stop offset="55%" stopColor="#1B6A85" />
          <stop offset="100%" stopColor="#2A839E" />
        </linearGradient>

        {/* Ethereal Teal to Cyan Gradient (Inner Wing Veins) */}
        <linearGradient id="beGradientWingVeins" x1="60" y1="40" x2="140" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2A839E" />
          <stop offset="50%" stopColor="#1B6A85" />
          <stop offset="100%" stopColor="#0C2340" />
        </linearGradient>

        {/* Antique Brushed Gold Gradient */}
        <linearGradient id="beGradientGold" x1="80" y1="40" x2="120" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E6C89C" />
          <stop offset="50%" stopColor="#C5A880" />
          <stop offset="100%" stopColor="#A27B48" />
        </linearGradient>

        {/* Subtle Glow Filter */}
        <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* --- CIRCULAR RIPPLE FRAME (VORTEX) --- */}
      {/* Outer circular dynamic arcs representing the butterfly effect waves */}
      <g className="butterfly-vortex" strokeWidth="2.5" strokeLinecap="round">
        {/* Top-Right to Bottom-Right sweeping arc (Gold accent) */}
        <path
          d="M 125 35 C 160 50, 175 88, 168 122 C 162 145, 142 168, 115 174"
          stroke="url(#beGradientGold)"
          strokeOpacity="0.85"
        />
        {/* Bottom Left to Top Left sweeping arc (Navy/Teal) */}
        <path
          d="M 75 174 C 45 162, 28 130, 32 94 C 36 62, 58 40, 85 32"
          stroke="url(#beGradientNavyTeal)"
          strokeWidth="2.8"
        />
        {/* Bottom swirling flourishes */}
        <path
          d="M 68 160 C 82 178, 108 182, 130 172"
          stroke="url(#beGradientNavyTeal)"
          strokeWidth="2.2"
        />
        <path
          d="M 50 142 C 40 125, 42 105, 52 90"
          stroke="url(#beGradientGold)"
          strokeOpacity="0.75"
          strokeWidth="2"
        />
      </g>

      {/* --- CENTRAL THORAX & ANTENNAE (CHAMPAGNE GOLD) --- */}
      <g className="butterfly-body">
        {/* Left antenna with curl */}
        <path
          d="M 98 78 C 94 65, 85 54, 75 52"
          stroke="url(#beGradientNavyTeal)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        {/* Right antenna with curl */}
        <path
          d="M 102 78 C 106 65, 115 54, 125 52"
          stroke="url(#beGradientNavyTeal)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        {/* Central Teardrop Thorax (Gold) */}
        <path
          d="M 100 78 C 97 85, 96 98, 100 112 C 104 98, 103 85, 100 78 Z"
          fill="url(#beGradientGold)"
        />
        <circle cx="100" cy="74" r="2.5" fill="url(#beGradientGold)" />
      </g>

      {/* --- LEFT WING (CALLIGRAPHIC 'B' MONOGRAM) --- */}
      <g className="butterfly-wing-left">
        {/* Upper Outer Wing Curve */}
        <path
          d="M 98 94 C 85 75, 52 50, 42 54 C 34 58, 38 78, 48 92 C 58 106, 80 114, 98 116"
          stroke="url(#beGradientNavyTeal)"
          strokeWidth="3.2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* Inner Wing Upper Ribbon (Forms top lobe of 'B') */}
        <path
          d="M 50 68 C 65 68, 86 82, 94 98"
          stroke="url(#beGradientWingVeins)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 58 76 C 70 82, 85 96, 90 108"
          stroke="url(#beGradientGold)"
          strokeWidth="2"
          strokeOpacity="0.9"
        />
        {/* Lower Left Wing Loop (Forms lower lobe of 'B') */}
        <path
          d="M 98 116 C 82 118, 55 125, 50 140 C 46 152, 60 162, 72 154 C 84 146, 92 130, 98 122"
          stroke="url(#beGradientNavyTeal)"
          strokeWidth="3.2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* Inner lower wing vein */}
        <path
          d="M 62 138 C 72 136, 84 130, 92 124"
          stroke="url(#beGradientWingVeins)"
          strokeWidth="2.2"
        />
      </g>

      {/* --- RIGHT WING (CALLIGRAPHIC 'E' FLOURISH) --- */}
      <g className="butterfly-wing-right">
        {/* Upper Outer Wing Curve */}
        <path
          d="M 102 94 C 115 75, 148 50, 158 54 C 166 58, 162 78, 152 92 C 142 106, 120 114, 102 116"
          stroke="url(#beGradientNavyTeal)"
          strokeWidth="3.2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* Inner Wing Upper Ribbon (Top stroke of 'E') */}
        <path
          d="M 150 68 C 135 68, 114 82, 106 98"
          stroke="url(#beGradientWingVeins)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 142 76 C 130 82, 115 96, 110 108"
          stroke="url(#beGradientGold)"
          strokeWidth="2"
          strokeOpacity="0.9"
        />
        {/* Lower Right Wing Loop & sweeping tail (Forms middle & bottom strokes of 'E') */}
        <path
          d="M 102 116 C 118 118, 145 125, 150 140 C 154 152, 140 162, 128 154 C 116 146, 108 130, 102 122"
          stroke="url(#beGradientNavyTeal)"
          strokeWidth="3.2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* Lower inner flourish */}
        <path
          d="M 138 138 C 128 136, 116 130, 108 124"
          stroke="url(#beGradientWingVeins)"
          strokeWidth="2.2"
        />
      </g>

      {/* Central crossing stroke connecting the B and E unity */}
      <path
        d="M 94 116 Q 100 120 106 116"
        stroke="url(#beGradientNavyTeal)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ButterflyLogo;
