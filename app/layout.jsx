import "../styles/globals.css";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Luxury Airbnb Apartments in Nottingham | Short-Term Rentals",
  description:
    "Discover the best Airbnb apartments in Nottingham for your short-term stay. Our luxury rentals offer comfort and convenience in prime locations. Book your perfect accommodation now!",
  keywords:
    "Airbnb Nottingham, bookings.com apartments, luxury apartment in Mapperley Nottingham, short-term rentals, luxury apartments, holiday flats, Nottingham city center, self-catering accommodation, vacation homes, modern serviced apartments, weekend getaways, cozy rentals",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </head>

      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
