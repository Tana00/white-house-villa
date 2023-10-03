"use client";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import Gallery from "@/components/Carousel";
import { features } from "@/app/explore/page";

const Studio = () => {
  return (
    <section>
      <div className="bg-[#F3FBF7] w-full justify-center py-20 md:py-[180px] font-manrope">
        <div className="flex flex-1 w-full mx-auto text-center px-4 md:px-20 flex-col gap-6 items-center justify-center h-full text-[#040C07] mt-20 md:mt-0">
          <h1 className="text-center text-[3rem] font-semibold text-[#040C07]">
            Luxury shortlet for photo/video shoot
          </h1>
          <p className="text-center text-lg font-medium px-4 xl:px-32 text-[#040C07] w-full md:w-3/4">
            Welcome to a world of exploration and discovery. White House Villa
            is brimming with captivating attractions that cater to every
            interest and age group. From historical landmarks to natural
            wonders, cultural treasures to family-friendly adventures, there's
            something here for everyone.
          </p>
          <Link href="#contact_us">
            <button className="bg-primary-green text-white px-6 py-3 rounded-md hover:bg-transparent hover:text-primary-green hover:border hover:border-primary-green hover:transition duration-300 ease-in-out">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <div>
        <Gallery />
      </div>
      <div className="w-full bg-[#F3FBF7] py-6 md:py-10">
        <div className="w-10/12 md:w-4/5 mx-auto">
          <h3 className="text-center lg:text-left text-3xl md:text-4xl font-semibold mt-2 text-[#040C07]">
            About this Space
          </h3>
          <p className="max-w-lg sm:text-lg/relaxed font-medium my-5 text-[#484848]">
            Proudly Black-Owned.
          </p>
          <p className="text-[16px] leading-8 text-[#484848]">
            Welcome to White House Villa. A exquisite apartment offering hourly
            rentals in the heart of Nottingham. Our space is 2,400 square ft.
            with a lounge area and beautiful decor. The aprtment is a great
            venue for gatherings, photoshoots and video productions. There is
            plenty of free parking, an elevator, open space for social
            distancing, lots of windows with a breathtaking view of the
            Nottingham Skyline, and a chandelier. We also have a full bar and
            coffee machine, so day or night your next shoot will be your best
            shoot at White House Villa!
          </p>

          <div className="my-10">
            <hr className="my-4" />
            <h4 className="text-[1.3rem] font-semibold">
              What this place offers
            </h4>
            <div className="flex flex-col gap-4 lg:flex-row justify-between lg:items-center my-4">
              <div className="grid grid-cols-2 items-center gap-7 gap-x-16">
                {features.map((feature) => (
                  <div key={feature.id} className="flex items-center gap-2">
                    {feature.icon}
                    <p className="text-[#484848] text-[16px]">
                      {feature.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <p className="mt-10 text-[16px] leading-8 text-[#484848]">
            We are hands on and love to help, Our staff members are trained
            professionals and will be available the entire duration of your
            shoot if you have any questions or need any help.
          </p>
          <p className="text-[16px] my-6 leading-8 text-[#484848]">
            We would love to host you please let us know how we can make your
            event or shoot even better.
          </p>
        </div>
      </div>
      <FAQ />
    </section>
  );
};

export default Studio;
