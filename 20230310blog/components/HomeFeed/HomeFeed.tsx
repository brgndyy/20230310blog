import classes from "./HomeFeed.module.css";
import Image from "next/image";
import Link from "next/link";

export default function HomeFeed() {
  return (
    <div className={classes.homeFeed_container}>
      <div className={classes.item_container}>
        <Link href={"/exhibiton"}>
          <Image
            className={classes.category_img}
            src={"/image/exhibition.png"}
            alt={"exhibiton"}
            width={300}
            height={300}
          />
        </Link>
      </div>
      <div className={classes.item_container}>
        <Link href={"/movie"}>
          <Image
            className={classes.category_img}
            src={"/image/movie.jpeg"}
            alt={"movie"}
            width={300}
            height={300}
          />
        </Link>
      </div>
      <div className={classes.item_container}>
        <div className={classes.category_item}>
          <Link href={"/exhibiton"} className={classes.link}>
            <Image
              className={classes.category_img}
              src={"/image/book.jpeg"}
              alt={"book"}
              width={300}
              height={300}
            />
          </Link>
        </div>
      </div>
      <div className={classes.item_container}>
        <div className={classes.category_item}>
          <Link href={"/exhibiton"}>
            <Image
              className={classes.category_img}
              src={"/image/exhibition.png"}
              alt={"itemImage"}
              width={300}
              height={300}
            />
          </Link>
        </div>
      </div>
      <div className={classes.item_container}>
        <div className={classes.category_item}>
          <Link href={"/exhibiton"}>
            <Image
              className={classes.category_img}
              src={"/image/exhibition.png"}
              alt={"itemImage"}
              width={300}
              height={300}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
