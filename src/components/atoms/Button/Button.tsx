import { cn } from '@/lib/utils';
import React from 'react';

import { ButtonProps } from './Button.types';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps> (
  ({
  className = '',
  children,
  ... props
  },
  ref
  ) => {
    return (
        <button
        className={cn('bth', className)}
        {...props}
      >
          {children}
        </button>
    );
  },
);
  
