import React from 'react';

interface BrutalistCardProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  shadowColor?: string;
  hoverEffect?: boolean;
}

export const BrutalistCard: React.FC<BrutalistCardProps> = ({
  children,
  className = '',
  bgColor = 'bg-white',
  hoverEffect = false,
}) => {
  return (
    <div
      className={`card-brutal ${bgColor} p-6 transition-all duration-150 relative ${
        hoverEffect ? 'hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
