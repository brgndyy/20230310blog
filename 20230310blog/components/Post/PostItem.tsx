import classes from "./PostItem.module.css";
import Image from "next/image";
import Link from "next/link";
import { ContentItem } from "types/ContentItem";
import MusicPostItem from "../Music/MusicPostItem";
import MoviePostItem from "components/Movie/MoviePostItem";

type PostItemProps = ContentItem;

export default function PostItem(props: PostItemProps) {
  const { category } = props;

  return (
    <>
      {category === "music" && <MusicPostItem musicProps={props} />}
      {category === "movie" && <MoviePostItem movieProps={props} />}
      {category === "book" && <MoviePostItem movieProps={props} />}
      {category === "exhibiton" && <MoviePostItem movieProps={props} />}
      {category === "etc" && <MoviePostItem movieProps={props} />}
    </>
  );
}
