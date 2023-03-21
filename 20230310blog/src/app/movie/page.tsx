import React from "react";
import ContentCard from "components/ContentCard/ContentCard";
import Header from "components/Header/Header";
import { dummyMovieData } from "DUMMY_DATA/movie/dummy_movie.data";
import PostList from "components/Music/PostList";

export default function Page() {
  return (
    <>
      <ContentCard>
        <Header />
        <PostList contentList={dummyMovieData} />
      </ContentCard>
    </>
  );
}
