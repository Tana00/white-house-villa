import React from "react";
import image1 from "../../public/assets/house.png";
import Image from "next/image";
import pin from "../../public/assets/pin.png";
import money from "../../public/assets/money.png";
import cleaning from "../../public/assets/cleaning.png";
import deal from "../../public/assets/deal.png";
import security from "../../public/assets/home-security.png";
import location from "../../public/assets/location.png";

const WhyUs = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-white pt-10 lg:py-[120px]">
      <div className="md:w-4/5 mx-auto h-full flex flex-col justify-center items-center bg-white">
        <div className="flex lg:flex-row flex-col gap-4 w-full mx-auto h-4/5 items-center justify-center">
          <div className="w-full lg:w-4/5 h-full flex flex-1 justify-center">
            <div className="w-full lg:w-3/4 h-full relative">
              <Image
                src={image1}
                alt="pic1"
                className="w-full h-full rounded-2xl"
                placeholder="blur"
              />
              {/*  two neomorphic cards  on the top left and bottom right using absolute positioning */}
              <div className="flex gap-4 absolute left-[-50px] w-[200px] h-[50px] top-14 bg-[#F3FBF7] backdrop-blur-sm rounded-md shadow-sm justify-center items-center">
                <div className="bg-[#FFF0F0] bg-opacity-60 w-[35px] h-[35px] rounded-full flex items-center justify-center">
                  <Image
                    src={pin}
                    alt="pic1"
                    className="w-4 h-4"
                    placeholder="blur"
                  />
                </div>
                <p className="text-black text-[0.875rem]">Apartment booked</p>
              </div>
              <div className="absolute right-[0px] md:right-[-50px] w-[200px] h-[50px] bottom-14 bg-[#F3FBF7] bg-opacity-50 backdrop-blur-sm rounded-md shadow-sm flex gap-4 justify-center items-center">
                <div className="bg-gray-200 bg-opacity-60 w-[35px] h-[35px] rounded-full flex items-center justify-center">
                  <Image
                    src={money}
                    alt="pic1"
                    className="w-4 h-4"
                    placeholder="blur"
                  />
                </div>
                <p className="text-black text-[0.875rem]">Payment Successful</p>
              </div>
            </div>
          </div>
          <div className="w-11/12 lg:w-4/5 sm:w-11/12 h-full mx-auto flex flex-1 flex-col justify-center items-center">
            <div className="w-full lg:ml-32 text-center lg:text-left mt-10 lg:mt-0">
              <h4 className="text-[2.5rem] font-semibold">Why Choose Us</h4>
            </div>
            <div className=" relative grid items-center justify-center grid-cols-1 md:grid-cols-2  sm:grid-cols-2 gap-4 md:gap-12 mt-4 md:w-auto w-full mx-auto">
              <div className=" md:w-[260px] md:h-[250px] rounded-md z-10 bg-white bg-opacity-50 border border-white flex flex-col gap-3 px-2.5 py-8">
                <div className="h-16">
                  <Image
                    src={location}
                    alt="pic1"
                    className="md:w-16 h-full"
                    placeholder="blur"
                  />
                </div>
                <p className="text-black text-lg font-semibold py-2">
                  Prime Locations
                </p>
                <p className="text-[#484848] text-sm font-medium">
                  Conveniently located near shopping, dining, and entertainment
                  options.
                </p>
              </div>
              <div className=" md:w-[260px] md:h-[250px] rounded-md z-10 bg-white bg-opacity-50 border border-white flex flex-col gap-3 px-2.5 py-8">
                <div className="h-16">
                  <Image
                    src={cleaning}
                    alt="pic1"
                    className="md:w-16 h-full"
                    placeholder="blur"
                  />
                </div>
                <p className="text-black text-lg font-semibold py-2">
                  Responsive Maintenance
                </p>
                <p className="text-[#484848] text-sm font-medium">
                  Our team ensures prompt and efficient maintenance service.
                </p>
              </div>
              <div className=" md:w-[260px] md:h-[250px] rounded-md z-10 bg-white bg-opacity-50 border border-white flex flex-col gap-3 px-2.5 py-8">
                <div className="h-16">
                  <Image
                    src={security}
                    alt="pic1"
                    className="md:w-16 h-full"
                    placeholder="blur"
                  />
                </div>
                <p className="text-black text-lg font-semibold py-2">
                  Safety and Security
                </p>
                <p className="text-[#484848] text-sm font-medium">
                  Our properties are safe and secure, with 24-hour security.
                </p>
              </div>
              <div className=" md:w-[260px] md:h-[250px] rounded-md z-10 bg-white bg-opacity-50 border border-white flex flex-col gap-3 px-2.5 py-8">
                <div className="h-16">
                  <Image
                    src={deal}
                    alt="pic1"
                    className="md:w-16 h-full"
                    placeholder="blur"
                  />
                </div>
                <p className="text-black text-lg font-semibold py-2">
                  Flexible Booking Terms
                </p>
                <p className="text-[#484848] text-sm font-medium">
                  We offer flexible booking terms to suit your needs.
                </p>
              </div>

              {/*  a circle behind the cards using absolute positioning */}
              <div className="absolute w-[350px] h-[350px] md:w-[335px] md:h-[335px] bg-gradient-to-tr from-primary-green to-[#226e46] bg-opacity-10 blur-[305px]  md:blur-[205px] rounded-full -z-0 flex justify-center items-center top-72 md:top-24 md:left-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
