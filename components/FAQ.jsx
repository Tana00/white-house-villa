"use client";
import React, { useState } from "react";

const FAQItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };
  return (
    <div className="single-faq mb-8 w-full rounded-lg border border-gray-100 bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary-green bg-opacity-5 text-white">
          <svg
            className={`duration-200 ease-in-out fill-primary-green stroke-primary-green ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="text-lg font-semibold text-black">{header}</h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-sm leading-loose text-[#484848]">{text}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-4 text-2xl font-bold text-dark sm:text-4xl md:text-[40px]">
                Any Questions? Look Here
              </h2>
              <p className="text-base text-body-color px-4 md:px-0">
                Quick answers to common questions about our apartments. Find
                info on booking, amenities, and more. Need help? Contact our
                friendly support team. Enjoy your stay!
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-wrap md:w-4/5 mx-auto">
          <div className="w-full px-4 lg:w-1/2 mx-auto">
            <FAQItem
              header="How long can I rent for?"
              text="Stay for as long as you like! If you need to be here for three days or three months we can offer you comfortable short term accommodation. There is no maximum term and many of the properties are available for periods in excess of six months."
            />
            <FAQItem
              header="What happens when I arrive?"
              text="We will arrange your arrival well before you get here.  Arrival times vary between 14.00-16.00 – please consult individual property details. For very late arrivals we often suggest a cab company for transfer and for keys, we will give you the code to access the property prior to arrival."
            />
            <FAQItem
              header="How many people can stay?"
              text="The number of people permitted to stay in a short term apartment rentals will vary – please check the property description for exact details. After you make your booking, only the people listed on the booking agreement are entitled to stay at the property."
            />
            <FAQItem
              header="May I view the Apartment?"
              text="Viewings can usually be arranged between short lets when the flat is being prepared.  This avoids disturbing the current occupant. If you have requested a viewing please keep in mind that the property can not be held for you until you visit. Short let rentals are promoted worldwide, booked on-line and availability changes frequently. 99% of our clients book from abroad and do not view homes before they rent. We  provide comprehensive information on the website so that “what you see is what you get”. This includes a thorough property description including locale, an accurate Google map, a complete portfolio of current photographs, plus the very important “Small Print” section. We want you to understand the nitty, gritty, practical side of renting an apartment so that you can feel confident to stay with us."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2 mx-auto">
            <FAQItem
              header="How much does it cost?"
              text="Our short term apartment rentals are offered at attractive rates, competitively priced for the market. Rental rates change depending on the time of year, the number of people staying at the flat and the length of stay. The rate for your stay can easily be calculated on any of the short let apartments on our website."
            />
            <FAQItem
              header="Do I pay a damage deposit?"
              text="Yes, either as a set amount or pre-authorised against your credit card. The funds may be used to replace damaged items, or for remedial cleaning, if required."
            />
            <FAQItem
              header="How large is my bed?"
              text="Single, twin or bunk bed: 90 cm x 190 cm (3' 0″ x 6' 3″)
              Small-double: 120 cm x 190 cm (4' 0″ x 6' 3″)
              Double bed: 135 cm x 190 cm (4' 6″ x 6' 3″)
              Kingsize bed: 150 cm x 200 cm (5' 0″ x 6' 6″)
              Super kingsize bed: 180 cm x 200 cm (6' 0″ x 6' 6″)"
            />
            <FAQItem
              header="What is included in the rate?"
              text="Utilities and property expenses such as gas, electricity, water, wifi, TV license and council tax are all included. Self-catering accommodation will be professionally cleaned before you arrive and exit-cleaning is included. Linen, towels, starter toiletries and consumables such as soap, toilet paper and cleaning products are provided for your arrival but are not replenished. Serviced apartment providers include a weekly clean and linen change for stays of 7 nights or more. Telephone usage is charged separately as are any extras you may select, for example a hamper, extra cleaning, baby cot etc. VAT is not included. Where VAT applies it is charged at 20% for the first 28 nights and 4% thereafter. Please read the Small Print on the property details to check if VAT applies to your home."
            />
          </div>
        </div>
      </div>

      <div class="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#226E46" stop-opacity="0.36" />
              <stop offset="1" stop-color="#f2fdf5" stop-opacity="0" />
              <stop offset="1" stop-color="#f2fdf5" stop-opacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default FAQ;
