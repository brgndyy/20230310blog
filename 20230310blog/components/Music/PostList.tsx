"use client";

import classes from "./PostList.module.css";
import PostItem from "./PostItem";
import { ContentType } from "types/ContentType";
import { useState, useEffect, useCallback } from "react";
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";

type PostListProps = {
  contentList: ContentType[];
};

export default function PostList({ contentList }: PostListProps) {
  const getPostCountByViewport = () => {
    const width = window.innerWidth;
    if (width <= 550 || width <= 300) return 1;
    if (width <= 1050) return 2;
    return 3;
  };
  const initialPostCount = getPostCountByViewport();
  const [posts, setPosts] = useState(
    contentList.slice(0, initialPostCount * 2)
  );
  const [loading, setIsLoading] = useState(false);

  const loadMorePosts = useCallback(() => {
    const postCount = getPostCountByViewport();
    const startIndex = posts.length;
    const endIndex = startIndex + postCount;
    const moreData = contentList.slice(startIndex, endIndex);

    setPosts([...posts, ...moreData]);
  }, [posts, contentList]);

  useEffect(() => {
    const handleScroll = () => {
      if (loading) return;

      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const clientHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      if (scrollTop + clientHeight >= scrollHeight - 1) {
        setIsLoading(true);
        setTimeout(() => {
          loadMorePosts();
          setIsLoading(false);
        }, 500);
      }
    };

    handleScroll(); // 초기 렌더링 직후 handleScroll 함수 호출
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [posts, loadMorePosts, loading]);

  useEffect(() => {
    const handleResize = () => {
      const postCount = getPostCountByViewport();
      const currentPostCount = posts.length;
      const newPostCount = Math.ceil(currentPostCount / postCount) * postCount;
      const moreData = contentList.slice(currentPostCount, newPostCount);

      setPosts([...posts, ...moreData]);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [posts, contentList]);

  return (
    <>
      <div className={classes.post_list_card}>
        <div className={classes.post_list_container}>
          <ul className={classes.post_list_ul}>
            {posts.map((item) => {
              return <PostItem key={item.id} {...item} />;
            })}
          </ul>
          {loading && <LoadingSpinner />}
        </div>
      </div>
    </>
  );
}
