export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  className?: string;
  label?: string;
  error?: string;
  floating?: boolean;
  children?: React.ReactNode;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
