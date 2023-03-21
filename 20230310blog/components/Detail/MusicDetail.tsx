import { ContentItem } from "types/ContentItem";
import Image from "next/image";
import classes from "./MusicDetail.module.css";

type ItemType = {
  dataProps: ContentItem;
};

export default function MusicDetail({ dataProps }: ItemType) {
  console.log(dataProps);
  return <div>Detail</div>;
}
