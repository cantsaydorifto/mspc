import { useState } from "react";

export default function Card({
  video,
  photoSrc,
  videoSrc,
  cardText,
}: {
  video?: boolean;
  videoSrc?: string;
  photoSrc?: string;
  cardText?: string;
}) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      onMouseLeave={() => setIsHovering(false)}
      onMouseEnter={() => setIsHovering(true)}
      className={`relative flex justify-center items-center md:h-[300px] aspect-square md:aspect-auto md:flex-[1] rounded-lg ${
        video ? "" : `bg-[url('${photoSrc ?? ""}')] bg-cover bg-center`
      }`}
    >
      <div
        style={{ opacity: isHovering ? 0.2 : 0.5 }}
        className={`z-[1] absolute transition-opacity duration-1000 inset-0 bg-black rounded-lg`}
      />
      {cardText && (
        <div className="z-[1] font-american-type-medium text-white text-xl text-center">
          {cardText}
        </div>
      )}
      {video && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
          autoPlay
          muted
          loop
        >
          <source src={videoSrc ?? ""} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
