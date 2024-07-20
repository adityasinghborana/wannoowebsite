"use client";

import React, { useEffect, useState, useRef } from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { GetAllTourTypes } from "@/lib/service";
import { Categories } from "@/lib/interfaces/categories";
import { AiFillApple } from "react-icons/ai";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const CategoryCard: React.FC = () => {
  const [categories, setCategories] = useState<Categories[]>([]);
  const cardsPerItem = 5;

  useEffect(() => {
    const fetchTourTypes = async () => {
      try {
        const data = await GetAllTourTypes();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching tour types:", error);
      }
    };
    fetchTourTypes();
  }, []);

  const chunkArray = (arr: Categories[], size: number) => {
    return arr.reduce((acc, _, i) => {
      if (i % size === 0) {
        acc.push(arr.slice(i, i + size));
      }
      return acc;
    }, [] as Categories[][]);
  };

  // Chunk tours array into arrays with cardsPerItem cards each
  const chunkedTours = chunkArray(categories, cardsPerItem);

  return (
    <div>
      <Carousel>
        <CarouselContent>
          {chunkedTours.map((item) =>
            item.map((cat) => {
              return (
                <Card
                  key={cat.cityTourType}
                  shadow="sm"
                  isPressable
                  onPress={() => console.log("Item pressed")}
                  className=" flex-shrink-0 sm:w-[1/2] mx-2 lg:w-1/8 xl:w-[1/8] 2xl:w-[1/2]  "
                >
                  <CardBody className=" py-2 items-center ">
                    {cat.cityTourType}
                  </CardBody>
                </Card>
              );
            })
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCard;
