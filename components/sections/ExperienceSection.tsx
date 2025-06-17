"use client";

import { useState } from "react";
import { ExperienceItem } from "./types";

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experience,
}) => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  const visibleExperiences = experience.slice(0, visibleCount);
  const hasMore = visibleCount < experience.length;

  return (
    <div className="flex flex-col items-start justify-start w-full max-w-[1200px]">
      <div className="flex flex-col w-full divide-y divide-white/20">
        {visibleExperiences.map((item, index) => (
          <div
            key={index}
            className="flex items-start justify-start w-full gap-4 md:gap-8 py-14"
          >
            <div className="flex flex-col items-start gap-2 min-w-[100px]  md:min-w-[400px]">
              <span className="text-white text-sm md:text-2xl uppercase">{item.year}</span>
              <span className="text-white/60 text-sm md:text-4xl GeistBold">
                {item.position}
              </span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="text-white text-sm md:text-2xl uppercase">
                {item.event}
              </span>
              <span className="text-white/60 text-2xl md:text-4xl GeistBold leading-9 md:leading-12">
                {item.para}
              </span>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="relative flex items-center justify-center w-full mt-8 border-t border-white/20">
          <button
            onClick={handleShowMore}
            className=" absolute top-0 mt-[-25px] px-6 py-2 text-lg font-semibold text-white bg-black border border-white/20 rounded-lg cursor-pointer"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};
