"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const apartmentPictures = [
  {
    src: "https://a0.muscache.com/im/pictures/miso/Hosting-977242512291600380/original/104ef12e-6591-4f3c-b6b9-1d8da8862370.jpeg",
    title: "Bedroom",
  },
  {
    src: "https://a0.muscache.com/im/pictures/miso/Hosting-977242512291600380/original/e0f75c2b-2d8c-447a-a0a5-c4b0c34a6b59.jpeg",
    title: "Living Space",
  },
  {
    src: "https://a0.muscache.com/im/pictures/miso/Hosting-977242512291600380/original/a5332fcd-20be-4de6-8ec8-b152f823568a.jpeg",
    title: "Work Station",
  },
  {
    src: "https://a0.muscache.com/im/pictures/miso/Hosting-977242512291600380/original/ee5ea13a-31f2-4ecf-a68b-c89fbd7c5208.jpeg",
    title: "Kitchen",
  },
  {
    src: "https://a0.muscache.com/im/pictures/miso/Hosting-977242512291600380/original/15a8f3c5-4e30-4c09-9ced-b0bc2ae02046.jpeg",
    title: "Bathroom",
  },
  {
    src: "https://a0.muscache.com/im/pictures/miso/Hosting-977242512291600380/original/047d78df-bed0-4040-a20e-757272f4b0e6.jpeg",
    title: "Dining",
  },
  {
    src: "https://a0.muscache.com/im/pictures/miso/Hosting-977242512291600380/original/e632c673-0b1b-4a97-b8a8-08cc596db3ca.jpeg",
    title: "Backyard",
  },
  {
    src: "https://a0.muscache.com/im/pictures/miso/Hosting-977242512291600380/original/0df54723-a5f4-4125-82ec-62e33f1191c1.jpeg",
    title: "Bedroom",
  },
  {
    src: "https://a0.muscache.com/im/pictures/miso/Hosting-977242512291600380/original/03c23234-406b-4b65-b784-451586d4793a.jpeg",
    title: "Staircase",
  },
  {
    src: "https://a0.muscache.com/im/pictures/miso/Hosting-977242512291600380/original/2dd1203b-2e21-46c5-9933-1e69ccd295a5.jpeg",
    title: "Backyard",
  },
  {
    src: "https://a0.muscache.com/im/pictures/miso/Hosting-977242512291600380/original/bcc58799-a889-4e31-9239-a4e9167ac017.jpeg",
    title: "Bed",
  },
  //   {
  //     src: "",
  //     title: "",
  //   },
  //   {
  //     src: "",
  //     title: "",
  //   },
  //   {
  //     src: "",
  //     title: "",
  //   },
];

function useWindowSize() {
  if (typeof window !== "undefined") {
    const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  }
  useEffect(() => {
    const handleResize = () => setSize([window.innerHeight, window.innerWidth]);
    window.addEventListener("resize", handleResize);
  }, []);
  return size;
}

const array = apartmentPictures.map((x) => {
  return { src: x.src, alt: x.title };
});

const Gallery = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <AiOutlineArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <AiOutlineArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const [height, width] = useWindowSize();

  const settings = {
    className: "center",
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: width > 1000 ? 3 : 1,
    centerMode: true,
    centerPadding: "60px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => {
      console.log(current);
      setImageIndex(next);
    },
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {array.map(({ src, alt }, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={src} alt={alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
