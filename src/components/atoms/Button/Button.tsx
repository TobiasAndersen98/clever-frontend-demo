import { cn } from '@/lib/utils';
import React from 'react';

import { ButtonProps } from './Button.types';


const variants = {
  primary: 'bg-[#003732] text-sm border-2 border-[#003732] text-[#fff] leading-[140%] tracking-[0.056px] py-[10px] ',
  secondary: 'bg-[#fff] text-sm border-2 border-[#003732] text-[#003732] leading-[140%] tracking-[0.056px] py-[10px] ',
  link: 'text-[#003732] text-sm leading-[140%] tracking-[0.056px] underline underline-offset-4 hover:bg-[#003732] hover:text-white',
}

const variantIcons = {
  primary: '#fff',
  secondary: '#003732',
  link: '',
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps> (
  ({
  className = '',
  children,
  variant = 'primary',
  iconLeading = false,
  iconTrailing = false,
  ... props
  },
  ref
  ) => {
    const iconColer = variantIcons[variant];

    return (
      <button
        className={cn('flex items-center',
          variants[variant],
          iconLeading && 'gap-2 pl-[10px] pr-4',
          iconTrailing && 'gap-2 pl-4 pr-[10px]',
          !iconLeading && !iconTrailing && variant !== 'link' && 'px-4',
          className
        )}
        {...props}
      >
        {iconLeading &&
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21 12H3.3"  stroke={iconColer} stroke-miterlimit="10"/>
            <path d="M10.5 19.2L3.3 12L10.5 4.79999" stroke={iconColer} stroke-miterlimit="10"/>
          </svg>
        }
          {children}
        {iconTrailing &&
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3.3 12H21" stroke={iconColer} stroke-miterlimit="10"/>
            <path d="M13.5 4.79999L20.7 12L13.5 19.2" stroke={iconColer} stroke-miterlimit="10" />
          </svg>
        }
      </button>
    );
  },
);
  
