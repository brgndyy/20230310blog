"use client";

import { AuthContext } from "shared/context/auth-context";
import { useContext, useEffect } from "react";

import Link from "next/link";
import classes from "./Header.module.css";
import HeaderMenu from "components/HeaderMenu/HeaderMenu";
import { useCookies } from "react-cookie";

export default function Header() {
  const auth = useContext(AuthContext);
  const [cookies, setCookies] = useCookies(["userCookie"]);
  const { isLoggedIn } = auth;

  useEffect(() => {
    console.log(cookies);
  }, [cookies]);

  console.log(document.cookie);

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
