"use client";

import { CookiesProvider } from "react-cookie";

type childrenType = {
  children: React.ReactNode;
};

export default function CookieProvider({ children }: childrenType) {
  return <CookiesProvider>{children}</CookiesProvider>;
}
