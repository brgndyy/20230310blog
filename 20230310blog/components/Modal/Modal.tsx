"use client";

import classes from "./Modal.module.css";

type Props = {
  onClose: () => void;
  modal: boolean;
};

export default function Modal({ modal, onClose }: Props) {
  console.log(modal);
  return (
    <>
      {modal && (
        <nav className={`${classes.modal_container} ${modal && classes.show}`}>
          <div className={classes.modal_list_container}>
            <ul></ul>
          </div>
        </nav>
      )}
    </>
  );
}
