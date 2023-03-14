"use client";

import classes from "./Modal.module.css";
import ModalList from "./ModalList";

type Props = {
  onClose: () => void;
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
    href: "/movie",
  },
  { id: 3, category: "책", href: "book" },

  { id: 4, category: "전시", href: "exihibiton" },

  { id: 5, category: "기타", href: "etc" },
];

export default function Modal({ modal, onClose }: Props) {
  console.log("Modal의 현재 modal 상태는 : ", modal);
  return (
    <>
      <nav className={`${classes.modal_container} ${modal && classes.show}`}>
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
    </>
  );
}
