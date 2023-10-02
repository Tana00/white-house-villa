import React from "react";
import Image from "next/image";
import image1 from "../public/assets/gallery/dining.webp";

const ContactUs = () => {
  return (
    <div
      id="contact_us"
      className="w-full h-1/2 flex flex-col justify-center items-center bg-white mb-11"
    >
      <div className="w-full flex lg:flex-row flex-col">
        <div className="flex-1 flex flex-col justify-center bg-primary-green px-8 md:px-[6rem] py-10">
          <h1 className="text-white text-3xl lg:leading-[55px] font-semibold">
            Send us a message
          </h1>
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-md placeholder:text-gray-400 placeholder:text-sm outline-none focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="First Name*"
            />
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-md placeholder:text-gray-400 placeholder:text-sm outline-none focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Last Name*"
            />
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-md placeholder:text-gray-400 placeholder:text-sm outline-none focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email*"
            />
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-md placeholder:text-gray-400 placeholder:text-sm outline-none focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Phone*"
            />
          </div>
          <div class="my-4">
            <textarea
              placeholder="Message*"
              class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-md placeholder:text-gray-400 placeholder:text-sm outline-none focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div class="my-2 w-1/2 lg:w-1/4">
            <button
              class="uppercase text-sm font-bold tracking-wide bg-white text-primary-green p-3 rounded-md w-full 
                      focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </div>
        <div className="flex-1 hidden lg:block">
          <Image
            src={image1}
            alt="pic1"
            className="w-full h-full max-h-[550px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
