"use client";

import classes from "./SignUp.module.css";
import { useRef } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

export default function SignUp() {
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const handleSuccess = (credentialResponse: any) => {
    console.log(credentialResponse);

    const idToken = credentialResponse.credential;
    const decodedToken = jwtDecode(idToken);

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

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

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
              onSuccess={handleSuccess}
              onError={() => {
                console.log("Login Failed");
              }}
            />
            <button onClick={() => login()}>구글로 로그인 버튼</button>
          </form>
        </div>
      </div>
    </>
  );
}
