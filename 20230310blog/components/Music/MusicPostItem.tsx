import classes from "./MusicPostItem.module.css";
import Image from "next/image";
import Link from "next/link";
import { ContentItem } from "types/ContentItem";

type MusicPostItemProps = {
  musicProps: ContentItem;
};

export default function MusicPostItem({ musicProps }: MusicPostItemProps) {
  const { imageUrl, title, rate, artist } = musicProps;
  return (
    <>
      <div className={classes.post_card}>
        <Link href={"/:id"} className={classes.post_link}>
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
                    &nbsp;&nbsp;&nbsp;&nbsp;아티스트
                  </span>
                  <span>&nbsp;&nbsp; : &nbsp;&nbsp;&nbsp;</span>
                  <span>{artist}</span>
                </div>
                <div className={classes.title_div}>
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;앨범 &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                    &nbsp;&nbsp;&nbsp;
                  </span>
                  <span>{title}</span>
                </div>
                <div className={classes.rate_div}>
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;평점
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
