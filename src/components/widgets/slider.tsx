import React, { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { EmblaOptionsType } from "embla-carousel";
import { twMerge } from "tailwind-merge";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const Slider = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const autoplay = useRef(Autoplay({ delay: 2000, stopOnMouseEnter: true }));
  type PropType = {
    options?: EmblaOptionsType;
  };
  useEffect(() => {
    // Set the initial width
    setWindowWidth(window.innerWidth);

    // Update width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className=" bg-white mt-[90px] px-2 ">
      <Carousel
        className="shadow-xl"
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          // Example: Configure slide transition options
          slidesToScroll: 1,

          loop: true,
        }}
      >
        <CarouselContent className="h-[400px]">
          <CarouselItem>
            <Image
              src="/homeimage.png"
              alt="alt"
              height={100}
              width={windowWidth}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/homeimage.png"
              alt="alt"
              height={200}
              width={windowWidth}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/homeimage.png"
              alt="alt"
              height={200}
              width={windowWidth}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Slider;
