"use client";

import React from "react";
import classes from "./ModalList.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/dist/client/components/navigation";

type Props = {
  category: string;
  href: string;
};

export default function ModalList({ category, href }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  // 클릭하려고 하는 link 컴포넌트의 href 와 현재 pathname 이 같다면 새로고침
  const routerHandler = () => {
    if (`/${href}` === pathname) {
      window.location.reload();
    }
  };
  return (
    <>
      <div className={classes.category_div}>
        <div className={classes.top_line}></div>
        <div className={classes.category_card}>
          <Link href={`${href}`} className={classes.category_link}>
            <li className={classes.category} onClick={routerHandler}>
              <p className={classes.category_name}>{category}</p>
            </li>
          </Link>
        </div>
      </div>
    </>
  );
}
