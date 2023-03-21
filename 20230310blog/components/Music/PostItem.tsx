import classes from "./PostItem.module.css";
import Image from "next/image";
import Link from "next/link";
import { ContentType } from "types/ContentType";

type PostItemProps = ContentType;

export default function PostItem(props: PostItemProps) {
  const { id, title, imageUrl, ...rest } = props;

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
                height={200}
                alt={title}
              />
            </div>
            <div className={classes.post_info_card}>
              <div className={classes.post_info}>
                <div>
                  <span>아티스트 : </span>
                  <span>{rest.artist}</span>
                </div>
                <div>
                  <span>앨범 : </span>
                  <span>{title}</span>
                </div>
                <div>
                  <span>평점 : </span>
                  <span>{rest.rate}</span>
                </div>
                <div>
                  <span>게시글 날짜 : </span>
                  <span>{rest.postDate}</span>
                </div>
              </div>
            </div>
          </li>
        </Link>
      </div>
    </>
  );
}
