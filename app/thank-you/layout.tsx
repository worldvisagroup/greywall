import React, { ReactNode } from "react";
import AnalyticsProvider from "../components/providers/AnalyticsProvider";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <AnalyticsProvider />
        {/* Event snippet for Submit Lead Form - interior-designers conversion page */}
        <script
          dangerouslySetInnerHTML={{
            __html: `gtag('event', 'conversion', {'send_to': 'AW-11130135653/EnlYCJGFlpkaEOXIobsp'});`,
          }}
        />
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
