import { ReactNode } from 'react';

export interface ModalOldProps {
  className?: string;
  open: boolean;
  onClose?: () => void;
  children: ReactNode;
}
