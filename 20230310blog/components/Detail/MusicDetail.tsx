import { ContentItem } from "types/ContentItem";
import Image from "next/image";
import classes from "./MusicDetail.module.css";

type ItemType = {
  dataProps: ContentItem;
};

export default function MusicDetail({ dataProps }: ItemType) {
  return (
    <>
      <div className={classes.detail_container}>
        <div className={classes.detail_imageAndInfo}>
          <div className={classes.detail_img_container}>
            <Image
              className={classes.detail_img}
              src={dataProps.imageUrl}
              width={400}
              height={400}
              alt={dataProps.title}
            />
          </div>
          <div className={classes.detail_info}>
            <div className={`${classes.detail}`}>
              <div className={classes.artist}>아티스트 :</div>
              <div className={classes.detail_artist}>{dataProps.artist}</div>
            </div>
            <div className={`${classes.detail}`}>
              <div className={classes.title}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;앨범명 :
              </div>
              <div className={classes.detail_title}>{dataProps.title}</div>
            </div>
            <div className={`${classes.detail}`}>
              <div className={classes.released}>발매일 :</div>
              <div className={classes.detail_released}>
                {dataProps.released}
              </div>
            </div>
            <div className={`${classes.detail} ${classes.rate}`}>
              <span>평점 : {dataProps.rate}</span>
            </div>
          </div>
        </div>
        <div className={classes.detail_review}>{dataProps.review}</div>
      </div>
    </>
  );
}
