import classes from "./HomeFeed.module.css";
import Image from "next/image";
import Link from "next/link";

export default function HomeFeed() {
  return (
    <div className={classes.homeFeed_container}>
      <div className={classes.item}>
        <Link href={"/exhibiton"}>
          <Image
            src={"/image/exhibition.png"}
            alt={"itemImage"}
            width={500}
            height={500}
          />
        </Link>
      </div>
    </div>
  );
}
