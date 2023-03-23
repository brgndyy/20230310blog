"use client";

import classes from "./Login.module.css";
import { useRef } from "react";

export default function Login() {
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (idRef.current && pwRef.current) {
      console.log(idRef.current.value, pwRef.current.value);
    }
  };

  return (
    <>
      <div className={classes.login_background}>
        <div className={classes.login_container}>
          <form className={classes.login_form} onSubmit={formSubmitHandler}>
            <div className={classes.login_div}>
              <label className={classes.login_label} htmlFor="adminId">
                아이디
              </label>
              <div className={classes.login_input_div}>
                <input
                  ref={idRef}
                  className={classes.login_input}
                  type={"text"}
                  name={"adminId"}
                />
              </div>
            </div>
            <div className={classes.login_div}>
              <label className={classes.login_label} htmlFor="adminPw">
                비밀번호
              </label>
              <div className={classes.login_input_div}>
                <input
                  ref={pwRef}
                  className={classes.login_input}
                  type={"password"}
                  name={"adminPw"}
                />
              </div>
            </div>
            <div className={classes.button_container}>
              <button className={classes.login_button}>회원가입</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
