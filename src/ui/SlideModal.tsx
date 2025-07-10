import { createPortal } from "react-dom";
import { RightSvg } from "./icon";


interface SlideModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string | null;
}

export default function SlideModal({ children, isOpen, onClose, title }: SlideModalProps) {
  return createPortal(
    <div
      className={`modal_backdrop  items-center ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`modal_container w-full h-full ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="modal_header gap-2">
          <button onClick={onClose}>
            <RightSvg className="w-6 h-6" />
          </button>
          <h2 className="font-medium">{title || "عنوان مودال"}</h2>
        </div>

        {/* Content */}
        <div className="modal_content">{children}</div>
      </div>
    </div>,
    document.body
  );
}
