"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
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
  const image = useRef();

  const [loadingStates, setLoadingStates] = useState(
    Array(attractionList.length).fill(false)
  );
  const [activeIndexes, setActiveIndexes] = useState(
    Array(attractionList.length).fill(0)
  );

  // const imageLoader = ({ src, width, quality }) => {
  //   return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
  //   // http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpony2.de3db89a.jpeg&w=2048&q=75
  // };

  const handleDotClick = (index, siteIndex) => {
    setLoadingStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[siteIndex] = true;
      return updatedStates;
    });
    setActiveIndexes((prevIndexes) => {
      const updatedIndexes = [...prevIndexes];
      updatedIndexes[siteIndex] = index;
      return updatedIndexes;
    });
  };

  const handleImageLoad = (siteIndex) => {
    console.log("hitting here");
    setLoadingStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[siteIndex] = false;
      return updatedStates;
    });
  };

  useEffect(() => {
    if (image.current?.complete) {
      setLoadingStates((prevStates) => {
        const updatedStates = [...prevStates];
        updatedStates[siteIndex] = false;
        handleImageLoad(siteIndex);
        return updatedStates;
      });
    }
  }, []);

  return (
    <section>
      <div className="bg-[#F3FBF7] w-full h-full justify-center py-20 md:py-[180px]">
        <div className="flex flex-1 w-full mx-auto text-center px-4 md:px-20 flex-col gap-6 items-center justify-center h-full text-[#040C07] mt-20 md:mt-0">
          <h1 className="text-[4rem] font-semibold text-[#040C07]">
            Attractions
          </h1>
          <p className="text-lg font-medium px-4 md:px-32 text-[#040C07]">
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
          <div className={`w-full`}>
            <div className={`w-full mx:auto`}>
              <div>
                <div className="rounded-2xl w-full">
                  {/* {!loadingStates[siteIndex] ? ( */}
                  <Image
                    src={site?.images[activeIndexes[siteIndex]]}
                    alt={site?.title}
                    width="0"
                    height="370"
                    sizes="100vw"
                    className="w-[557px] h-[370px] xl:w-full rounded-2xl object-cover object-center"
                    // loader={imageLoader}
                    // onLoadingComplete={(e) => {
                    //   // e.srcset.indexOf("data:image/gif;base64") < 0 &&
                    //   handleImageLoad(siteIndex);
                    //   console.log(
                    //     "hitting here first",
                    //     site?.images[activeIndexes[siteIndex]]
                    //   );
                    // }}
                    placeholder="blur"
                    blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  />
                  {/* ) : (
                    <div className="relative overflow-hidden h-[370px] w-full rounded-2xl bg-[#f1f2f3] bg-gradient-to-r from-transparent via-gray-300 to-transparent before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:border-t before:border-gray-300 before:bg-gradient-to-r before:from-transparent before:via-gray-300 before:to-transparent"></div>
                  )} */}
                  <div className="flex items-center justify-center mt-3">
                    {site?.images?.map((_, i) => (
                      <div
                        key={i}
                        style={{ marginRight: i < 2 ? "5px" : "0" }}
                        className="cursor-pointer"
                        onClick={() => handleDotClick(i, siteIndex)}
                      >
                        <svg
                          width="7"
                          height="6"
                          viewBox="0 0 7 6"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`${
                            activeIndexes[siteIndex] === i
                              ? "fill-[#226E46]"
                              : "fill-[#D9D9D9]"
                          }`}
                        >
                          <circle
                            cx="3.5"
                            cy="3"
                            r="3"
                            style={{
                              fill:
                                activeIndexes[siteIndex] === i
                                  ? "#226E46"
                                  : "#D9D9D9",
                            }}
                          />
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-start justify-between w-full mt-6">
                  <div>
                    <p className="text-2xl font-semibold leading-10 text-[#040C07]">
                      {site?.title}
                    </p>
                    <p className="font-medium text-sm text-[#484848]">
                      {site?.type}
                    </p>
                  </div>
                  <di className="flex items-center mt-2">
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.6595 19.2372C15.435 19.2372 15.2117 19.1683 15.0195 19.0311L10.5 15.79L5.98057 19.0311C5.79332 19.1658 5.56829 19.2379 5.33762 19.2371C5.10695 19.2363 4.88243 19.1627 4.69612 19.0267C4.50964 18.8914 4.37054 18.7009 4.29863 18.482C4.22671 18.2632 4.22564 18.0273 4.29557 17.8078L5.98112 12.3678L1.50223 9.21166C1.31661 9.07467 1.17876 8.88279 1.10817 8.66315C1.03759 8.44352 1.03784 8.20725 1.1089 7.98777C1.18052 7.76882 1.31914 7.57792 1.50516 7.44204C1.69119 7.30616 1.91521 7.23218 2.14557 7.23055L7.69279 7.22221L9.4589 1.91721C9.53179 1.69867 9.67158 1.5086 9.85848 1.37391C10.0454 1.23922 10.2699 1.16675 10.5003 1.16675C10.7307 1.16675 10.9552 1.23922 11.1421 1.37391C11.329 1.5086 11.4688 1.69867 11.5417 1.91721L13.2778 7.22221L18.8533 7.23055C19.084 7.23185 19.3083 7.30579 19.4945 7.44188C19.6808 7.57796 19.8194 7.76926 19.8906 7.9886C19.9619 8.20795 19.9623 8.44418 19.8917 8.66373C19.821 8.88329 19.683 9.07501 19.4972 9.21166L15.0183 12.3678L16.7039 17.8078C16.774 18.0272 16.773 18.2631 16.7012 18.482C16.6294 18.7008 16.4904 18.8914 16.3039 19.0267C16.117 19.1637 15.8912 19.2375 15.6595 19.2372Z"
                        fill="#FFAC33"
                      />
                    </svg>
                    <span>{site?.rating}</span>
                  </di>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Attractions;
