import React from 'react';

export const StarburstSvg: React.FC<{ text?: string; color?: string; className?: string }> = ({
  text = '100% OFFLINE',
  color = '#B8FF00',
  className = 'w-28 h-28',
}) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[3px_3px_0px_#050505]">
        <polygon
          points="50,0 63,22 88,14 82,39 100,56 79,69 83,95 58,86 42,100 31,77 6,80 16,56 0,37 23,31 22,5 45,17"
          fill={color}
          stroke="#050505"
          strokeWidth="3"
        />
      </svg>
      <span className="absolute font-mono text-[10px] font-bold text-ink uppercase tracking-tight text-center px-1 leading-tight -rotate-6">
        {text}
      </span>
    </div>
  );
};
