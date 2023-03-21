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
            <div className={classes.detail_artist}>
              <span>아티스트 : {dataProps.artist}</span>
            </div>
            <div className={classes.detail_title}>
              <span>앨범명 : {dataProps.title}</span>
            </div>
            <div className={classes.detail_released}>
              <span>발매일 : {dataProps.released}</span>
            </div>
            <div className={classes.detail_rate}>
              <span>평점 : {dataProps.rate}</span>
            </div>
          </div>
        </div>
        <div className={classes.detail_review}>{dataProps.review}</div>
      </div>
    </>
  );
}
