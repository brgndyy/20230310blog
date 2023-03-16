import React from "react";
import Card from "components/HomeCard/Card";
import Header from "components/Header/Header";
import { dummyMovieData } from "DUMMY_DATA/movie/dummy_movie.data";
import PostList from "components/Music/PostList";

export default function Page() {
  return (
    <>
      <Card>
        <Header />
        <PostList contentList={dummyMovieData} />
      </Card>
    </>
  );
}
