import Link from "next/link";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header className={classes.header_container}>
        <Link href={"/"}>
          <h1 className={classes.header_title}>BRGNDY</h1>
        </Link>
      </header>
    </>
  );
}
