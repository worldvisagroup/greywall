import React, { ReactNode } from "react";
import AnalyticsProvider from "../components/providers/AnalyticsProvider";


const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <AnalyticsProvider />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PTVJBN26"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
};

export default Layout;
