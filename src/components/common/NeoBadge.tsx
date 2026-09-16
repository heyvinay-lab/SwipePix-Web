import React from 'react';

interface NeoBadgeProps {
  variant?: 'accent' | 'warm' | 'primary' | 'secondary' | 'white' | 'dark';
  rotate?: '-4' | '-3' | '-2' | '-1' | '0' | '1' | '2' | '3' | '4' | string;
  children: React.ReactNode;
  className?: string;
}

export const NeoBadge: React.FC<NeoBadgeProps> = ({
  variant = 'accent',
  rotate = '0',
  children,
  className = '',
}) => {
  const variantStyles = {
    accent: 'bg-accent text-ink border-ink',
    warm: 'bg-warm text-ink border-ink',
    primary: 'bg-[#1D4ED8] text-white border-ink',
    secondary: 'bg-[#6D28D9] text-white border-ink',
    white: 'bg-white text-ink border-ink',
    dark: 'bg-dark text-white border-white',
  };

  const getRotationClass = (rot: string) => {
    switch (rot) {
      case '-4': return '-rotate-4';
      case '-3': return '-rotate-3';
      case '-2': return '-rotate-2';
      case '-1': return '-rotate-1';
      case '1': return 'rotate-1';
      case '2': return 'rotate-2';
      case '3': return 'rotate-3';
      case '4': return 'rotate-4';
      default: return 'rotate-0';
    }
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider border-2 shadow-[2px_2px_0px_#050505] ${
        variantStyles[variant]
      } ${getRotationClass(rotate)} ${className}`}
    >
      {children}
    </span>
  );
};
