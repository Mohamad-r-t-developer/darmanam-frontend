import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CloseSvg } from "./icon";


type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string | null;
};

export default function CenterModal({ isOpen, onClose, children, title }: ModalProps) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          className="fixed max-w-screen-xs m-auto inset-0 z-50 flex items-center backdrop-blur-sm  justify-center bg-[rgba(21,21,21,32%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="w-[90%] rounded-2xl bg-neutral-Pure_White overflow-hidden"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="font-medium">{title}</h2>
              <button onClick={onClose}>
                <CloseSvg className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
