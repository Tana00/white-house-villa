import React from "react";
import Image from "next/image";
import Link from "next/link";
import guest from "../../public/assets/tourist.svg";

const About = () => {
  return (
    <div className="flex flex-col mb-14 h-full items-center justify-start bg-[#F7F7F7]">
      {/*  Headline text */}
      <div className="flex flex-1 md:w-4/5 h-max md:px-20 px-4 flex-col gap-6 items-center my-16 text-center text-[#040C07]">
        <h3 className="text-3xl sm:text-4xl md:text-[2.5rem] font-semibold leading-none text-[#040C07]">
          About Us
        </h3>
        <p className="text-sm sm:text-[1.1rem] w-full md:w-11/12 leading-8 flex items-center justify-stretch">
          At White House Villas, we believe that comfort is key. We understand
          that your accommodation plays a vital role in making your visit to
          Nottingham pleasant and successful. Our team is committed to ensuring
          your every need is met, and our property is designed with your comfort
          in mind. Our commitment to excellence goes beyond just providing a
          place to stay. We are passionate about delivering outstanding guest
          experiences. From the moment you arrive until your departure, our
          friendly and professional staff is at your service, ready to assist
          with any questions or requests you may have.
        </p>
      </div>
      <div className=" flex flex-1 flex-col gap-8 md:w-4/5 justify-center items-center text-center bg-white rounded-md p-8">
        <Image
          src={guest}
          alt="guest"
          width={90}
          height={90}
          // placeholder="blur"
        />
        <h4 className="text-[1.5rem] font-semibold text-black">For Guests</h4>
        <p className="home-text text-sm sm:text-[1.125rem] mt-[-30px] text-[#484848]">
          Whitehouse Villas is your premier choice for a home away from home in
          Nottingham. Our goal is to make your stay in Mapperley as enjoyable
          and stress-free as possible. Whether you're in town for work, leisure,
          or any other reason, we're dedicated to providing you with a
          comfortable and memorable experience.
        </p>
        <Link href="/#explore">
          <button className="bg-primary-green text-white px-8 py-3 rounded-md hover:bg-transparent hover:text-primary-green hover:border hover:border-primary-green hover:transition duration-300 ease-in-out">
            View Property
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
