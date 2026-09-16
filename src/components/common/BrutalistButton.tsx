import React from 'react';

interface BrutalistButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'warm' | 'white' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  download?: string | boolean;
  external?: boolean;
  children: React.ReactNode;
}

export const BrutalistButton: React.FC<BrutalistButtonProps> = ({
  variant = 'primary',
  size = 'md',
  asLink = false,
  href = '#',
  download,
  external = false,
  className = '',
  children,
  ...props
}) => {
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-hover',
    secondary: 'bg-secondary text-white hover:bg-secondary-hover',
    accent: 'bg-accent text-ink hover:bg-accent-hover',
    warm: 'bg-warm text-ink hover:bg-warm-hover',
    white: 'bg-white text-ink hover:bg-gray-50',
    dark: 'bg-dark text-white border-white shadow-[4px_4px_0px_#FFFFFF] hover:bg-black',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };

  const combinedClasses = `btn-brutal-base ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (asLink) {
    return (
      <a
        href={href}
        className={combinedClasses}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...(download ? { download: typeof download === 'string' ? download : true } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
