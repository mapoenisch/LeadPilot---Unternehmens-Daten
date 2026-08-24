import logoImg from '../assets/logo.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-12 sm:h-14',
  };

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={logoImg}
        alt="LeadPilot Logo"
        className={`${sizeClasses[size]} w-auto object-contain transition-transform duration-200 hover:scale-105`}
        loading="eager"
      />
    </div>
  );
}
