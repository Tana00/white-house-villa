import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { GrFacebookOption, GrTwitter } from "react-icons/gr";
// import { IoLogoInstagram } from "react-icons/io";
// import { BiLogoLinkedin } from "react-icons/bi";
import { LuMapPin } from "react-icons/lu";
import { BsPhone } from "react-icons/bs";
import logo from "../public/assets/logo3.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="w-full md:h-[55vh] p-4 md:pt-10 flex flex-col justify-between items-center bg-[#f7f7f7]">
      <div className="flex flex-col md:flex-row w-full md:w-4/5 p-4 h-11/12 justify-between gap-8 md:gap-0">
        <div className="flex flex-col justify-evenly md:gap-8">
          <div className="flex gap-4 flex-col text-black">
            <Image
              className="relative w-[88px] h-[71px] md:w-[88px] md:h-[71px]"
              alt="White house chosen"
              src={logo}
              // placeholder="blur"
            />
            <p className="">Your Home Away From Home</p>
          </div>
          <div className="flex gap-4">
            {/* <GrFacebookOption className="w-10 h-10 bg-primary-green text-white p-2 rounded-full hover:text-green-400 hover:transition duration-300 ease-in-out" />
            <GrTwitter className="w-10 h-10 bg-primary-green text-white p-2 rounded-full hover:text-green-400 hover:transition duration-300 ease-in-out" />
            <IoLogoInstagram className="w-10 h-10 bg-primary-green text-white p-2 rounded-full hover:text-green-400 hover:transition duration-300 ease-in-out" />
            <BiLogoLinkedin className="w-10 h-10 bg-primary-green text-white p-2 rounded-full hover:text-green-400 hover:transition duration-300 ease-in-out" /> */}
          </div>
        </div>
        {/* <div className="flex sm:flex-row flex-col justify-between gap-12 md:gap-32 mt-8 md:mt-0"> */}
        <div className="flex flex-col">
          <h4 className="text-[1.125rem] font-medium">Quick Links</h4>

          <div className="flex flex-col gap-4 mt-4">
            <Link href="/" className="text-[#484848] text-lg">
              Home
            </Link>
            <Link href="/about" className="text-[#484848] text-lg">
              About Us
            </Link>
            <Link href="/explore" className="text-[#484848] text-lg">
              Explore
            </Link>
            <Link href="/contact" className="text-[#484848] text-lg">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[1.125rem] font-medium">Legal</h4>

          <div className="flex flex-col gap-4 mt-4">
            <Link
              href="/terms-of-service"
              className="text-[#484848] text-lg hover:text-primary-green"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy-policy"
              className="text-[#484848] text-lg hover:text-primary-green"
            >
              Privacy Policy
            </Link>
            {/* <Link href="/explore" className="text-[#484848] text-lg">
                Explore
              </Link>
              <Link href="/contact" className="text-[#484848] text-lg">
                Contact Us
              </Link> */}
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[1.125rem] font-medium">Contact Us</h4>
          <div className="flex flex-col gap-8 mt-4">
            <div className="flex items-center gap-2">
              <LuMapPin className="w-6 h-6 text-primary-green" />
              <p className="text-[#484848] text-lg">
                Mapperley, United Kingdom
              </p>
            </div>
            <div className="flex items-center gap-2">
              <BsPhone className="w-6 h-6 text-primary-green" />
              <p className="text-[#484848] text-lg">07396 758528</p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-primary-green"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.5 5.84717L2.25 5.09717H21.75L22.5 5.84717V19.3472L21.75 20.0972H2.25L1.5 19.3472V5.84717ZM3 7.39967V18.5972H21V7.40117L12.465 13.9472H11.55L3 7.39967ZM19.545 6.59717H4.455L12 12.4007L19.545 6.59717Z"
                  fill="#226E46"
                />
                <rect
                  x="0.5"
                  y="1.09717"
                  width="23"
                  height="23"
                  stroke="#F7F7F7"
                />
              </svg>

              <p className="text-[#484848] text-lg">
                whitehousevilla23@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      <div className="flex flex-col md:w-4/5 mx-auto w-full">
        <div className="h-[1px] bg-[#bababa] mt-8"></div>
        <div className="flex justify-center items-center ">
          <p className="text-[#484848] text-[14px] mt-1">
            © {year} White House Villa. All rights reserved
          </p>
          {/* <div className="flex items-center  gap-6">
            <Link href="/terms" className="text-[#484848] text-[14px] mt-2">
              {" "}
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-[#484848] text-[14px] mt-2">
              {" "}
              Privacy Policy
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
