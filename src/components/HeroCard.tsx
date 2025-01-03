import { useRef, useState } from "react";
import { SoundIcon } from "./SoundIcon";

export default function HeroCard({ heroTxt }: { heroTxt?: string }) {
  const [heroMuted, setHeroMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <div
      onClick={() => {
        if (videoRef.current) {
          if (videoRef.current.paused) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        }
      }}
      className="group bg-[url('/a.jpg')] bg-cover bg-center relative flex items-center md:items-end xl:h-full aspect-square md:h-[600px] xl:flex-[3] rounded-lg rounded-lg cursor-pointer"
    >
      <div
        className={`z-[1] absolute transition-opacity opacity-50 group-hover:opacity-20 duration-1000 inset-0 bg-black rounded-lg`}
      />
      <div
        onClick={(e) => e.stopPropagation()}
        className="p-6 cursor-text text-3xl text-center md:text-left z-[1] font-american-type-medium text-white sm:text-5xl xl:text-[80px]"
      >
        {heroTxt}
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setHeroMuted((prev) => !prev);
        }}
        className="z-[1] absolute top-4 right-4 text-white"
      >
        <SoundIcon mute={heroMuted} />
      </button>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
        autoPlay
        muted={heroMuted}
        ref={videoRef}
        loop
      >
        <source src="/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
