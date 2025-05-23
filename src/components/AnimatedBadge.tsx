import React from 'react';

interface AnimatedBadgeProps {
  text: string;
  className?: string;
}

const AnimatedBadge: React.FC<AnimatedBadgeProps> = ({ text, className = '' }) => {
  return (
    <span 
      className={`
        inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
        bg-green-100 text-green-800 animate-pulse
        ${className}
      `}
    >
      {text}
    </span>
  );
};

export default AnimatedBadge;