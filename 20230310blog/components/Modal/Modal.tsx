"use client";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";
import ModalList from "./ModalList";
import { useRef, useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

type Props = {
  modalClose: () => void;
  modal: boolean;
};

const DUMMY_Category = [
  {
    id: 1,
    category: "음악",
    href: "music",
  },
  {
    id: 2,
    category: "영화",
    href: "movie",
  },
  { id: 3, category: "책", href: "book" },

  { id: 4, category: "전시", href: "exihibiton" },

  { id: 5, category: "기타", href: "etc" },
];

export default function Modal({ modal, modalClose }: Props) {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#modal");
    setMounted(true);
  }, []);
  return mounted && ref.current
    ? createPortal(
        <>
          <nav
            className={`${classes.modal_container} ${modal && classes.show}`}
          >
            <div className={classes.close_icon}>
              <AiOutlineClose onClick={modalClose} />
            </div>
            <div className={classes.modal_list_container}>
              <ul className={classes.modal_ul}>
                {DUMMY_Category.map((item) => {
                  return (
                    <ModalList
                      key={item.id}
                      category={item.category}
                      href={item.href}
                    />
                  );
                })}
              </ul>
            </div>
          </nav>
        </>,
        ref.current
      )
    : null;
}
