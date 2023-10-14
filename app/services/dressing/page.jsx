import Link from "next/link";

const Dressing = () => {
  return (
    <section>
      <div className="bg-[#F3FBF7] w-full justify-center py-20 md:py-[180px] font-manrope">
        <div className="flex flex-1 w-full mx-auto text-center px-4 md:px-20 flex-col gap-6 items-center justify-center h-full text-[#040C07] mt-20 md:mt-0">
          <h1 className="text-4xl md:text-[3rem] leading-[32px] font-semibold text-[#040C07]">
            Glam & Quirky Dressing Service
          </h1>
          <p className="text-sm sm:text-[18px] leading-8 font-medium px-4 xl:px-32 text-[#040C07] w-full lg:w-3/4">
            At JVAS Property, we understand that not every property owner is an
            expert in interior design. That's where our 'Glam Quirky Service'
            steps in. We offer a specialized service for property owners who
            need assistance in dressing their serviced accommodations, adding a
            touch of glamour and quirkiness to attract and delight their guests.
          </p>
          <Link href="#contact_us">
            <button className="bg-primary-green text-white px-6 py-3 md:px-8 md:py-4 rounded-md hover:bg-transparent hover:text-primary-green hover:border hover:border-primary-green hover:transition duration-300 ease-in-out">
              Transform Your Space
            </button>
          </Link>
        </div>
      </div>
      <div className="">
        <div className="mt-20 w-11/12 mx-auto md:w-4/5">
          <div className="md:w-1/2 mx-auto w-full mb-5 md:mb-0 text-center">
            <p className="text-sm font-medium text-[#484848] uppercase">
              What we Offer
            </p>
            <h3 className="text-4xl font-semibold mt-2 text-[#040C07] w-full">
              Want to Know More About Our Services
            </h3>
          </div>
          <div className="flex items-start justify-between flex-col md:flex-row mt-10 mb-20 gap-x-10">
            <div className="w-full text-[#484848]">
              <p className="text-[16px] leading-8">
                <ul className="list-disc ml-6 my-4 text-lg text-[#484848]">
                  <div className="flex flex-col md:flex-row items-start justify-between">
                    <li className="my-3 leading-8 w-full md:w-[46%]">
                      <strong>Professional Decor:</strong> We will work closely
                      with you to create a stylish and unique decor for your
                      serviced accommodation. Whether you're seeking a chic,
                      glamorous, or whimsical style, we have the expertise to
                      make it happen.
                    </li>
                    <li className="my-3 leading-8 w-full md:w-[46%]">
                      <strong>Luxurious Linens: </strong> We provide quality,
                      luxurious linens to elevate the comfort of your guests and
                      make their stay even more enjoyable.
                    </li>
                  </div>
                  <div className="flex flex-col md:flex-row items-start justify-between mt-5">
                    <li className="my-3 leading-8 w-full md:w-[46%]">
                      <strong>Themed Decor: </strong> If you desire a theme,
                      era, or style for your property, we can bring it to life.
                      Whether it's vintage, Hollywood glamour, or something
                      entirely distinctive, we can execute your vision.
                    </li>
                    <li className="my-3 leading-8 w-full md:w-[46%]">
                      <strong>Personal Touch: </strong> We pay meticulous
                      attention to detail, ensuring that your accommodation
                      reflects the personality and style you envision. This can
                      include fresh flowers, customized lighting, and unique
                      ornamental pieces, among other personalized touches.
                    </li>
                  </div>
                </ul>
              </p>
            </div>
          </div>
          <div className="mt-10 md:mt-20 border-t-[3px] pt-20">
            <div className="md:w-1/2 mx-auto w-full mb-5 md:mb-0 text-center">
              <p className="text-sm font-medium text-[#484848] uppercase">
                What you'll get
              </p>
              <h3 className="text-4xl font-semibold mt-2 text-[#040C07] w-full">
                Benefits of Our Glam & Quirky Service
              </h3>
            </div>
            <div className="flex items-start justify-between flex-col md:flex-row mt-10 mb-20 gap-x-10">
              <div className="w-full text-[#484848]">
                <p className="text-[16px] leading-8">
                  <ul className="list-disc ml-6 my-4 text-lg text-[#484848]">
                    <div className="flex flex-col md:flex-row items-start justify-between">
                      <li className="my-3 leading-8 w-full md:w-[46%]">
                        <strong>Enhance Guest Experience: </strong> A
                        well-designed and stylish property can significantly
                        enhance the overall guest experience, leading to higher
                        guest satisfaction and positive reviews.
                      </li>
                      <li className="my-3 leading-8 w-full md:w-[46%]">
                        <strong>Attract More Bookings: </strong> A property with
                        unique and attractive decor is more likely to stand out
                        in the competitive market, helping you attract more
                        bookings.
                      </li>
                    </div>
                    <div className="flex flex-col md:flex-row items-start justify-between mt-5">
                      <li className="my-3 leading-8 w-full md:w-[46%]">
                        <strong>Increase Property Value: </strong> A beautifully
                        decorated property often commands higher rental rates,
                        potentially increasing your property's overall value.
                      </li>
                      <li className="my-3 leading-8 w-full md:w-[46%]">
                        <strong>Save Time and Effort: </strong> Our team handles
                        all aspects of decorating your property, saving you the
                        time and effort of doing it yourself.
                      </li>
                    </div>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-11/12 md:w-4/5 mx-auto my-20 md:my-40">
          <div className="flex flex-col xl:flex-row items-center justify-start">
            <img
              src="https://images.squarespace-cdn.com/content/v1/648e49fdc2f9990eb25a6d83/ba8dc245-cd13-4da5-8b70-9a2c90eda284/KItchen+-+Yellow%3AWhite.jpg"
              alt=""
              className="w-full xl:w-2/3"
            />
            <div className="text-left xl:bg-slate-100 xl:pl-4 py-6 h-full">
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

      <div className="bg-[#ebf0ee] w-full md:mt-10 p-10 md:p-20 text-center">
        <h3 className="font-semibold text-2xl md:text-3xl mt-2 text-[#040C07]">
          How to Book Our Glam & Quirky Service
        </h3>
        <p className="text-lg md:text-xl leading-10 text-[#484848] w-full md:w-10/12 mx-auto mt-5 mb-10">
          Booking our Glam & Quirky Service is straightforward. Simply get in
          touch with our team and share your property's details, your vision,
          and any specific requirements. We will work closely with you to bring
          your ideas to life. Pricing is available upon request and will depend
          on the level of customization and decor requirements.
        </p>
      </div>
    </section>
  );
};

export default Dressing;
