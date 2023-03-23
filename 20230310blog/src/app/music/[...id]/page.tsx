import ContentCard from "components/ContentCard/ContentCard";
import Header from "components/Header/Header";
import MusicDetail from "components/Detail/MusicDetail";
import { dummyMusicData } from "DUMMY_DATA/Music/dummy_music_data";
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
        <MusicDetail dataProps={selectedData} />
      </ContentCard>
    </>
  );
}
