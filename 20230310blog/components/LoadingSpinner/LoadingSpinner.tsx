import classes from "./LoadingSpinner.module.css";

export default function LoadingSpinner() {
  return (
    <>
      <div className={classes.loader}>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
      </div>
    </>
  );
}
