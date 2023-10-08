"use client";
import React from "react";
import Carousel from "@/components/AttractionsGallery";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Pony from "../../public/assets/gallery/pony.jpeg";
import Pony1 from "../../public/assets/gallery/pony2.jpeg";
import Pony2 from "../../public/assets/gallery/pony3.jpeg";
import Wollaton from "../../public/assets/gallery/wollaton.jpeg";
import Wollaton1 from "../../public/assets/gallery/wollaton2.jpeg";
import Wollaton2 from "../../public/assets/gallery/wollaton3.jpeg";
import Caves from "../../public/assets/gallery/caves.jpeg";
import Caves1 from "../../public/assets/gallery/caves1.jpeg";
import Caves2 from "../../public/assets/gallery/caves2.jpeg";
import Theatre from "../../public/assets/gallery/theatre.jpeg";
import Theatre1 from "../../public/assets/gallery/theatre1.jpeg";
import Theatre2 from "../../public/assets/gallery/theatre2.jpeg";
import Motor from "../../public/assets/gallery/motor.jpeg";
import Motor1 from "../../public/assets/gallery/motor1.jpeg";
import Motor2 from "../../public/assets/gallery/motor2.jpeg";
import Robinhood from "../../public/assets/gallery/robinhood.jpeg";
import Robinhood1 from "../../public/assets/gallery/robinhood1.jpeg";
import Robinhood2 from "../../public/assets/gallery/robinhood2.jpeg";
import Ground from "../../public/assets/gallery/ground.jpeg";
import Ground1 from "../../public/assets/gallery/ground1.jpeg";
import Ground2 from "../../public/assets/gallery/ground2.jpeg";
import Market from "../../public/assets/gallery/market.jpeg";
import Market1 from "../../public/assets/gallery/market1.jpeg";
import Market2 from "../../public/assets/gallery/market2.jpeg";
import PlayHouse from "../../public/assets/gallery/play-house.jpeg";
import PlayHouse1 from "../../public/assets/gallery/play-house1.jpeg";
import PlayHouse2 from "../../public/assets/gallery/play-house2.jpeg";
import Experience from "../../public/assets/gallery/experience.jpeg";
import Experience1 from "../../public/assets/gallery/experience1.jpeg";
import Experience2 from "../../public/assets/gallery/experience2.jpeg";
import Workshop from "../../public/assets/gallery/workshop.jpeg";
import Workshop1 from "../../public/assets/gallery/workshop1.jpeg";
import Workshop2 from "../../public/assets/gallery/workshop2.jpeg";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const attractionList = [
  {
    id: 1,
    images: [Pony, Pony1, Pony2],
    title: "Pony trekking",
    type: "Animal lovers will enjoy this pony trekking adventure at Creswell Crags, near Worksop, Nottinghamshire. Admire the beautiful limestone gorge as you meander along trails through farmland and forests.",
    rating: "5.0",
  },
  {
    id: 2,
    images: [Wollaton, Wollaton1, Wollaton2],
    title: "Wollaton Hall & Park",
    type: "Wollaton Hall is one of the country's finest Grade One listed Elizabethan mansions, set within 500 acres of beautiful parkland. Experience stunning architecture, exhibitions, a packed events program and an array of wildlife.",
    rating: "4.5",
  },
  {
    id: 3,
    images: [Caves, Caves1, Caves2],
    title: "City Of Caves",
    type: "Nottingham has the UK's largest network of caves - over 800 are hidden beneath its streets. At The City of Caves, you can discover the largest publicly available section of this vast underground network.",
    rating: "4.0",
  },
  {
    id: 4,
    images: [Theatre, Theatre1, Theatre2],
    title: "Theatre Royal & Royal Concert Hall",
    type: "BeThe Theatre Royal & Royal Concert Hall are 2 first class entertainment venues in Nottingham. Come and see top West End musicals and plays, opera and ballet, pop, rock and classical music, children's shows and side-splitting comedy.",
    rating: "4.0",
  },
  {
    id: 5,
    images: [Motor, Motor1, Motor2],
    title: "Motor Point Arena",
    type: "The Motorpoint Arena Nottingham is one of the UK's top entertainment venues. Our 10,000 seat Arena hosts the cream of live music, comedy, shows & sporting events in the Midlands.",
    rating: "4.0",
  },
  {
    id: 6,
    images: [Robinhood, Robinhood1, Robinhood2],
    title: "The Robin Hood Experience",
    type: "Visit the only attraction in the City of Nottingham Dedicated solely to our World Famous Outlaw Hero! Travel back in time through our immersive walk-through in the shadow of Nottingham Castle and experience the sights, sounds and smells of Medieval Nottingham! ",
    rating: "4.0",
  },
  {
    id: 7,
    images: [Ground, Ground1, Ground2],
    title: "The City Ground",
    type: "Stadium",
    rating: "4.5",
  },
  {
    id: 8,
    images: [Market, Market1, Market2],
    title: "Old Market Square",
    type: "Historic Site",
    rating: "4.0",
  },
  {
    id: 9,
    images: [Experience, Experience1, Experience2],
    title: "Private Immersive Play Wall Experience",
    type: "Fun, frenetic and fantastically immersive games for the whole family. Where your body becomes the controller and your mind believes it is all real! Our Immersive Play Zone will have you in stitches and the kids in their element. ",
    rating: "5.0",
  },
  {
    id: 10,
    images: [Workshop, Workshop1, Workshop2],
    title: "Games Workshop Warhammer World",
    type: "Warhammer World is the home of the Warhammer hobby, Games Workshop's global headquarters and visitor centre, a haven for collectors and gamers from across the globe! ",
    rating: "4.5",
  },
  {
    id: 11,
    images: [PlayHouse, PlayHouse1, PlayHouse2],
    title: "Nottingham Play House",
    type: "Theatre",
    rating: "4.5",
  },
];

const Attractions = () => {
  return (
    <>
      <Nav />
      <section>
        <div className="bg-[#F3FBF7] w-full h-full justify-center py-20 md:py-[180px]">
          <div className="flex flex-1 w-full mx-auto text-center px-4 md:px-20 flex-col gap-6 items-center justify-center h-full text-[#040C07] mt-20 md:mt-0">
            <h1 className="text-4xl md:text-[4rem] font-semibold text-[#040C07]">
              Attractions
            </h1>
            <p className="text-sm sm:text-lg font-medium px-4 md:px-32 text-[#040C07]">
              Welcome to a world of exploration and discovery. White House Villa
              is brimming with captivating attractions that cater to every
              interest and age group. From historical landmarks to natural
              wonders, cultural treasures to family-friendly adventures, there's
              something here for everyone.
            </p>
          </div>
        </div>
        <div className="w-11/12 xl:w-4/5 2xl:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 my-20 mx-auto">
          {attractionList?.map((site, siteIndex) => (
            <Carousel key={siteIndex} site={site} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Attractions;
