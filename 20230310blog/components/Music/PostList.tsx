import classes from "./PostList.module.css";
import PostItem from "./PostItem";
import { Music } from "types/MusicType";

type MusicType = {
  dummyMusicData: Music[];
};

export default function PostList({ dummyMusicData }: MusicType) {
  return (
    <>
      <div className={classes.post_list_card}>
        <div className={classes.post_list_container}>
          <ul className={classes.post_list_ul}>
            {dummyMusicData.map((item) => {
              return (
                <PostItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  artist={item.artist}
                  released={item.released}
                  rate={item.rate}
                  summary={item.summary}
                  review={item.review}
                  imageUrl={item.image}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
