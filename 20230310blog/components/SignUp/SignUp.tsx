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

  const handleSuccess = (credentialResponse: CredentialResponse) => {
    console.log(credentialResponse);

    const idToken = credentialResponse.credential;
    const decodedToken: TokenType = jwtDecode(idToken);

    const userEmail = decodedToken.email;

    console.log(userEmail);

    console.log("User profile information:", decodedToken);
  };

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
      <div className={classes.signup_background}>
        <div className={classes.signup_container}>
          <form className={classes.signup_form} onSubmit={formSubmitHandler}>
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
