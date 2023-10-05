"use client";
import React, { useState } from "react";
import Image from "next/image";
import image1 from "../public/assets/gallery/dining.webp";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = "Contact Us";
    const body = `Name: ${formData.firstName} ${formData.lastName}%0D%0AEmail: ${formData.email}%0D%0APhone Number: ${formData.phoneNumber}%0D%0AMessage: ${formData.message}`;

    const mailtoLink = `mailto:whitehousevilla23@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
    return (window.location.href = mailtoLink);
  };

  return (
    <div
      id="contact_us"
      className="w-full flex flex-col justify-center items-center bg-white mb-11"
    >
      <div className="w-full flex lg:flex-row flex-col">
        <div className="flex-1 flex flex-col justify-center bg-primary-green px-8 md:px-[6rem] py-10">
          <h1 className="text-white text-3xl lg:leading-[55px] font-semibold">
            Send us a message
          </h1>
          <form onSubmit={handleSubmit}>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-md placeholder:text-gray-400 placeholder:text-sm outline-none focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-md placeholder:text-gray-400 placeholder:text-sm outline-none focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-md placeholder:text-gray-400 placeholder:text-sm outline-none focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-md placeholder:text-gray-400 placeholder:text-sm outline-none focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone*"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div class="my-4">
              <textarea
                placeholder="Message*"
                class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-md placeholder:text-gray-400 placeholder:text-sm outline-none focus:outline-none focus:shadow-outline"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div class="my-2 w-1/2 lg:w-1/4">
              <button
                class="uppercase text-sm font-bold tracking-wide bg-white text-primary-green p-3 rounded-md w-full 
                      focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="flex-1 hidden lg:block">
          <Image
            src={image1}
            alt="pic1"
            className="w-full h-full max-h-[550px] object-cover"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
