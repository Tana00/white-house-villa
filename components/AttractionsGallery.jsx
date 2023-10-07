// Carousel.js
import React, { useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Carousel = ({ site }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className={`w-full`}>
      <div className={`w-full mx:auto`}>
        <div>
          <div ref={sliderRef} className="keen-slider rounded-2xl w-full">
            {site?.images.map((image, index) => (
              <div
                key={index}
                className={`keen-slider__slide number-slide${index + 1} `}
              >
                <Image
                  src={image}
                  alt={site?.title}
                  width="0"
                  height="370"
                  sizes="100vw"
                  className="w-[557px] h-[370px] xl:w-full rounded-2xl object-cover object-center"
                  placeholder="blur"
                />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center mt-3">
            {loaded && instanceRef.current && (
              <div className="flex justify-center">
                {site?.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={
                      "border-none w-3 h-3 bg-[#D9D9D9] rounded-full mx-1.5 p-1 md:p-1.5 cursor-pointer focus:outline-none" +
                      (currentSlide === idx ? " bg-[#226E46]" : "")
                    }
                  ></button>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-start justify-between w-full mt-6">
            <div>
              <p className="text-2xl font-semibold leading-10 text-[#040C07]">
                {site?.title}
              </p>
              <p className="font-medium text-sm text-[#484848]">{site?.type}</p>
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
  );
};

export default Carousel;
