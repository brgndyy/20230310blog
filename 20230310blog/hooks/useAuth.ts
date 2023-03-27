import { useState, useEffect, useCallback } from "react";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cookie, setCookie] = useState<string | null>(null);
  const [cookieExpiration, setCookieExpiration] = useState();
  const [userEmail, setUserEmail] = useState(false);

  const login = (cookie: string) => {
    setIsLoggedIn(true);
    setCookie(cookie);
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setCookie(null);
  };

  return { isLoggedIn, cookie, login, logOut };
};
