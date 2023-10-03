"use client";
import FAQ from "@/components/FAQ";
import { features } from "../../explore/page";

const Shortlet = () => {
  return (
    <section>
      <section className="relative bg-[url('https://a0.muscache.com/im/pictures/miso/Hosting-977242512291600380/original/e0f75c2b-2d8c-447a-a0a5-c4b0c34a6b59.jpeg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/90 sm:to-white/15 sm:bg-gradient-to-r"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 pt-36 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-6xl md:!leading-[4rem]">
              Unwind in Luxurious Airbnb Retreats.
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="https://www.airbnb.co.uk/rooms/977242512291600380?guests=1&adults=1&s=13&unique_share_id=04e5a211-83e6-4458-9847-b763cd49a3e9"
                target="_blank"
                className="block w-full rounded bg-[#FF5A60] px-12 py-3.5 text-sm font-medium text-white shadow hover:bg-[#d0484c] focus:outline-none focus:ring sm:w-auto"
              >
                Airbnb
              </a>

              <a
                href="https://www.booking.com/hotel/gb/white-house-villa.en-gb.html?age=0&aid=866831&app_hotel_id=10742807&checkin=2023-10-03&checkout=2023-10-05&from_sn=ios&group_adults=6&group_children=1&label=Share-aEOkjk%401696166832&no_rooms=1&req_adults=6&req_age=0&req_children=1&room1=A%2CA%2CA%2CA%2CA%2CA%2C0%2C"
                target="_blank"
                className="block w-full rounded bg-blue-700 px-12 py-3.5 text-sm font-medium text-white shadow hover:bg-blue-800 focus:outline-none focus:ring sm:w-auto"
              >
                Booking.com
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-slate-100 w-full py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 items-center gap-7 gap-x-16 w-4/5 mx-auto">
          {features.map((feature) => (
            <div key={feature.id} className="flex items-center gap-2">
              {feature.icon}
              <p className="text-[#484848] text-lg">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-10 md:my-20 w-full sm:w-10/12 md:w-4/5 lg:w-3/4 mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="text-left w-4/5 lg:w-full mx-auto pr-10">
          <p className="text-left text-sm font-semibold text-primary-green uppercase">
            Browse | Book | Go
          </p>
          <h3 className="text-left text-3xl md:text-4xl font-semibold mt-2 text-[#040C07]">
            Luxurious 3 bed house in Mapperley, United Kingdom
          </h3>
          <p className="text-[16px] leading-7 text-[#484848] my-6">
            Nestled in the heart of Notts, our charming home is the perfect
            retreat for your stay in NG3 6EJ. Whether you're here for business
            or leisure, our well-designed space promises a memorable stay.
          </p>
          <p className="text-[16px] leading-7 text-[#484848]">
            Our spacious 3 bedroom, 1 bathroom home is designed to make you feel
            right at home. The tastefully decorated living area is ideal for
            relaxing after a day of exploring Nottingham's attractions. You'll
            also find a fully equipped kitchen with modern appliances, making it
            easy to whip up a delicious meal.
          </p>
        </div>
        <div className="h-[300px] lg:h-[500px] w-full my-8 md:mt-0">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-977242512291600380/original/047d78df-bed0-4040-a20e-757272f4b0e6.jpeg"
            alt="dining"
            className="rounded h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="my-10 md:mt-40 w-full sm:w-10/12 md:w-4/5 lg:w-3/4 mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="h-[300px] lg:h-[500px] w-full">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-977242512291600380/original/bcc58799-a889-4e31-9239-a4e9167ac017.jpeg"
            alt="bed"
            className="rounded h-full w-full object-cover"
          />
        </div>
        <div className="text-left w-4/5 lg:w-full mx-auto pl-10 my-8 md:mt-0">
          <p className="text-left text-sm font-semibold text-primary-green uppercase">
            Why Us
          </p>
          <h3 className="text-left text-3xl md:text-4xl font-semibold mt-2 text-[#040C07]">
            Why White House Villa
          </h3>
          <p className="text-[16px] leading-7 text-[#484848] my-6">
            Nestled in the heart of Notts, our charming home is the perfect
            retreat for your stay in NG3 6EJ. Whether you're here for business
            or leisure, our well-designed space promises a memorable stay.
          </p>
          <p className="text-[16px] leading-7 text-[#484848]">
            Our spacious 3 bedroom, 1 bathroom home is designed to make you feel
            right at home. The tastefully decorated living area is ideal for
            relaxing after a day of exploring Nottingham's attractions. You'll
            also find a fully equipped kitchen with modern appliances, making it
            easy to whip up a delicious meal.
          </p>
        </div>
      </div>
      <FAQ />
    </section>
  );
};

export default Shortlet;
