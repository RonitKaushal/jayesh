import BlurText from "@/components/effects/blurText";

import { ExperienceSection } from './ExperienceSection';
import { experience } from '@/components/sections/data'; // or define inline


export default function Experience() {
  return (
    <section id="experience" className="relative flex items-center justify-center flex-col w-full max-w-[100vw] overflow-x-hidden h-auto mb-20 z-10 bg-primary/60 overflow-visible">
      <div className="relative flex-col flex justify-center items-center w-[95%] max-w-[1200px] h-full">
        <div className="my-60">
          <h4 className="text-white/60 text-lg md:text-2xl uppercase">experience</h4>
          <BlurText
            text="Played top tournaments across India gaining experience teamwork discipline and winning under high-pressure match situations."
            className="flex justify-start items-start text-white/60 leading-14 md:leading-20 text-5xl md:text-6xl GeistBold w-full text-left"
          />
        </div>
        <div className="flex flex-col items-start justify-start w-full max-w-[1200px]">
          <ExperienceSection experience={experience} />/
        </div>
      </div>
    </section>
  );
}
