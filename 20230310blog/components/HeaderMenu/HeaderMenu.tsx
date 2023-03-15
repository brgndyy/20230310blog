"use client";
import classes from "./HeaderMenu.module.css";
import { useState, useEffect } from "react";
import Modal from "components/Modal/Modal";
import { Backdrop } from "components/Modal/Backdrop";

export default function HeaderMenu() {
  const [modal, setModal] = useState(false);

  const modalOpen = () => {
    setModal(true);
  };

  const modalClose = () => {
    setModal(false);
  };

  useEffect(() => {
    console.log("modal의 상태가 변경되었습니다. 현재의 modal 상태는 : ", modal);
  }, [modal]);

  return (
    <>
      <div className={classes.header_menu_container} onClick={modalOpen}>
        <div className={classes.header_menu_button}>
          <span className={classes.header_menu_bar}></span>
          <span className={classes.header_menu_bar}></span>
          <span className={classes.header_menu_bar}></span>
        </div>
      </div>

      <Backdrop modalClose={modalClose} modal={modal} />
      <Modal modalClose={modalClose} modal={modal} />
    </>
  );
}
