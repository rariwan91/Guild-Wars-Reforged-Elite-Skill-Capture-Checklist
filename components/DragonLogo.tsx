import React from 'react';

export const DragonLogo: React.FC<{ className?: string }> = ({ className = "h-12 w-auto" }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    aria-label="Guild Wars Dragon Logo"
  >
    <defs>
      <linearGradient id="reforged-fire-stroke" x1="0%" y1="0%" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fcd34d" /> {/* Amber-300 */}
        <stop offset="50%" stopColor="#ea580c" /> {/* Orange-600 */}
        <stop offset="100%" stopColor="#dc2626" /> {/* Red-600 */}
      </linearGradient>
      
      <filter id="stroke-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    
    {/* 
      Minimalist "Two Lines" Dragon
      Abstract representation using open brush strokes.
    */}
    
    {/* Top Stroke: Horn/Brow flowing into the Snout */}
    <path 
      d="M 85 20 C 65 15 45 25 10 45" 
      stroke="url(#reforged-fire-stroke)" 
      strokeWidth="8" 
      strokeLinecap="round"
      strokeLinejoin="round"
      filter="url(#stroke-glow)"
    />
    
    {/* Bottom Stroke: Jaw flowing down into the Neck */}
    <path 
      d="M 20 65 C 45 65 65 75 75 95" 
      stroke="url(#reforged-fire-stroke)" 
      strokeWidth="8" 
      strokeLinecap="round"
      strokeLinejoin="round"
      filter="url(#stroke-glow)"
    />
  </svg>
);