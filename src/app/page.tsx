import React from "react";
import { MarqueeDemoVertical } from "@/components/magicui/testimonial";
import Cards from "../components/widgets/tourcards";
import EventsCards from "@/components/widgets/eventcards";
import Searchbox from "@/components/widgets/searchbox";
import HeroSection from "../components/widgets/herosection";
import { BentoDemo } from "@/components/widgets/bentogridhome";
import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home Page Title</title>
        <meta
          name="description"
          content="This is the description for the home page."
        />
        <meta property="og:title" content="Home Page Title" />
        <meta
          property="og:description"
          content="This is the description for the home page."
        />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/home.jpg"
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className="">
        <HeroSection />
      </div>
      <div className="w-full px-28 mt-0">
        <Searchbox />
      </div>
      <div className="w-full px-10 ">
        <Cards />
      </div>
      <div className="w-full px-10">
        <EventsCards />
      </div>
      <div className="w-full px-10">
        <EventsCards />
      </div>
      <div className="w-full px-10 mt-20">
        <div>
          {" "}
          <BentoDemo />
        </div>
      </div>

      <div className="w-full px-10 mt-20">
        <Cards />
      </div>
      <div className="w-full px-10">
        <EventsCards />
      </div>

      <div className="w-full px-10 mt-20">
        <Cards />
      </div>

      <MarqueeDemoVertical></MarqueeDemoVertical>
    </div>
  );
};

export default Home;
