import "./globals.css";
import AuthProvider from "components/Context/AuthProvider";
import CookieProvider from "components/CookieProvider/CookieProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

      <head />

      <body>
        <AuthProvider>
          <CookieProvider>
            <div id="modal_backdrop"></div>
            <div id="modal"></div>
            {children}
          </CookieProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
