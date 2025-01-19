import { cn } from '@/lib/utils';
import React from 'react';

import { ModalProps } from './Modal.types';

export const Modal: React.FC<ModalProps> = ({
  className = '',
  isOpen = true,
  onClose,
  children,
}) => {
  if (!isOpen) return null;
  
  return (<div className={cn('fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 text-[#000', className)} onClick={onClose}>
    <div className='bg-white'>
      {children}
      </div>
</div>)}
