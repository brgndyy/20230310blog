"use client";

import { AuthContext } from "shared/context/auth-context";
import { useContext, useEffect } from "react";

import Link from "next/link";
import classes from "./Header.module.css";
import HeaderMenu from "components/HeaderMenu/HeaderMenu";
import { getCookies } from "cookies-next";

export default function Header() {
  const auth = useContext(AuthContext);
  const cookie = getCookies();

  console.log(cookie);
  const { isLoggedIn } = auth;

  return (
    <>
      <header className={classes.header_container}>
        <div className={classes.header_position}>
          <div className={classes.header_card}>
            <Link href={"/"}>
              <img
                className={classes.thumbnail_img}
                src="/image/thumbnail.svg"
                alt="thumbnail"
              />
            </Link>
          </div>
          {isLoggedIn && <button>로그인 완료 상태</button>}
          <HeaderMenu />
        </div>
      </header>
    </>
  );
}
