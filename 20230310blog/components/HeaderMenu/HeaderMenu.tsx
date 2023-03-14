"use client";
import classes from "./HeaderMenu.module.css";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Modal from "components/Modal/Modal";
import Backdrop from "../Modal/Backdrop";

export default function HeaderMenu() {
  const [modal, setModal] = useState(false);

  const modalIsOpen = () => {
    setModal(true);
  };
  const modalIsClosed = () => {
    setModal(false);
  };

  useEffect(() => {
    console.log("modal의 상태가 변경되었습니다. 현재의 modal 상태는 : ", modal);
  }, [modal]);

  return (
    <>
      <div className={classes.header_menu_container} onClick={modalIsOpen}>
        <div className={classes.header_menu_button}>
          <span className={classes.header_menu_bar}></span>
          <span className={classes.header_menu_bar}></span>
          <span className={classes.header_menu_bar}></span>
        </div>
      </div>
      {modal &&
        createPortal(
          <>
            <Backdrop onClose={modalIsClosed} modal={modal}>
              <Modal modal={modal} onClose={modalIsClosed} />
            </Backdrop>
          </>,
          document.getElementById("modal_portal") as HTMLDivElement
        )}
    </>
  );
}
