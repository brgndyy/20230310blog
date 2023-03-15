import classes from "./PostList.module.css";
import PostItem from "./PostItem";

export default function PostList({ dummyMusicData }: any) {
  return (
    <>
      <div className={classes.post_list_container}>
        <ul className={classes.post_list_ul}>
          {dummyMusicData.map((item: any) => {
            return <PostItem key={item.id} title={item.title} />;
          })}
        </ul>
      </div>
    </>
  );
}
