import { Button } from '@/components/atoms/Button/Button';
import { cn } from '@/lib/utils';
import React from 'react';

import { StepsProps } from './Steps.types'; 

export const Steps: React.FC<StepsProps> = ({
  className = '',
  setIndex,
  labels,
  index,
}) => {
  const handleClick = (clickedIndex: number) => {
    setIndex(clickedIndex);
  };
  return (
    <div className="mt-8 flex flex-col">
      <div className={cn('mb-8 flex items-center justify-center', className)}>
        <div className="flex w-1/3 justify-between">
          {labels?.map((label, idx) => (
            <Button
              key={idx}
              variant="link"
              className="w-fit items-center justify-center text-[18px] text-colors-content-primary"
              onClick={() => handleClick(idx)} // Pass the correct index
            >
              <span
                className={cn(
                  idx === index && 'text-colors-content-interactive underline',
                )}
              >
                {label}
              </span>
            </Button>
          ))}
        </div>
      </div>
      <div className="h-[2px] bg-colors-backgrounds-tertiary"></div>
    </div>
  );
};
