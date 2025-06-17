import BlurText from "@/components/effects/blurText";
import Aurora from "@/components/effects/Aurora";

export default function Hero() {
  return (
    <section id="home" className="relative flex items-center justify-center flex-col w-full h-screen">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Aurora
          colorStops={["#5409DA", "#4E71FF", "#8DD8FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <div className="relative flex justify-center items-center w-[95%] max-w-[800px] h-full ">
        <BlurText
          text="Just a kid with big football dreams."
          className="flex justify-center items-center text-white leading-18 md:leading-20 text-6xl md:text-7xl GeistBold w-full text-center"
        />
      </div>
    </section>
  );
}
