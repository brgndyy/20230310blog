import classes from "./RouteWrong.module.css";

export default function RouteWrong() {
  return (
    <>
      <h1 className={classes.error_message}>
        요청하신 페이지를 찾을 수 없습니다.
      </h1>
    </>
  );
}
