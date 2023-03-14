import classes from "./Backdrop.module.css";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
  modal: boolean;
};

export default function Backdrop({ modal, children, onClose }: Props) {
  console.log("backdrop의 현재 modal 상태는 : ", modal);
  return (
    <>
      <div onClick={onClose} className={`${classes.back_drop_show}`}>
        {children}
      </div>
    </>
  );
}
