"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";

// import { Input } from "@nextui-org/react";

import { Divider } from "@nextui-org/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { AiFillApple, AiFillMacCommand, AiOutlineSearch } from "react-icons/ai";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Counter from "./counter";
import ShimmerButton from "../magicui/shimmer-button";
import CategoryCard from "./categories";
import { Label } from "../ui/label";
import { SlArrowRight } from "react-icons/sl";

const Serchbox = () => {
  const [date, setDate] = React.useState<Date>();
  const [checkoutdate, setchecheckoutDate] = React.useState<Date>();
  return (
    <div className=" bg-orange-400 flex items-center  shadow-xl border-[#F39505] border-2 rounded-3xl py-3 px-4 align-middle overflow-hidden  mt-5">
      <Tabs defaultValue="Adventures" className="overflow-hidden">
        <TabsList>
          <TabsTrigger value="Adventures">Adventures</TabsTrigger>
          <TabsTrigger value="Experiences">Stays</TabsTrigger>
          <TabsTrigger value="password">Tours</TabsTrigger>
        </TabsList>
        <TabsContent
          value="Experiences"
          className="flex flex-row justify-between gap-4"
        >
          <div className="w-full">
            <div className="grid w-full max-w-sm items-center gap-1.5 focus:ring-0 focus:outline-none ">
              <Label htmlFor="email">Where</Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter Location"
                className="border-0 focus:ring-0 focus:outline-none focus:border-none"
              />
            </div>
          </div>

          <div className="flex justify-end items-end ">
            <Divider orientation="vertical" className="h-[50px]" />
          </div>

          <div className=" w-full flex flex-col align-bottom justify-end">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Check In</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex justify-end items-end ">
            <Divider orientation="vertical" className="h-[50px]" />
          </div>
          <div className="w-full flex flex-col align-bottom justify-end">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !checkoutdate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkoutdate ? (
                    format(checkoutdate, "PPP")
                  ) : (
                    <span>Check Out</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={checkoutdate}
                  onSelect={(date) => setchecheckoutDate(date as Date)} // Ensure date is cast to Date type
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex justify-end items-end ">
            <Divider orientation="vertical" className="h-[50px]" />
          </div>
          <div className="w-full flex flex-col justify-center pt-6">
            <div className=" flex flex-col items-center justify-center">
              <Popover>
                <PopoverTrigger>Add Guests</PopoverTrigger>
                <PopoverContent className="rounded-3xl">
                  <div className="">
                    <Counter label="Adults" />
                    <Counter label="Children" />
                    <Counter label="Infants" />
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="main align-middle items-end flex flex-col justify-center px-4 rounded-full">
            <AiOutlineSearch size={30} color="white" />
          </div>
        </TabsContent>

        {/* this is the box second tab */}
        <TabsContent
          value="password"
          className="flex flex-row justify-between gap-4 w-full"
        >
          <div className="w-full">
            <div className=" items-center gap-1.5">
              <Label htmlFor="email">Where</Label>
              <Input type="email" id="email" placeholder="Enter Location" />
            </div>
          </div>

          <div className="flex justify-end items-end  ">
            <Divider orientation="vertical" className="h-[50px]" />
          </div>

          <div className=" w-full flex flex-col align-bottom justify-end">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Check In</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex justify-end items-end ">
            <Divider orientation="vertical" className="h-[50px]" />
          </div>

          <div className="w-full flex flex-col justify-center pt-6">
            <div className=" flex flex-col items-center justify-center">
              <Popover>
                <PopoverTrigger>Add Guests</PopoverTrigger>
                <PopoverContent className="rounded-3xl">
                  <div className="">
                    <Counter label="Adults" />
                    <Counter label="Children" />
                    <Counter label="Infants" />
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div>
            <ShimmerButton
              background="#F39505"
              className="bg-yellow-200 align-middle items-end flex flex-col justify-center px-4 rounded-full"
            >
              <AiOutlineSearch size={30} color="white" />
            </ShimmerButton>
          </div>
        </TabsContent>

        {/*this is the third */}

        <div className="w-full">
          <TabsContent value="Adventures">
            <div className="pt-3  ">
              <CategoryCard />
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default Serchbox;
