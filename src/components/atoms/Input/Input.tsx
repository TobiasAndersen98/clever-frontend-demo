import React from 'react';
import { cn } from '@/lib/utils';
import { InputProps } from './Input.types';


export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = '',
      label,
      error,
      floating = false,
      type = 'text',
      value,
      ...props
    },
    ref
  ) => (
  <div className={cn('relative flex flex-col', className)}>
    {/* Input Field */}
    <input
      type={type}
      id='floating'
      value={value}
      {...props}
      className={cn(
        'font-roboto h-12 tracking-body-large px-2 text-base text-gray-900 bg-transparent border-[1px] border-clevergreen focus:outline-none focus:border-[#6750A4] peer',
        error ? 'border-red-500' : '',
        className
      )}
      placeholder=" "
    />

    {/* Floating Label */}
      {label && (
        <label
          htmlFor="floating"
          className={cn(
            `absolute text-base text-[#49454F] peer-focus:text-clevergreen duration-300 z-10 origin-[0] bg-white px-2 hover:cursor-text ml-4`,
            value
              ? 'top-[-0.25rem] scale-75 -translate-y-2'
              : 'scale-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-[-0.25rem] peer-focus:scale-75 peer-focus:-translate-y-2'
          )}
        >
          {label}
        </label>
      )}
  </div>
  )
);
