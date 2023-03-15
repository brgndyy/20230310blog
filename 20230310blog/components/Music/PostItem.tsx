import classes from "./PostItem.module.css";
import Image from "next/image";

type Props = {
  id: number;
  title: string;
  artist: string;
  released: string;
  rate: number;
  summary: string;
  review: string;
  imageUrl: string;
};

export default function PostItem({
  title,
  id,
  artist,
  released,
  rate,
  summary,
  review,
  imageUrl,
}: Props) {
  return (
    <>
      <li>
        <Image src={imageUrl} width={200} height={200} alt={title} />
        {title}
      </li>
    </>
  );
}
