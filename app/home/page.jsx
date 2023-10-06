import React from "react";
import Link from "next/link";
// import { GrFacebookOption, GrTwitter } from "react-icons/gr";
// import { IoLogoInstagram } from "react-icons/io";
// import { BiLogoLinkedin } from "react-icons/bi";

const Home = () => {
  return (
    <div className="home-bg flex flex-col lg:flex-row gap-6 h-auto md:h-screen justify-center md:mt-20 mt-20">
      <div className="flex flex-1 w-full lg:w-1/2 px-4 md:px-20 flex-col gap-6 items-start justify-center h-full text-black mt-12 md:mt-20 lg:mt-0">
        <h1 className="text-[3rem] font-bold leading-[3.5rem] mt-20 md:mt-0 md:text-[5rem] md:font-semibold md:leading-[4.5rem] text-black">
          Your <span className="text-primary-green">Home</span> Away from{" "}
          <span className="text-primary-green">Home.</span>
        </h1>
        <p className="text-[1.125rem] home-text border-l-2 border-primary-green pl-4">
          At White House Villa, we're passionate about connecting travelers with
          unique accommodations and experiences around the world. Whether you're
          a host looking to share your space or a guest seeking memorable stays,
          our platform has you covered.
        </p>
        <Link href="/#explore">
          <button className="bg-primary-green text-white px-6 py-3 rounded-md hover:bg-transparent hover:text-primary-green hover:border hover:border-primary-green hover:transition duration-300 ease-in-out">
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
      <div className="flex flex-1  flex-col items-center justify-center h-screen text-white"></div>
    </div>
  );
};

export default Home;
