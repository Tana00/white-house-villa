import React from "react";
import Image from "next/image";
import { LuBookUp } from "react-icons/lu";
import { IoNavigateCircleOutline } from "react-icons/io5";
import { RiSecurePaymentLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import image1 from "../../public/assets/manbed.png";

const HowItWorks = () => {
  return (
    <div className="w-full h-full lg:h-screen flex flex-col justify-center items-center lg:pt-[120px] pt-0 bg-white">
      <div className="lg:w-11/12 lg:h-[90vh] mx-auto md:p-8 p-4 flex flex-col lg:flex-row justify-center items-start bg-[#F3FBF7] rounded-md">
        <div className="flex flex-1 flex-col gap-3 mt-0 md:mt-10">
          <div className="md:mx-8 md:px-8">
            <h1 className="text-[2.5rem] leading-[64px] font-bold text-[#226E46]">
              How it works
            </h1>
            <p className="text-[#040C07] text-[1.125rem] leading-8 my-4">
              We've designed our process to be straightforward and
              user-friendly, ensuring a seamless experience for our customers.
              Here's how it all works:
            </p>
          </div>
          <div className="grid grid-cols-2 mt-4 md:mx-12 mx-4 font-medium">
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="bg-white rounded-full w-[80px] h-[80px] flex justify-center items-center">
                <IoNavigateCircleOutline className="w-12 h-12 text-primary-green" />
              </div>
              <p className="text-black text-sm mt-2 font-semibold">
                1. Explore Our Products
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="bg-white rounded-full w-[80px] h-[80px] flex justify-center items-center">
                <LuBookUp className="w-12 h-12 text-primary-green" />
              </div>
              <p className="text-black text-sm mt-2 font-semibold text-center">
                2. Book on either Airbnb or Booking.com
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="bg-white rounded-full w-[80px] h-[80px] flex justify-center items-center">
                <RiSecurePaymentLine className="w-12 h-12 text-primary-green" />
              </div>
              <p className="text-black text-sm mt-2 font-semibold">
                3. Review and make payments
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="bg-white rounded-full w-[80px] h-[80px] flex justify-center items-center">
                <AiOutlineHome className="w-12 h-12 text-primary-green" />
              </div>
              <p className="text-black text-sm mt-2 font-semibold">
                4. Enjoy the benefits
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full h-full ">
          <Image
            src={image1}
            alt="pic1"
            className="w-full h-full rounded-2xl object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
