import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = function Modal({ children, open, onCancel }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialog} onClose={onCancel}>
      {open && children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
