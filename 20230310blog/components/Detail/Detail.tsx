import { ContentItem } from "types/ContentItem";
import Image from "next/image";

type ItemType = {
  dataProps: ContentItem;
};

export default function Detail({ dataProps }: ItemType) {
  console.log(dataProps);
  return <div>Detail</div>;
}
