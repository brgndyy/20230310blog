import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  cookie: null as string | null,
  login: (cookie: string) => {},
  logOut: () => {},
});
