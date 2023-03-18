import Header from "components/Header/Header";
import ContentCard from "components/ContentCard/ContentCard";
import PostList from "components/Music/PostList";
import { dummyMusicData } from "DUMMY_DATA/dummy_music_data";

export default function Page() {
  //api/music 으로 get요청을 날려서 데이터를 받아와서 이걸 PostList에 뿌려준다 ?

  return (
    <>
      <ContentCard>
        <Header />
        <PostList contentList={dummyMusicData} />
      </ContentCard>
    </>
  );
}
