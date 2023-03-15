"use client";

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
      <div className={classes.category_div}>
        <div className={classes.top_line}></div>
        <div className={classes.category_card}>
          <Link href={`${href}`} className={classes.category_link}>
            <li className={classes.category}>
              <p className={classes.category_name}>{category}</p>
            </li>
          </Link>
        </div>
      </div>
    </>
  );
}
