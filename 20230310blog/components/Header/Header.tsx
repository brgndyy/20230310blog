import Link from "next/link";
import classes from "./Header.module.css";
import HeaderMenu from "components/HeaderMenu/HeaderMenu";

export default function Header() {
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
          <HeaderMenu />
        </div>
      </header>
    </>
  );
}
