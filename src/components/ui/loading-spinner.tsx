import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`} role="status" aria-label="Loading">
      <div className="relative">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-2 border-border/20"></div>
        
        {/* Spinning gradient ring */}
        <div 
          className="absolute inset-0 rounded-full border-2 border-transparent animate-spin"
          style={{
            background: 'conic-gradient(from 0deg, transparent, hsl(var(--primary)), hsl(var(--accent)), transparent)',
            mask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), white calc(100% - 2px))',
            WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), white calc(100% - 2px))'
          }}
        />
        
        {/* Inner QR pattern dots */}
        <div className="absolute inset-2 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-0.5">
            <div className="w-1 h-1 bg-primary rounded-sm animate-pulse" style={{ animationDelay: '0ms' }} />
            <div className="w-1 h-1 bg-accent rounded-sm animate-pulse" style={{ animationDelay: '150ms' }} />
            <div className="w-1 h-1 bg-accent rounded-sm animate-pulse" style={{ animationDelay: '300ms' }} />
            <div className="w-1 h-1 bg-primary rounded-sm animate-pulse" style={{ animationDelay: '450ms' }} />
          </div>
        </div>
      </div>
      
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;