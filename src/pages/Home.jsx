import React from "react";
import { Button, buttonVariants } from "@/components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import Hero from "@/components/Hero.jsx";
import About from "@/components/About.jsx";
import Testimoni from "@/components/Testimoni.jsx";
import FormReview from "@/components/FormReview.jsx";
import Services from "@/components/Services.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import Reservasi from "./Reservasi";

import Experience from "@/components/Experience";
import Client from "@/components/Client";

const Home = () => {

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Client/>
   
      {/* <Experience/> */}
      {/* <Reservasi/> */}
     
    </>
  );
};

export default Home;
