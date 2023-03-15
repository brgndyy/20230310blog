import { useRef, useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";
import classes from "./Backdrop.module.css";

interface PortalProps {
  modalClose: () => void;
  modal: boolean;
}

export const Backdrop = ({ modalClose, modal }: PortalProps) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#modal_backdrop");
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(
        <div
          className={`${classes.overlay} ${
            modal ? classes.show : classes.hide
          }`}
          onClick={modalClose}
        ></div>,
        ref.current
      )
    : null;
};
