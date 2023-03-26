"use client";

import classes from "./Login.module.css";
import { useRef, useState } from "react";
import ErrorModal from "components/ErrorModal/ErrorModal";

export default function Login() {
  const [error, setError] = useState<string | null>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailRef.current && pwRef.current) {
      try {
        const response = await fetch("http://localhost:3002/api/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: emailRef.current.value,
            password: pwRef.current.value,
          }),
        });
        if (!response.ok) {
          const errorMsg = await response.json();
          setError(errorMsg.message);
          console.log(errorMsg);
        }
        emailRef.current.value = "";
        pwRef.current.value = "";
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <>
      {error && <ErrorModal message={error} setError={setError} />}
      <div className={classes.login_background}>
        <div className={classes.login_container}>
          <form className={classes.login_form} onSubmit={formSubmitHandler}>
            <div className={classes.login_div}>
              <label className={classes.login_label} htmlFor="email">
                이메일
              </label>
              <div className={classes.login_input_div}>
                <input
                  ref={emailRef}
                  className={classes.login_input}
                  type={"text"}
                  name={"email"}
                />
              </div>
            </div>
            <div className={classes.login_div}>
              <label className={classes.login_label} htmlFor="password">
                비밀번호
              </label>
              <div className={classes.login_input_div}>
                <input
                  ref={pwRef}
                  className={classes.login_input}
                  type={"password"}
                  name={"password"}
                />
              </div>
            </div>
            <div className={classes.button_container}>
              <button className={classes.login_button}>로그인</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
