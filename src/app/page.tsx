"use client";
import React from "react";

import { MarqueeDemoVertical } from "@/components/magicui/testimonial";

import Cards from "../components/widgets/tourcards";
import Slider from "@/components/widgets/slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <div className="w-full px-10">
        <Cards />
      </div>
      <MarqueeDemoVertical></MarqueeDemoVertical>
    </div>
  );
};

export default Home;
