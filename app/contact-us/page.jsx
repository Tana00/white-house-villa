import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-screen flex flex-col justify-center items-center  bg-white"
    >
      <div className=" w-full h-[90vh] mx-auto p-8 flex flex-col gap-8 justify-center items-center bg-[#F3FBF7] rounded-md">
        <div className="flex flex-col gap-3 text-center">
          <h4 className="text-3xl md:text-[2.5rem] md:leading-[64px] font-semibold text-primary-green">
            Have any questions? Contact Us
          </h4>
          <p className="text-[#484848] text-[1.125rem]">
            If have any further questions or enquiries, please contact us.
          </p>
        </div>
        <div className="flex flex-col md:w-3/4 lg:w-1/2 xl:w-2/5 w-full mt-5">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <label className="text-[#252B42] text-base font-medium">
                Name
              </label>
              <input
                type="text"
                className="w-full h-12 outline-none bg-white rounded-md p-4 placeholder:text-gray-400 placeholder:text-xs"
                placeholder="Enter your full name"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[#252B42] text-base font-medium">
                Email Address
              </label>
              <input
                type="text"
                className="w-full h-12 outline-none bg-white rounded-md p-4 placeholder:text-gray-400 placeholder:text-xs"
                placeholder="Enter your email address"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[#252B42] text-base font-medium">
                Send us a message
              </label>
              <textarea
                type="text"
                className="w-full h-32 resize-none bg-white outline-none rounded-md p-4 placeholder:text-gray-400 placeholder:text-xs"
                placeholder="Message. . ."
              />
            </div>
            <div className="flex justify-center">
              <button className="w-[200px] h-12 bg-primary-green text-white rounded-md">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
