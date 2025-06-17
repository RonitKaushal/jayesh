import BlurText from "@/components/effects/blurText";

import { ExperienceSection } from './ExperienceSection';
import { AwardData } from '@/components/sections/AwardsData'; // or define inline


export default function Awards() {
  return (
    <section id="awards" className="relative flex items-center justify-center flex-col w-full max-w-[100vw] overflow-x-hidden h-auto mb-20">
      <div className="relative flex-col flex justify-center items-center w-[95%] max-w-[1200px] h-full">
        <div className="my-32 md:my-60">
          <h4 className="text-white/60 text-lg md:text-2xl uppercase">Awards</h4>
          <BlurText
            text="Recognized nationally for top performance with multiple best player, top scorer, and man of match awards."
            className="flex justify-start items-start text-white/60 leading-14 md:leading-20 text-5xl md:text-6xl GeistBold w-full text-left"
          />
        </div>
        <div className="flex flex-col items-start justify-start w-full max-w-[1200px]">
          <ExperienceSection experience={AwardData} />/
        </div>
      </div>
    </section>
  );
}
