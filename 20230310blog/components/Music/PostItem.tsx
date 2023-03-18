import classes from "./PostItem.module.css";
import Image from "next/image";
import { ContentType } from "types/ContentType";

type PostItemProps = ContentType;

export default function PostItem(props: PostItemProps) {
  const { id, title, imageUrl, ...rest } = props;

  return (
    <>
      <div className={classes.post_card}>
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
              <span>아티스트 : {rest.artist}</span>
              <span>앨범명 : {rest.title}</span>
              <span>평점 : {rest.rate}</span>
            </div>
          </div>
        </li>
      </div>
    </>
  );
}
