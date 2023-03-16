import classes from "./PostItem.module.css";
import Image from "next/image";
import { ContentType } from "types/ContentType";

type PostItemProps = ContentType;

export default function PostItem(props: PostItemProps) {
  const { id, title, imageUrl, ...rest } = props;
  return (
    <>
      <li></li>
    </>
  );
}
