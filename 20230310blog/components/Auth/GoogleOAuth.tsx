"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";
import SignUp from "../SignUp/SignUp";

export default function GoogleOAuth() {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_KEY;

  return (
    <>
      {clientId && (
        <GoogleOAuthProvider clientId={clientId}>
          <SignUp />
        </GoogleOAuthProvider>
      )}
    </>
  );
}
