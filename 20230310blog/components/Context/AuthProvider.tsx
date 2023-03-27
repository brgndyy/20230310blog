"use client";

import { useAuth } from "hooks/useAuth";
import { AuthContext } from "shared/context/auth-context";

type ChildrenType = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: ChildrenType) {
  const { isLoggedIn, cookie, login, logOut } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        cookie: cookie,
        login: login,
        logOut: logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
