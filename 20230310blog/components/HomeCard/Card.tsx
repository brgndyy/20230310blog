"use client";
import classes from "./Card.module.css";

type Props = {
  children: React.ReactNode;
};

export default function Card({ children }: Props) {
  return <div className={classes.card}>{children}</div>;
}
