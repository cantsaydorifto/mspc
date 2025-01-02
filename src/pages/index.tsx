import StickyCursor from "@/components/StickyCursor";
import { americanTypeMedium } from "@/utils/font";
import { useRef, useState } from "react";

export default function Home() {
  const [gridNumber, setGridNumber] = useState(-1);
  const [heroHover, setHeroHover] = useState(false);
  const [heroMuted, setHeroMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <main className={`${americanTypeMedium.variable}`}>
      <StickyCursor />
      <div className="flex flex-col xl:flex-row xl:h-screen min-h-screen py-3 px-2 xl:px-6 gap-3">
        <div
          onMouseEnter={() => setHeroHover(true)}
          onMouseLeave={() => setHeroHover(false)}
          onClick={() => {
            if (videoRef.current) {
              if (videoRef.current.paused) {
                videoRef.current.play();
              } else {
                videoRef.current.pause();
              }
            }
          }}
          className="bg-[url('/a.jpg')] bg-cover bg-center relative flex items-center md:items-end xl:h-full aspect-square md:h-[600px] xl:flex-[3] rounded-lg rounded-lg cursor-pointer"
        >
          <div
            style={{ opacity: heroHover ? 0.2 : 0.5 }}
            className={`z-[1] absolute transition-opacity duration-1000 inset-0 bg-black rounded-lg`}
          />
          <div
            onClick={(e) => e.stopPropagation()}
            className="p-6 cursor-text text-3xl text-center md:text-left z-[1] font-american-type-medium text-white sm:text-5xl xl:text-[80px]"
          >
            Michael Scott Paper Company
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
        <div className="flex flex-col md:flex-row xl:flex-col rounded-lg flex-[1] gap-4">
          <div
            onMouseLeave={() => setGridNumber(-1)}
            onMouseEnter={() => setGridNumber(0)}
            className="relative flex justify-center items-center md:h-[300px] aspect-square md:aspect-auto md:flex-[1] bg-[url('/a.webp')] bg-cover bg-center rounded-lg"
          >
            <div
              style={{ opacity: gridNumber === 0 ? 0.2 : 0.5 }}
              className={`absolute transition-opacity duration-1000 inset-0 bg-black rounded-lg`}
            ></div>
            <div className="z-[1] font-american-type-medium text-white text-xl text-center">
              Seize every opportunity. Always
            </div>
          </div>
          <div
            onMouseLeave={() => setGridNumber(-1)}
            onMouseEnter={() => setGridNumber(1)}
            className="relative flex justify-center items-center md:h-[300px] aspect-square md:aspect-auto md:flex-[1] bg-[url('/michael.jpg')] bg-cover bg-center rounded-lg"
          >
            <div
              style={{ opacity: gridNumber === 1 ? 0.2 : 0.5 }}
              className={`absolute inset-0 transition-opacity duration-1000 bg-black rounded-lg`}
            ></div>
            <div className="z-[1] font-american-type-medium text-white text-xl text-center">
              lorem ipsum dolor sit amet
            </div>
          </div>
          <div
            onMouseLeave={() => setGridNumber(-1)}
            onMouseEnter={() => setGridNumber(2)}
            className="relative flex justify-center items-center md:h-[300px] aspect-square md:aspect-auto md:flex-[1] rounded-lg"
          >
            <div
              style={{ opacity: gridNumber === 2 ? 0.2 : 0.5 }}
              className={`z-[1] absolute transition-opacity duration-1000 inset-0 bg-black rounded-lg`}
            ></div>
            <div className="z-[1] font-american-type-medium text-white text-xl text-center">
              We love our employees
            </div>
            <video
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              autoPlay
              muted
              loop
            >
              <source src="/michael-warehouse.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </main>
  );
}

function SoundIcon({ mute }: { mute?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="30"
      height="30"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
      {mute && <line x1="0" y1="0" x2="22" y2="22"></line>}
    </svg>
  );
}
