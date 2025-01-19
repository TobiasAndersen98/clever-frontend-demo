'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useRef } from 'react';
import { ModalOldProps } from './ModalOld.types';

export const ModalOld: React.FC<ModalOldProps> = ({ 
  className = '',
  open,
  onClose,
  children,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
    const dialog = dialogRef.current;

    if (open) {
      if (!dialog?.open) dialog?.showModal();
    } else if (dialog?.open) {
      dialog?.close();
    }
  }, [open]);

  // Close modal on native close event (e.g., dialog.close())
  const handleDialogClose = () => {
    if (onClose) onClose(); // Call the parent's close function
  };
  
  return (
    <div className={cn(open ? 'visible' : 'invisible', 'fixed flex items-center justify-center')}>
      <dialog
        ref={dialogRef}
        className={cn(
          'shadow-xl rounded-lg p-6 bg-white w-full max-w-[800px] overflow-hidden',
          className,
        )}
      role="dialog"
      aria-modal="true"
      onClose={handleDialogClose} // Synchronize React's state with native close
    >
        {children}
      </dialog>
    </div>
  );
};
