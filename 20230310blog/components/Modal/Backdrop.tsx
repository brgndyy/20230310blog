"use client";

import classes from "./Backdrop.module.css";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
  modal: boolean;
};

export default function Backdrop({ modal, children, onClose }: Props) {
  return (
    <>
      {modal && (
        <div onClick={onClose} className={`${classes.back_drop_show}`}>
          {children}
        </div>
      )}
    </>
  );
}
