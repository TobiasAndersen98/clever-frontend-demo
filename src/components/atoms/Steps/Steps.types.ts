export interface StepsProps {
  className?: string;
  setIndex: (index: number) => void;
  index: number;
  labels?: string[];
  children?: React.ReactNode;
}
