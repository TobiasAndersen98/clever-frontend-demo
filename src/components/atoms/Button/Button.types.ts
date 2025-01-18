import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
  className?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'link';
  disable?: boolean;
  iconLeading?: boolean;
  iconTrailing?: boolean;
}
