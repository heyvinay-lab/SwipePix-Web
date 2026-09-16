import React from 'react';

export const TrashCanSvg: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Lid */}
      <rect x="14" y="10" width="36" height="6" rx="2" fill="#FF4FD8" stroke="#050505" strokeWidth="3" />
      <rect x="26" y="6" width="12" height="4" fill="#050505" />
      {/* Can Body */}
      <path
        d="M18 16 L22 56 C22 58 24 60 26 60 L38 60 C40 60 42 58 42 56 L46 16 Z"
        fill="#FFFFFF"
        stroke="#050505"
        strokeWidth="3"
      />
      {/* Ribs */}
      <line x1="26" y1="22" x2="28" y2="52" stroke="#050505" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="22" x2="32" y2="52" stroke="#050505" strokeWidth="2" strokeLinecap="round" />
      <line x1="38" y1="22" x2="36" y2="52" stroke="#050505" strokeWidth="2" strokeLinecap="round" />
      {/* Safety Badge Floating */}
      <circle cx="48" cy="46" r="11" fill="#B8FF00" stroke="#050505" strokeWidth="2.5" />
      <text x="48" y="50" textAnchor="middle" fill="#050505" fontSize="10" fontFamily="Space Mono" fontWeight="bold">
        30d
      </text>
    </svg>
  );
};
