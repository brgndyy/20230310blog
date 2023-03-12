import Header from "components/Header/Header";
import HomeFeed from "components/HomeFeed/HomeFeed";
import Card from "components/HomeCard/Card";

export default function Home() {
  return (
    <>
      <Card>
        <Header />
        <HomeFeed />
      </Card>
    </>
  );
}
