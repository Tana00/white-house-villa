import ContactUs from "@/components/Contact-us";
import "../../styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "White House Villa",
  description: "Your home away from home",
  keywords:
    "villa, white house, home away from home, shortlet, airbnb, bookings.com",
};

const ServicesLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        {/* Add more meta tags if needed */}
      </head>

      <body>
        <Nav />
        {children}
        <ContactUs />
        <Footer />
      </body>
    </html>
  );
};

export default ServicesLayout;
