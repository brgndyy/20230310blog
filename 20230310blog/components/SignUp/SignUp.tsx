"use client";

import classes from "./SignUp.module.css";
import { useRef } from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

interface CredentialResponse {
  clientId: string;
  credential: string;
  select_by: string;
}

interface TokenType {
  email: string;
}

export default function SignUp() {
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    console.log(credentialResponse);

    const idToken = credentialResponse.credential;

    await fetch("http://localhost:3002/auth/google/callback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idToken: idToken,
      }),
    });
  };

  const formSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (idRef.current && pwRef.current) {
      const response = await fetch("http://localhost:3002/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: idRef.current.value,
          password: pwRef.current.value,
        }),
        credentials: "include",
      });
      const data = await response.json();
      console.log(response.headers.get("set-cookie"));

      console.log(data);
      idRef.current.value = "";
      pwRef.current.value = "";
    }
  };

  return (
    <>
      <div className={classes.signup_background}>
        <div className={classes.signup_container}>
          <form className={classes.signup_form} onSubmit={formSubmitHandler}>
            <div className={classes.signup_div}>
              <label className={classes.signup_label} htmlFor="email">
                이메일
              </label>
              <div className={classes.signup_input_div}>
                <input
                  ref={idRef}
                  className={classes.signup_input}
                  type={"text"}
                  name={"email"}
                />
              </div>
            </div>
            <div className={classes.signup_div}>
              <label className={classes.signup_label} htmlFor="password">
                비밀번호
              </label>
              <div className={classes.signup_input_div}>
                <input
                  ref={pwRef}
                  className={classes.signup_input}
                  type={"password"}
                  name={"password"}
                />
              </div>
            </div>
            <div className={classes.button_container}>
              <button className={classes.signup_button}>회원가입</button>
            </div>
            <GoogleLogin
              onSuccess={(credentialResponse: any) => {
                handleSuccess(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </form>
        </div>
      </div>
    </>
  );
}
