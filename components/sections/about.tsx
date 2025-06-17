'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlurText from "@/components/effects/blurText";




export default function About() {
  return (
    <section id="about" className="relative flex items-center justify-center flex-col w-full max-w-[100vw] overflow-x-hidden h-auto mb-40 bg-primary/60">
      {/* <ScrollVelocity
        texts={["Jayesh Adiwal .", "Football Player"]}
        velocity={100}
        className="custom-scroll-text text-white/20 text-5xl md:text-6xl"
      /> */}
      <div className="relative flex justify-center items-center w-[95%] max-w-[1200px] h-full">
        <div className="my-60">
          <h4 className="text-white/60 text-2xl uppercase">About me</h4>
          <BlurText
            text="I stay focused under pressure tackle hard pass clean and make sure the midfield stays under control"
            className="flex justify-start items-start text-white/60 leading-18 md:leading-20 text-5xl md:text-6xl GeistBold w-full text-left"
          />
        </div>
      </div>
    </section>
  );
}
