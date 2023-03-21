import classes from "./PostItem.module.css";
import Image from "next/image";
import Link from "next/link";
import { ContentType } from "types/ContentType";

type PostItemProps = ContentType;

export default function PostItem(props: PostItemProps) {
  const { id, title, imageUrl, postDate, ...rest } = props;

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
                  <span>{rest.artist}</span>
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
                  <span>{rest.rate}</span>
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
