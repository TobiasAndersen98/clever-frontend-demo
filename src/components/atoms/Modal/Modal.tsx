'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useRef } from 'react';

import { ModalProps } from './Modal.types';

export const Modal: React.FC<ModalProps> = ({
  className = '',
  open,
  onClose,
  children,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open) {
      dialog?.showModal();
    } else {
      dialog?.close();
    }
  }, [open]);

  const closeModal = (
    event: React.MouseEvent<HTMLDialogElement, MouseEvent>,
  ) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <dialog
      onMouseDown={closeModal}
      ref={dialogRef}
      className={cn(
        'shadow-xl rounded-3 p-0 backdrop:bg-[#00000080] backdrop:backdrop-blur-[1.5px]',
        className,
      )}
    >
      <div className="flex h-full flex-col justify-between p-600 pb-0">
        {children}
      </div>
    </dialog>
  );
};
