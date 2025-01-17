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
      onChange,
      ...props
    },
    ref
  ) => {
    return (
      <>
  <div className={cn('relative flex flex-col', className)}>
    <input
      type={type}
      id='floating'
      value={value}
      onChange={onChange}
      {...props}
      className={cn(
        'font-roboto h-12 tracking-body-large pl-4 text-base text-[#003732] bg-transparent border-[1px] border-clevergreen focus:outline-none focus:border-[#003732] peer',
        error ? 'border-[#E2284D] text-[#E2284D]' : '',
      )}
      placeholder=" "
    />
      {label && (
        <label
          htmlFor="floating"
          className={cn(
            `absolute text-base text-[#49454F] peer-focus:text-clevergreen duration-300 z-10 origin-[0] bg-white pl-3 ml-1 hover:cursor-text`,
            value
              ? 'top-[-0.25rem] scale-75 -translate-y-2'
              : 'scale-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-[-0.25rem] peer-focus:scale-75 peer-focus:-translate-y-2'
          )}
        >
          {label}
        </label>
      )}

       {value && (
          <button
            type="button"
            className="absolute right-0 top-0 h-full w-10 flex items-center justify-center"
            onClick={() => onChange && onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4.80005 4.79999L19.2 19.2" stroke="#003732" strokeMiterlimit="10" />
              <path d="M19.2 4.79999L4.80005 19.2" stroke="#003732" strokeMiterlimit="10" />
            </svg>
          </button>
        )}

        </div>
        {error && (
          <p className="text-[#E2284D] mt-1 text-[11px] leading-[140%]">{error}</p>
        )}
      </>
  
    );
  }
)