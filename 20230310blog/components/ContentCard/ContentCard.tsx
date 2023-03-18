import classes from "./ContentCard.module.css";

type Props = {
  children: React.ReactNode;
};

export default function ContentCard({ children }: Props) {
  return <div className={classes.card}>{children}</div>;
}
