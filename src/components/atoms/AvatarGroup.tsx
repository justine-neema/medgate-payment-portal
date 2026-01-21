import React from 'react';
import { AvatarProps } from './Avatar';

interface AvatarGroupProps {
  children: React.ReactNode;
  isBordered?: boolean;
  max?: number;
  total?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  children,
  isBordered = false,
  max,
  total,
  size = 'md',
  className = '',
}) => {
  const childrenArray = React.Children.toArray(children);
  const displayedChildren = max ? childrenArray.slice(0, max) : childrenArray;
  const remainingCount = 6;

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center -space-x-2">
        {displayedChildren.map((child, index) => (
          <div
            key={index}
            className={`relative ${isBordered ? 'ring-2 ring-white' : ''} rounded-full`}
            style={{ zIndex: displayedChildren.length - index }}
          >
            {React.isValidElement<AvatarProps>(child) && React.cloneElement(child, { size })}
          </div>
        ))}
      </div>
    </div>
  );
};
