import ClickSpark from "@/components/effects/ClickSpark";
import { FlowingMenuDemo } from "@/components/effects/FlowingMenuDemo";
import About from "@/components/sections/about";
import Awards from "@/components/sections/awards";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Nav from "@/components/sections/nav";
import Footer from "@/components/sections/Footer";

export default function Home() {
  
  return (
    <ClickSpark
      sparkColor="#8DD8FF"
      sparkSize={15}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="flex flex-col items-center justify-start min-h-screen bg-black">
        <Nav />
        <Hero />
        <About />
        <FlowingMenuDemo/>
        <Experience/>
        <Awards/>
         <Footer/>
       
      </div>
    </ClickSpark>
  );
}
