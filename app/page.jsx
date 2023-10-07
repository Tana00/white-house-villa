import React from "react";
import Newsletter from "@/components/Newsletter";
import Home from "./home/page";
import About from "./about/page";
import Explore from "./explore/page";
import HowItWorks from "./how-it-works/page";
import WhyUs from "./why-us/page";
import Contact from "./contact-us/page";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div>
      <main className="w-full min-h-screen flex flex-col bg-[#F7F7F7]">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="explore">
          <Explore />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="why-us">
          <WhyUs />
        </section>
        <section id="contact-us">
          <Contact />
        </section>
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Page;
