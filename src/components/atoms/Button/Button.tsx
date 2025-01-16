import { cn } from '@/lib/utils';
import React from 'react';

import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
  className = '',
}) => <div className={cn('', className)}>Button</div>;
