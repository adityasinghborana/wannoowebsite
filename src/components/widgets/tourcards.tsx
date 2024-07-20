"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardFooter,
  CardHeader,
  CardBody,
  Button,
} from "@nextui-org/react";
import SparklesText from "../magicui/sparkles-text";
import { getAllTours } from "@/lib/service";
import { Tours } from "@/lib/interfaces/alltours";
import { Image } from "@nextui-org/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Cards: React.FC = () => {
  const [tours, setTours] = useState<Tours[]>([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const data = await getAllTours(); // Replace with your actual API call
        setTours(data);
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    };

    fetchTours();
  }, []);

  // Calculate the number of cards needed per carousel item
  const cardsPerItem = 15;

  // Function to chunk array into arrays of specified size
  const chunkArray = (arr: Tours[], size: number) => {
    return arr.reduce((acc, _, i) => {
      if (i % size === 0) {
        acc.push(arr.slice(i, i + size));
      }
      return acc;
    }, [] as Tours[][]);
  };

  // Chunk tours array into arrays with cardsPerItem cards each
  const chunkedTours = chunkArray(tours, cardsPerItem);

  return (
    <div className=" pt-10">
      <Carousel className="">
        <CarouselContent className="w-full">
          {chunkedTours.map((chunk, index) => (
            <CarouselItem key={index}>
              <div className="grid grid-cols-5 gap-4 px-20">
                {chunk.map((tour) => (
                  <Card
                    key={tour.id}
                    className="py-4  w-full md:w-1/3 lg:w-full m-2"
                  >
                    <CardBody className="overflow-hidden py-2 ">
                      <Image
                        alt="Card background"
                        className=" rounded-2xl h-[160px] "
                        disableSkeleton={false}
                        src={`${tour.tourdetails?.imagePath}`}
                        width={270}
                        height={10} // Example height, adjust as needed
                      />
                    </CardBody>
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">
                        {tour.countryName}
                      </p>
                      <small className="text-default-500">
                        From ${tour.tourId}
                      </small>
                      <h4 className="font-bold text-large">{tour.tourName}</h4>
                    </CardHeader>

                    <CardFooter className="">
                      <Button
                        className="text-tiny w-full  main text-white"
                        variant="flat"
                        color="default"
                        radius="lg"
                        size="sm"
                      >
                        Explore Now
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="z-10" />
        <CarouselNext className="z-10" />
      </Carousel>
    </div>
  );
};

export default Cards;
