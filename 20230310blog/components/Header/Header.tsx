import Link from "next/link";
import classes from "./Header.module.css";
import Image from "next/image";
import thumbnailImg from "../../public/image/thumbnail.svg";

export default function Header() {
  return (
    <>
      <header className={classes.header_container}>
        <div className={classes.header_card}>
          <Link href={"/"}>
            <Image
              src={thumbnailImg}
              alt="thumbnail"
              width={450}
              height={130}
            />
          </Link>
        </div>
      </header>
    </>
  );
}
