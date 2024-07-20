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
import { GetEvents } from "@/lib/service";
import { Events, Eventdetail } from "@/lib/interfaces/allevents";
import { Image } from "@nextui-org/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const EventsCards: React.FC = () => {
  const [events, setEvents] = useState<Events[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await GetEvents(); // Replace with your actual API call
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  // Calculate the number of cards needed per carousel item
  const cardsPerItem = 5;

  // Function to chunk array into arrays of specified size
  const chunkArray = (arr: Events[], size: number) => {
    return arr.reduce((acc, _, i) => {
      if (i % size === 0) {
        acc.push(arr.slice(i, i + size));
      }
      return acc;
    }, [] as Events[][]);
  };

  // Chunk events array into arrays with cardsPerItem events each
  const chunkedEvents = chunkArray(events, cardsPerItem);

  return (
    <div className="mt-8">
      <div className="mb-10 px-10">
        <h1 className="text-[62px] font-extrabold">Events</h1>
      </div>

      <Carousel className="">
        <CarouselContent className="w-full">
          {chunkedEvents.map((chunk, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-wrap justify-center space-x-4">
                {chunk.map((event) => (
                  <Card
                    key={event.id}
                    className="py-4 w-1/6 md:w-1/3 lg:w-1/6 m-2"
                  >
                    <CardBody className="overflow-hidden py-2">
                      <Image
                        alt="Event Image"
                        className="rounded-2xl h-[160px]"
                        disableSkeleton={false}
                        src={event.imagePath || ""}
                        width={270}
                        height={100} // Adjust height as needed
                      />
                    </CardBody>
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">
                        {event.eventdetail?.[index]?.location || ""}
                      </p>
                      <small className="text-default-500">
                        From ${event.cityId}
                      </small>
                      <h4 className="font-bold text-large">
                        {event.eventName}
                      </h4>
                    </CardHeader>

                    <CardFooter className="">
                      <Button
                        className="text-tiny w-full main text-white"
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

export default EventsCards;
