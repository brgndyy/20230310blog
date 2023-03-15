import Header from "components/Header/Header";
import Card from "components/HomeCard/Card";
import PostList from "components/Music/PostList";

export default function Page() {
  return (
    <>
      <Card>
        <Header />
        <PostList />
      </Card>
    </>
  );
}
