import Card from "./Card";
import HeroCard from "./HeroCard";

export default function HeroSection() {
  return (
    <div className="flex flex-col xl:flex-row xl:h-screen min-h-screen py-3 px-2 xl:px-6 gap-3">
      <HeroCard heroTxt="Michael Scott Paper Company" />
      <div className="flex flex-col md:flex-row xl:flex-col rounded-lg flex-[1] gap-4">
        <Card photoSrc="/a.webp" cardText="Seize every opportunity. Always" />
        <Card
          video
          videoSrc="/michael-warehouse.mp4"
          cardText="We love our employees"
        />
        <Card
          photoSrc="/michael.jpg"
          cardText="Confidence... or confusion? Both"
        />
      </div>
    </div>
  );
}
