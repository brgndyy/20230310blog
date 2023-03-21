"use client";

import classes from "./PostList.module.css";
import PostItem from "./PostItem";
import { ContentType } from "types/ContentType";

type PostListProps = {
  contentList: ContentType[];
};

export default function PostList({ contentList }: PostListProps) {
  return (
    <>
      <div className={classes.post_list_card}>
        <div className={classes.post_list_container}>
          <ul className={classes.post_list_ul}>
            {contentList.map((item) => {
              return <PostItem key={item.id} {...item} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
