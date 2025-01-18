import { ReactNode } from 'react';

export interface ModalProps {
  className?: string;
  open: boolean;
  children: ReactNode;
}
