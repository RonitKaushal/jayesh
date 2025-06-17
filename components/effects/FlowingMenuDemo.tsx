"use client";
import React from "react";
import { FlowingMenu } from "@/components/ui/flowing-menu";
import BlurText from "./blurText";

const demoItems = [
  {
    link: "",
    text: "Quick Decision Making",
    image: "/photos/photo15.jpeg",
  },
  {
    link: "",
    text: "Tactical Awareness",
    image: "/photos/photo8.jpeg",
  },
  {
    link: "",
    text: "Ball Control",
    image: "/photos/photo16.jpeg",
  },
  {
    link: "",
    text: "Accurate Passing",
    image: "/photos/photo10.jpeg",
  },
  {
    link: "",
    text: "Team Leadership",
    image: "/photos/photo18.jpeg",
  },
];

const FlowingMenuDemo = () => {


  return (
    <section id="skills" className="w-full flex flex-col items-center justify-center relative">
      <style jsx global>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marqueeScroll 25s linear infinite;
        }
      `}</style>

      <h4 className="text-white/60 text-lg md:text-2xl uppercase w-full max-w-[1200px]">
        skills
      </h4>
      <BlurText
        text="I stay focused under pressure tackle hard pass clean and make sure the midfield stays under control"
        className="flex justify-start items-start text-white/60 leading-14 md:leading-20 text-5xl md:text-6xl GeistBold w-full max-w-[1200px] text-left"
      />

      <div className="flex flex-col w-full min-h-screen justify-center items-center p-4 transition-colors duration-300">
        <div
          className="relative overflow-hidden"
          style={{ height: "600px", width: "100%", maxWidth: "2000px" }}
        >
          <FlowingMenu items={demoItems} />
        </div>
      </div>
    </section>
  );
};

export { FlowingMenuDemo };
