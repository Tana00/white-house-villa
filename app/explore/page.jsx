"use client";
import React from "react";
import pic2 from "../../public/assets/gallery/pic2.webp";
import pic3 from "../../public/assets/gallery/pic3.webp";
import pic4 from "../../public/assets/gallery/pic4.webp";
import pic5 from "../../public/assets/gallery/pic5.webp";
import pic6 from "../../public/assets/gallery/pic6.webp";
import { LuBedDouble, LuMicrowave } from "react-icons/lu";
import { MdOutlineSoupKitchen, MdOutlineBathtub } from "react-icons/md";
import { PiTelevisionBold } from "react-icons/pi";
import { RiFridgeLine } from "react-icons/ri";
import { BsPersonWorkspace } from "react-icons/bs";
import { RxDimensions } from "react-icons/rx";
import { GiCctvCamera } from "react-icons/gi";
import { FaAirbnb } from "react-icons/fa";
import Image from "next/image";
import { BsFillEyeFill } from "react-icons/bs";

export const features = [
  {
    id: 1,
    title: "3 Beds",
    icon: <LuBedDouble className="w-6 h-6 text-primary-green" />,
    description: "3",
  },
  {
    id: 2,
    title: "Kitchen",
    icon: <MdOutlineSoupKitchen className="w-6 h-6 text-primary-green" />,
    description: "1",
  },
  {
    id: 4,
    title: "Bathroom",
    icon: <MdOutlineBathtub className="w-6 h-6 text-primary-green" />,
    description: "2",
  },
  {
    id: 3,
    title: "TV",
    icon: <PiTelevisionBold className="w-6 h-6 text-primary-green" />,
    description: "1",
  },
  {
    id: 5,
    title: "Refrigerator",
    icon: <RiFridgeLine className="w-6 h-6 text-primary-green" />,
    description: "1",
  },
  {
    id: 6,
    title: "Dedicated Workspace",
    icon: <BsPersonWorkspace className="w-6 h-6 text-primary-green" />,
    description: "1",
  },
  {
    id: 7,
    title: "6x8m2",
    icon: <RxDimensions className="w-6 h-6 text-primary-green" />,
    description: "1",
  },
  {
    id: 8,
    title: "Security Cameras",
    icon: <GiCctvCamera className="w-6 h-6 text-primary-green" />,
    description: "1",
  },
  {
    id: 9,
    title: "Microwave",
    icon: <LuMicrowave className="w-6 h-6 text-primary-green" />,
    description: "1",
  },
  {
    id: 10,
    title: "Hair Dryer",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-primary-green"
        fill="#226e46"
        viewBox="0 0 24 24"
      >
        <title>hair-dryer</title>
        <path d="M22 9A4.32 4.32 0 0 1 19.78 8.45A3.4 3.4 0 0 0 18 8V7A4.32 4.32 0 0 1 20.22 7.55A3.4 3.4 0 0 0 22 8M22 6A3.4 3.4 0 0 1 20.22 5.55A4.32 4.32 0 0 0 18 5V6A3.4 3.4 0 0 1 19.78 6.45A4.32 4.32 0 0 0 22 7M22 10A3.4 3.4 0 0 1 20.22 9.55A4.32 4.32 0 0 0 18 9V10A3.4 3.4 0 0 1 19.78 10.45A4.32 4.32 0 0 0 22 11M10 12.73A70.39 70.39 0 0 0 17 11V4S10.5 2 7.5 2A5.5 5.5 0 0 0 6.12 12.82L7 19H8A3 3 0 0 0 9.46 21.33A3.15 3.15 0 0 1 11 24H12A4.12 4.12 0 0 0 10.09 20.55C9.39 20 9 19.63 9 19H10M7.5 10A2.5 2.5 0 1 1 10 7.5A2.5 2.5 0 0 1 7.5 10Z" />
      </svg>
    ),
    description: "1",
  },
];

