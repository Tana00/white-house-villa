import React from "react";
import Link from "next/link";
// import { GrFacebookOption, GrTwitter } from "react-icons/gr";
// import { IoLogoInstagram } from "react-icons/io";
// import { BiLogoLinkedin } from "react-icons/bi";

const Home = () => {
  return (
    <div className="home-bg flex flex-col md:flex-row 2xl:flex-col gap-6 h-auto md:h-screen justify-center md:mt-20 mt-20">
      <div className="flex flex-1 w-full xl:pr-0 xl:w-10/12 2xl:w-2/3 px-4 md:px-20 flex-col gap-6 items-start justify-center h-full text-black mt-20 md:mt-0">
        <h1 className="text-[3rem] lg:text-[5rem] xl:text-[4.7rem] 2xl:text-[8rem] leading-[3.5rem] 2xl:leading-[8.5rem] lg:leading-[5rem] font-bold md:font-semibold mt-0 md:mt-20 xl:mt-[-20px] 2xl:mt-[-40px] text-black">
          Your <span className="text-primary-green">Home</span> Away from
          <span className="text-primary-green pl-2">Home.</span>
        </h1>
        <p className="lg:mr-40 xl:mr-0 2xl:mr-20 text-lg md:text-xl 2xl:text-[2.5rem] md:leading-8 2xl:leading-[5rem] 2xl:my-2 md:font-normal home-text border-l-2 border-primary-green pl-4">
          At White House Villa, we're passionate about connecting travelers with
          unique accommodations and experiences around the world. Whether you're
          a host looking to share your space or a guest seeking memorable stays,
          our platform has you covered.
        </p>
        <Link href="/#explore" className="w-[186px] lg:w-1/3 2xl:w-1/3">
          <button className="w-full bg-primary-green text-white px-6 py-3 2xl:py-8 2xl:px-20 2xl:text-[1.9rem] rounded-md hover:bg-transparent hover:text-primary-green hover:border hover:border-primary-green hover:transition duration-300 ease-in-out">
            View Property
          </button>
        </Link>

        {/* social media icons */}
        <div className="flex gap-4 mt-14">
          {/* <GrFacebookOption className="w-10 h-10 bg-primary-green text-white p-2.5 rounded-full hover:text-green-400 hover:transition duration-300 ease-in-out" />
          <GrTwitter className="w-10 h-10 bg-primary-green text-white p-2.5 rounded-full hover:text-green-400 hover:transition duration-300 ease-in-out" />
          <IoLogoInstagram className="w-10 h-10 bg-primary-green text-white p-2.5 rounded-full hover:text-green-400 hover:transition duration-300 ease-in-out" />
          <BiLogoLinkedin className="w-10 h-10 bg-primary-green text-white p-2.5 rounded-full hover:text-green-400 hover:transition duration-300 ease-in-out" /> */}
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center h-screen text-white"></div>
    </div>
  );
};

export default Home;
