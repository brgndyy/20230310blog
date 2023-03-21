import ContentCard from "components/ContentCard/ContentCard";
import Header from "components/Header/Header";
import Detail from "components/Detail/Detail";
import { dummyMusicData } from "DUMMY_DATA/dummy_music_data";
import NotFound from "./not-found";

export default function Page({ params }: any) {
  const id = parseInt(params.id[0]);

  const selectedData = dummyMusicData.find((data) => data.id === id);

  if (!selectedData) {
    return <NotFound />;
  }
  return (
    <>
      <ContentCard>
        <Header />
        <Detail dataProps={selectedData} />
      </ContentCard>
    </>
  );
}
