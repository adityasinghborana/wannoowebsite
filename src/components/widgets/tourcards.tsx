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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
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
  const cardsPerItem = 5;

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
    <div className="mt-8 ">
      <div className="mb-10">
        <SparklesText text="Tours" />
      </div>

      <Carousel className="">
        <CarouselContent className="w-full">
          {chunkedTours.map((chunk, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-wrap justify-center space-x-4">
                {chunk.map((tour) => (
                  <Card
                    key={tour.id}
                    className="py-4 w-1/6 md:w-1/3 lg:w-1/6 m-2"
                  >
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={`${tour.tourdetails?.imagePath}`}
                        width={270}
                        height={180} // Example height, adjust as needed
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
                        className="text-tiny w-full text-black bg-black/20"
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
