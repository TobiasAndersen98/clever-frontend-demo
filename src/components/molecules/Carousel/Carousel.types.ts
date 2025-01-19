export interface CarouselProps {
  className?: string; 
  children?: React.ReactNode;
  onSlideChange?: (activeIndex: number) => void;
  prevButtonLabel?: string;
  nextButtonLabel?: string;
  finalButtonLabel?: string;
  closebutton?: string;
  closeModal?: () => void;
}
