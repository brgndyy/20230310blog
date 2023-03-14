import React from "react";
import classes from "./ModalList.module.css";
import Link from "next/link";

type Props = {
  category: string;
  href: string;
};

export default function ModalList({ category, href }: Props) {
  return (
    <>
      <div className={classes.cateogry_card}>
        <Link href={`${href}`} className={classes.category_link}>
          <li className={classes.category}>
            <p>{category}</p>
          </li>
        </Link>
      </div>
    </>
  );
}
