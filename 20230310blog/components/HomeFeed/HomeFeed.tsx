import classes from "./HomeFeed.module.css";
import Image from "next/image";
import Link from "next/link";

export default function HomeFeed() {
  return (
    <div className={classes.homeFeed_card}>
      <div className={classes.homeFeed_1_container}>
        <div className={classes.item_container}>
          <Link href={"/music"}>
            <Image
              className={classes.category_img}
              src={"/image/music.jpeg"}
              alt={"music"}
              width={300}
              height={300}
              priority
            />
            <div className={classes.item_info}>
              <div>
                <h3>음악</h3>
              </div>
            </div>
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
              priority
            />
            <div className={classes.item_info}>
              <div>
                <h3>영화</h3>
              </div>
            </div>
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
                priority
              />
              <div className={classes.item_info}>
                <div>
                  <h3>책</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.homeFeed_2_container}>
        <div className={classes.item_container}>
          <div className={classes.category_item}>
            <Link href={"/exhibiton"}>
              <Image
                className={classes.category_img}
                src={"/image/exhibition.jpeg"}
                alt={"exhibiton"}
                width={300}
                height={300}
                priority
              />
              <div className={classes.item_info}>
                <div>
                  <h3>전시</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className={classes.item_container}>
          <div className={classes.category_item}>
            <Link href={"/etc"}>
              <Image
                className={classes.category_img}
                src={"/image/etc.png"}
                alt={"etc"}
                width={300}
                height={300}
                priority
              />
              <div className={classes.item_info}>
                <div>
                  <h3>기타</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
