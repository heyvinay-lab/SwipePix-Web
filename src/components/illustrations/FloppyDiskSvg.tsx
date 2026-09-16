import React from 'react';

export const FloppyDiskSvg: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Floppy Outer Body */}
      <rect x="6" y="6" width="52" height="52" rx="4" fill="#8B5CF6" stroke="#050505" strokeWidth="4" />
      {/* Metal Shutter Top */}
      <rect x="18" y="6" width="28" height="20" fill="#FFFFFF" stroke="#050505" strokeWidth="3" />
      <rect x="24" y="10" width="6" height="12" fill="#050505" />
      {/* Label Area Bottom */}
      <rect x="14" y="32" width="36" height="24" rx="2" fill="#B8FF00" stroke="#050505" strokeWidth="3" />
      {/* Label Lines */}
      <line x1="18" y1="38" x2="46" y2="38" stroke="#050505" strokeWidth="2" strokeDasharray="3 3" />
      <line x1="18" y1="44" x2="46" y2="44" stroke="#050505" strokeWidth="2" strokeDasharray="3 3" />
      <line x1="18" y1="50" x2="38" y2="50" stroke="#050505" strokeWidth="2" strokeDasharray="3 3" />
    </svg>
  );
};
