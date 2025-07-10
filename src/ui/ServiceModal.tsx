import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { CloseSvg } from "./icon";


type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
};

export default function ServiceModal({ isOpen, onClose, children, title }: ModalProps) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isBrowser) return null;

  return createPortal(
    <div
      onClick={handleBackdropClick}
      className={`modal_backdrop items-end ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`modal_container w-full rounded-t-2xl ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        
        <div className="modal_header justify-between">
          <h2 className="font-medium">{title}</h2>
          <button onClick={onClose}>
            <CloseSvg className="w-6 h-6" />
          </button>
        </div>
        <div className="modal_content">{children}</div>
      </div>
    </div>,
    document.body
  );
}
