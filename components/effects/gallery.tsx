import { Component } from "@/components/ui/circular-gallery";

const demoItems = [
  {
    image: `/photos/photo1.jpeg`,
    text: "",
  },
  {
    image: `/photos/photo2.jpeg`,
    text: "",
  },
  {
    image: `/photos/photo3.jpeg`,
    text: "",
  },
  {
    image: `/photos/photo4.jpeg`,
    text: "",
  },
  {
    image: `/photos/photo5.jpeg`,
    text: "",
  },
  {
    image: `/photos/photo6.jpeg`,
    text: "",
  },
  {
    image: `/photos/photo7.jpeg`,
    text: "",
  },
  {
    image: `/photos/photo8.jpeg`,
    text: "",
  },
  {
    image: `/photos/photo9.jpeg`,
    text: "",
  },
  {
    image: `/photos/photo1.jpeg`,
    text: "",
  },
  {
    image: `/photos/photo11.jpeg`,
    text: "",
  },
  {
    image: `/photos/photo12.jpeg`,
    text: "",
  },
];

const Gallery = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center bg-black">
      <div 
        className="GeistBold w-full max-w-screen-xl mx-auto h-[80vh] overflow-hidden relative bg-black border-none shadow-none"
      >
        <Component 
          items={demoItems} 
          bend={1} 
          textColor="#ffffff" 
          borderRadius={0.05} 
        />
      </div>
    </div>
  );
};

export { Gallery };