"use client";

import classes from "./SignUp.module.css";
import { useRef } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";

export default function SignUp() {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_KEY;
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (idRef.current && pwRef.current) {
      await fetch("http://localhost:3002/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: idRef.current.value,
          password: pwRef.current.value,
        }),
      });
      console.log("회원가입이 완료 되었습니다!");
      idRef.current.value = "";
      pwRef.current.value = "";
    }
  };

  return (
    <>
      {clientId && (
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
          ;
          <div className={classes.signup_background}>
            <div className={classes.signup_container}>
              <form
                className={classes.signup_form}
                onSubmit={formSubmitHandler}
              >
                <div className={classes.signup_div}>
                  <label className={classes.signup_label} htmlFor="adminId">
                    아이디
                  </label>
                  <div className={classes.signup_input_div}>
                    <input
                      ref={idRef}
                      className={classes.signup_input}
                      type={"text"}
                      name={"adminId"}
                    />
                  </div>
                </div>
                <div className={classes.signup_div}>
                  <label className={classes.signup_label} htmlFor="adminPw">
                    비밀번호
                  </label>
                  <div className={classes.signup_input_div}>
                    <input
                      ref={pwRef}
                      className={classes.signup_input}
                      type={"password"}
                      name={"adminPw"}
                    />
                  </div>
                </div>
                <div className={classes.button_container}>
                  <button className={classes.signup_button}>회원가입</button>
                </div>
              </form>
            </div>
          </div>
        </GoogleOAuthProvider>
      )}
    </>
  );
}
