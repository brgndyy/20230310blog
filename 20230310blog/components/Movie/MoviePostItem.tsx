import classes from "./MoviePostItem.module.css";
import Image from "next/image";
import Link from "next/link";
import { ContentItem } from "types/ContentItem";

type MoviePostItemProps = {
  movieProps: ContentItem;
};

export default function MoviePostItem({ movieProps }: MoviePostItemProps) {
  const { imageUrl, title, rate, actors, category } = movieProps;

  return (
    <>
      <div className={classes.post_card}>
        <Link href={`/${category}/3}`} className={classes.post_link}>
          <li className={classes.post_li}>
            <div className={classes.post_img_card}>
              <Image
                className={classes.post_img}
                src={imageUrl}
                width={200}
                height={240}
                alt={title}
              />
            </div>
            <div className={classes.post_info_card}>
              <div className={classes.post_info}>
                <div className={classes.artist_div}>
                  <span className={classes.artist_span}>
                    &nbsp;&nbsp;&nbsp;&nbsp;제목&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span>&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;</span>
                  <span>{title}</span>
                </div>

                <div className={classes.title_div}>
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;출연진
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                    &nbsp;&nbsp;&nbsp;
                  </span>
                  {actors?.map((item, key) => {
                    return <span key={key}>{item} , </span>;
                  })}
                </div>
                <div className={classes.rate_div}>
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;평점&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span>{rate}</span>
                </div>
                <div className={classes.post_date}>
                  <span>2022-01-01</span>
                </div>
              </div>
            </div>
          </li>
        </Link>
      </div>
    </>
  );
}
