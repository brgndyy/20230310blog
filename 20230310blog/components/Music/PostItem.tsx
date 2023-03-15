import classes from "./PostItem.module.css";

type Props = {
  title: string;
};

export default function PostItem({ title }: Props) {
  return (
    <>
      <li>{title}</li>
    </>
  );
}
