import ContentCard from "components/ContentCard/ContentCard";
import Header from "components/Header/Header";
import MovieDetail from "components/Detail/MovieDetail";
import NotFound from "@/app/music/[...id]/not-found";
import { dummyMovieData } from "DUMMY_DATA/movie/dummy_movie.data";

export default function Page({ params }: any) {
  const id = parseInt(params.id[0]);

  const selectedData = dummyMovieData.find((data) => data.id === id);

  if (!selectedData) {
    return <NotFound />;
  }

  return (
    <>
      <>
        <ContentCard>
          <Header />
          <MovieDetail dataProps={selectedData} />
        </ContentCard>
      </>
    </>
  );
}