const Explore = () => {
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [activeGuestNumber, setActiveGuestNumber] = useState();

  // const guestDropdown = [1, 2, 3];

  return (
    <div className=" flex flex-col w-full min-h-screen items-center justify-start bg-white">
      {/*  Headline text */}
      <div className="flex flex-2 lg:px-20 px-4 flex-col lg:w-4/6 gap-6 items-center justify-start text-center text-[#040C07] mt-12">
        <h3 className="text-3xl sm:text-4xl md:text-[2.5rem] font-semibold leading-none text-[#040C07]">
          Book Now
        </h3>
        <p className="text-[0.95rem] sm:text-[1.125rem] w-11/12">
          We offer a variety of spacious and stylish apartments to suit your
          needs. Whether you're a single professional, a couple, or a family, we
          have the ideal apartment for you. Explore our apartments:
        </p>
      </div>

      <div className="flex md:flex-row flex-col gap-4 flex-1 px-4 md:px-10 md:w-11/12 w-full mt-12 ">
        <div className="grid md:grid-cols-2 md:gap-4 gap-2 w-full">
          {/*  4 small cards with the images as the background */}
          <div className="w-full xl:h-full rounded-2xl h-[240px]">
            <Image
              src={pic6}
              alt="pic1"
              className="w-full h-full object-cover rounded-2xl"
              placeholder="blur"
            />
          </div>
          <div className="w-full xl:h-full rounded-2xl h-[240px]">
            <Image
              src={pic2}
              alt="pic1"
              className="w-full h-full object-cover rounded-2xl"
              placeholder="blur"
            />
          </div>
          <div className="w-full xl:h-full rounded-2xl h-[240px]">
            <Image
              src={pic3}
              alt="pic1"
              className="w-full h-full object-cover rounded-2xl"
              placeholder="blur"
            />
          </div>
          <div className="w-full xl:h-full rounded-2xl h-[240px]">
            <Image
              src={pic4}
              alt="pic1"
              className="w-full h-full object-cover rounded-2xl"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="w-full rounded-2xl h-[500px] xl:h-full">
          <Image
            src={pic5}
            alt="pic1"
            className="w-full rounded-2xl h-full object-cover"
            placeholder="blur"
          />
        </div>
      </div>
      <div className="flex flex-col w-11/12 mt-8 px-4 md:px-10">
        <div className="">
          <h4 className="text-3xl md:text-[2.5rem] font-semibold">
            Exquisite 3 bed House!
          </h4>
          <div className="flex justify-between items-center">
            <p className="text-[#484848] text-[1.125rem]">
              Mapperley, United Kingdom
            </p>
            {/* <p className="flex items-center gap-1 text-lg">
              <span className="text-primary-green">
                {" "}
                <BsFillEyeFill className="w-6 h-6" />
              </span>
              0
            </p> */}
          </div>
          {/* <div className="flex items-center gap-1 mt-4">
            <BsFillStarFill className="w-4 h-4 text-yellow-500" />
            <BsFillStarFill className="w-4 h-4 text-yellow-500" />
            <BsFillStarFill className="w-4 h-4 text-yellow-500" />
            <BsFillStarFill className="w-4 h-4 text-yellow-500" />
            <BsFillStarFill className="w-4 h-4 text-slate-400" />
            <span>4.5</span>
          </div> */}
        </div>
        <hr className="my-4" />

        <div className="flex flex-col gap-4 lg:flex-row justify-between lg:items-start">
          <div>
            <h4 className="text-[1.2rem] sm:text-[1.5rem] font-semibold mt-2 mb-8">
              What this place offers
            </h4>
            <div className="grid grid-cols-2 items-center gap-7 gap-x-16">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-center gap-2">
                  {feature.icon}
                  <p className="text-[#484848] text-lg">{feature.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            {/* <h4 className="text-[1.5rem] font-semibold mt-2 mb-6">
              Booking Options
            </h4> */}
            <div className="relative w-full lg:w-[400px] h-full my-8 lg:mt-2 flex items-center justify-center bg-[#F7F7F7] py-6 px-8 rounded-2xl">
              <div className="w-full">
                <div>
                  <p className="text-[#484848] text-lg flex items-center justify-start font-medium">
                    Starting from
                    <span className="pl-5">
                      <span className="text-primary-green font-semibold text-[20px]">
                        £ 160
                      </span>
                      /night
                    </span>
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center mt-8">
                  <p className="text-[#040C07] font-medium text-base w-full">
                    Instant Booking
                  </p>
                  <a
                    href="#contact"
                    className="sm:ml-2 flex items-center justify-center gap-2 bg-primary-green border border-primary-green p-2 px-4 rounded-md w-full cursor-pointer hover:bg-primary-green/90 transition-all"
                  >
                    <p className="text-white text-lg">Book Now</p>
                  </a>
                </div>
                <div className="flex items-center justify-center mt-12 mb-8 w-full">
                  <div className="border-t border-[#226E4633] w-1/2"></div>
                  <div className="mx-4 text-[#484848] font-semibold">Or</div>
                  <div className="border-t border-[#226E4633] w-1/2"></div>
                </div>
                {/* <p className="text-[#040C07] text-base mt-4">Number of Guests</p>
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="relative flex items-center justify-between w-full h-12 bg-white rounded-md mt-2 text-sm px-4 cursor-pointer"
              >
                <span>{!activeGuestNumber ? "Select" : activeGuestNumber}</span>
                <svg
                  width="16"
                  height="10"
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                >
                  <mask
                    id="mask0_56_10276"
                    // style="mask-type:luminance"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="16"
                    height="10"
                  >
                    <path
                      d="M14 2L8 8L2 2H14Z"
                      fill="white"
                      stroke="white"
                      stroke-width="4"
                      stroke-linejoin="round"
                    />
                  </mask>
                  <g mask="url(#mask0_56_10276)">
                    <path d="M-4 -7.5H20V16.5H-4V-7.5Z" fill="black" />
                  </g>
                </svg>
              </div>
              <div
                className={`${
                  dropdownOpen ? "block" : "hidden"
                } bg-white shadow-md rounded-2xl border border-gray-300 text-sm absolute top-auto left-0 w-[340px] ml-8 z-30 mt-1`}
              >
                <span className="absolute top-0 left-0 w-3 h-3 bg-white border transform rotate-45 -mt-1 ml-6"></span>
                <div className="bg-white rounded w-full relative z-10 py-1">
                  <ul className="list-reset py-2">
                    {[1, 2, 3]?.map((num, i) => (
                      <li
                        key={i}
                        className="relative"
                        onClick={() => {
                          setActiveGuestNumber(num);
                          setDropdownOpen(false);
                        }}
                      >
                        <p
                          className={`${
                            guestDropdown === num
                              ? "text-[#226E46] font-medium"
                              : "text-[#040C07]"
                          } px-5 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer`}
                        >
                          <span className="text-inherit flex-1 pl-4">
                            {num}
                          </span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div> */}
                <p className="text-[#040C07] font-medium text-base mb-2 w-full">
                  Book on
                </p>
                <div className="sm:flex w-full gap-4">
                  <a
                    href="https://www.airbnb.co.uk/rooms/977242512291600380?guests=1&adults=1&s=13&unique_share_id=04e5a211-83e6-4458-9847-b763cd49a3e9"
                    target="_blank"
                    className="flex items-center justify-center gap-2 bg-[#FF5A60] p-2 px-6 rounded-md mt-2 w-full cursor-pointer hover:bg-[#d0484c]"
                  >
                    <FaAirbnb className="w-6 h-6 text-white" />
                    <p className="text-white text-lg">Airbnb</p>
                  </a>
                  <a
                    href="https://www.booking.com/hotel/gb/white-house-villa.en-gb.html?age=0&aid=866831&app_hotel_id=10742807&checkin=2023-10-03&checkout=2023-10-05&from_sn=ios&group_adults=6&group_children=1&label=Share-aEOkjk%401696166832&no_rooms=1&req_adults=6&req_age=0&req_children=1&room1=A%2CA%2CA%2CA%2CA%2CA%2C0%2C"
                    target="_blank"
                    className="flex items-center justify-center gap-2 bg-blue-700 mt-2 p-2 px-4 rounded-md w-full cursor-pointer hover:bg-blue-800 transition-all"
                  >
                    <p className="text-white text-lg">
                      Booking
                      <span className="text-blue-400 text-lg">.com</span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
