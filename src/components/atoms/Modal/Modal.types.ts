export interface ModalProps {
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}
