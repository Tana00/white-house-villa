import Link from "next/link";

const Dressing = () => {
  return (
    <section>
      <div className="bg-[#F3FBF7] w-full justify-center py-20 md:py-[180px] font-manrope">
        <div className="flex flex-1 w-full mx-auto text-center px-4 md:px-20 flex-col gap-6 items-center justify-center h-full text-[#040C07] mt-20 md:mt-0">
          <h1 className="text-4xl md:text-[4rem] font-semibold text-[#040C07]">
            Dressing
          </h1>
          <p className="text-lg font-medium px-4 xl:px-32 text-[#040C07] w-full lg:w-3/4">
            Welcome to a world of exploration and discovery. White House Villa
            is brimming with captivating attractions that cater to every
            interest and age group. From historical landmarks to natural
            wonders, cultural treasures to family-friendly adventures, there's
            something here for everyone.
          </p>
          <Link href="#contact_us">
            <button className="bg-primary-green text-white px-6 py-3 rounded-md hover:bg-transparent hover:text-primary-green hover:border hover:border-primary-green hover:transition duration-300 ease-in-out">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex items-center justify-between flex-col md:flex-row my-20 w-11/12 mx-auto md:w-4/5">
          <div className="md:w-1/2 w-full mb-5 md:mb-0">
            <p className="text-sm font-medium text-[#484848] uppercase">
              What we Offer
            </p>
            <h3 className="text-4xl md:text-4xl font-semibold mt-2 text-[#040C07] md:w-2/3">
              Want to Know More About Our Services
            </h3>
          </div>
          <div className="md:w-1/2 w-full text-[#484848]">
            <p className="text-[16px] leading-8">
              Welcome to <strong>White House Villa</strong>, the destination
              where homes undergo a metamorphosis into personalized sanctuaries
              through the finesse of interior decor remodeling. Our mission is
              to craft living spaces that mirror the distinctive personalities
              and lifestyles of our clients, transcending mere aesthetics to
              encapsulate the essence of what makes a house a home.
            </p>
          </div>
        </div>
        <div className="w-11/12 md:w-4/5 mx-auto my-20 md:my-40">
          <div className="flex flex-col xl:flex-row items-end justify-start">
            <img
              src="https://images.squarespace-cdn.com/content/v1/648e49fdc2f9990eb25a6d83/ba8dc245-cd13-4da5-8b70-9a2c90eda284/KItchen+-+Yellow%3AWhite.jpg"
              alt=""
              className="w-full xl:w-2/3"
            />
            <div className="text-left xl:bg-slate-100 xl:mt-10 xl:pl-4 py-4">
              <h3 className="text-left text-2xl font-semibold my-4 text-[#040C07]">
                Total Makeovers
              </h3>
              <p className="leading-8 text-[16px]">
                Elevate your living experience with White House Villa's Total
                Makeover Service—an immersive transformation that transcends
                conventional decor. Our expert team blends innovative design and
                meticulous craftsmanship to create bespoke sanctuaries that
                reflect your unique style. From conceptualization to
                realization, let White House Villa redefine your home, crafting
                a space where every detail resonates with sophistication and
                purpose.
              </p>
            </div>
          </div>
        </div>
        <p className="text-center text-sm font-medium text-[#484848] uppercase md:mt-20 ml-8 md:ml-0">
          Previous Works
        </p>
        <h3 className="text-center text-3xl md:text-4xl font-semibold mt-2 text-[#040C07] ml-8 md:ml-0">
          Work Gallery
        </h3>
        <div className="w-11/12 xl:w-4/5 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 mb-20 mt-4 md:my-20 mx-auto">
          <img
            src="https://homebnc.com/homeimg/2017/08/21-budget-friendly-living-room-makeover-ideas-before-after-homebnc.jpg"
            alt=""
            className="max-h-[600px] h-full w-full"
          />
          <img
            src="https://i.pinimg.com/1200x/26/12/9c/26129cdb3f10505bb6d893f6b74fffc6.jpg"
            alt=""
            className="max-h-[600px] h-full w-full"
          />
          <img
            src="https://ar.happyvalentinesday2020.online/pics/i.pinimg.com/originals/76/22/f1/7622f1beb88b1b46d1f278cd06284884.jpg"
            alt=""
            className="max-h-[600px] h-full w-full"
          />
          <img
            src="https://buildingandinteriors.com/wp-content/uploads/2023/05/Wayfair-Home-Living-Room-Reno-3-before-after.jpg"
            alt=""
            className="max-h-[600px] h-full w-full"
          />
          {/* <img src="" alt="" /> */}
        </div>
      </div>
    </section>
  );
};

export default Dressing;
