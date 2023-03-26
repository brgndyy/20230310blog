"use client";

import classes from "./ErrorModal.module.css";

type ErrorModalType = {
  message: string;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
};

const ErrorModal = ({ message, setError }: ErrorModalType) => {
  const errorHandler = () => {
    setError("");
  };

  return (
    <>
      <div className={classes.errorModal_backdrop} onClick={errorHandler}>
        <div className={classes.errorModal_container}>
          <div className={classes.error_msg_container}>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorModal;
