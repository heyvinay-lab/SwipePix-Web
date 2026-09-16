import React from 'react';
import { NeoBadge } from './NeoBadge';

interface SectionHeaderProps {
  tag?: string;
  tagVariant?: 'accent' | 'warm' | 'primary' | 'secondary' | 'white';
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  darkTheme?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag,
  tagVariant = 'accent',
  title,
  subtitle,
  align = 'center',
  darkTheme = false,
}) => {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignClasses}`}>
      {tag && (
        <div className="mb-3">
          <NeoBadge variant={tagVariant} rotate={align === 'center' ? '-1' : '0'}>
            {tag}
          </NeoBadge>
        </div>
      )}
      <h2
        className={`font-mono text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight ${
          darkTheme ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg md:text-xl font-sans ${
            darkTheme ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
