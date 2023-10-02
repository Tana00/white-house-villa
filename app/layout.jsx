import Script from "next/script";
import Newsletter from "@/components/Newsletter";
import "../styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "White House Villa",
  description: "Your home away from home",
  keywords:
    "villa, white house, home away from home, shortlet, airbnb, bookings.com",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link
          rel="stylesheet"
          href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"
        />
        <script
          defer
          src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
        ></script>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-P52QKLDNMS" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-P52QKLDNMS');
        `}
        </Script>
      </head>

      <body>
        <Nav />
        {children}
        {/* <Newsletter /> */}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
