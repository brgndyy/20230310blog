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
                <div className={classes.artist}>
                  <div>아티스트</div>

                  <div className={classes.colon}> : </div>

                  <div>{rest.artist}</div>
                </div>

                <div className={classes.title}>
                  <div>앨범명</div>
                  <div className={classes.colon}>:</div>
                  <div>{title}</div>
                </div>

                <span>
                  평점 <span className={classes.colon}>:</span> {rest.rate}
                </span>
              </div>
            </div>
          </li>
        </Link>
      </div>
    </>
  );
}
