import Script from "next/script";

export const Analytics = () => (
  <>
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-5T75DYXGHZ"
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-5T75DYXGHZ');
      `}
    </Script>
  </>
);
