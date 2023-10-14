"use client";
import React, { useState } from "react";
import Image from "next/image";
import image1 from "../public/assets/gallery/dining.webp";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = "Subscribe to NewsLetter";
    const body = `Email: ${email}`;

    const mailtoLink = `mailto:whitehousevilla23@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setEmail("");
    return (window.location.href = mailtoLink);
  };
  return (
    <div className="w-full h-1/2 flex flex-col justify-center items-center bg-white mb-11">
      <div className="w-full flex lg:flex-row flex-col">
        <div className="flex-1 flex flex-col justify-center bg-primary-green px-8 md:px-[6rem] py-10">
          <h1 className="text-white text-3xl md:text-[2.5rem] lg:leading-[55px] font-semibold">
            Subscribe to our monthly newsletter
          </h1>
          <p className="text-[#F7F7F7] text-[1.125rem] my-4">
            Get updates on our latest listings
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex mt-4 bg-white rounded-md px-4 md:mr-24 py-2.5"
          >
            <input
              type="email"
              className="w-full h-12 bg-white rounded-l-md px-4 placeholder:text-gray-400 placeholder:text-sm outline-none"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="w-[200px] h-12 rounded-md bg-primary-green rounded-r-md text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="flex-1 hidden lg:block max-h-[386px]">
          <Image
            src={image1}
            alt="pic1"
            className="w-full h-full max-h-[386px] object-cover"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
