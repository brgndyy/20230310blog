import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  email: null,
  cookie: null,
  login: () => {},
  logout: () => {},
});
