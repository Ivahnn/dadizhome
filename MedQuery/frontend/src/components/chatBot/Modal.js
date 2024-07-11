import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import classes from "./ChatBot.module.css";

export default function Modal({ children, open, onClose, className = '' }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    } else {
      modal.close();
    }
    const handleOutsideClick = (event) => {
      if (event.target.nodeName === 'DIALOG') {
        onClose();
      }
    };

    modal.addEventListener('click', handleOutsideClick);
    return () => {
      modal.removeEventListener('click', handleOutsideClick);
    };
  }, [open, onClose]);

  return createPortal(
    <dialog
      ref={dialog}
      className={`${classes.modal} ${className}`}
    >
      {children}
    </dialog>,
    document.getElementById("modal-root")
  );
}
