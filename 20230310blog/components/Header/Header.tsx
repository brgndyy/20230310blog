import Link from "next/link";
import classes from "./Header.module.css";

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
          <div className={classes.header_menu_container}>
            <div className={classes.header_menu_button}>
              <span className={classes.header_menu_bar}></span>
              <span className={classes.header_menu_bar}></span>
              <span className={classes.header_menu_bar}></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
