import Link from "next/link";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header className={classes.header_container}>
        <Link href={"/"}>
          <h1 className={classes.header_title}>헤더입니다.</h1>
        </Link>
      </header>
    </>
  );
}
