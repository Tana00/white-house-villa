import React from "react";

const Home = () => {
  const divStyle = {
    backgroundImage: `url('/assets/homebg.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <section className="relative font-manrope" style={divStyle}>
      <div className="absolute inset-0 bg-[#F3FBF7] bg-transparent from-[#F3FBF7]/80 via-[#F3FBF7]/80 to-[#F3FBF700]/80 md:from-[#F3FBF7] md:via-[#F3FBF7]/90 md:to-[#F3FBF700]/0 bg-gradient-to-r"></div>
      <div className="relative lg:ml-20 w-full px-4 py-32 pt-36 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="text-center md:text-left">
          <h1 className="w-full text-3xl sm:text-4xl md:text-5xl font-extrabold lg:text-6xl xl:text-7xl 2xl:text-[5.5rem]">
            Your <span className="text-primary-green">Home</span> Away <br />{" "}
            from
            <span className="text-primary-green pl-2">Home.</span>
          </h1>

          <p className="2xl:my-4 w-11/12 mx-auto md:mr-auto sm:w-2/3 lg:w-3/5 lg:m-4 my-4 md:mb-0 md:mx-0 text-base sm:text-lg/relaxed md:text-[1.3rem] lg:text-[1.2rem] xl:text-[1.25rem] 2xl:text-[1.35rem] 2xl:mt-4 2xl:leading-[2rem] md:border-l-2 md:border-primary-green md:pl-4">
            Discover comfort, convenience, and style at our serviced
            accommodation in Mapperley. Whether you're visiting for business or
            leisure, we provide a welcoming and cozy atmosphere that's perfect
            for your stay. Explore our spacious accommodations, exceptional
            amenities, and the charm of Mapperley - your gateway to Nottingham's
            best experiences.
          </p>

          <div className="m-8 md:mb-0 md:mx-0 mx-auto md:mr-auto flex flex-wrap gap-4 text-center w-2/3 md:w-[256px] lg:w-[400px]">
            <a
              href="/#explore"
              target="_blank"
              className="block w-full rounded-md bg-primary-green px-12 py-3.5 2xl:px-14 2xl:py-4 text-sm md:text-lg xl:text-xl 2xl:text-2xl font-medium text-white shadow hover:bg-transparent hover:text-primary-green focus:outline-none focus:ring"
            >
              View Property
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
