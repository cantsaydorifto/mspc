export default function Card({
  video,
  photoSrc,
  videoSrc,
  cardText,
  className,
}: {
  video?: boolean;
  videoSrc?: string;
  photoSrc?: string;
  cardText?: string;
  className?: string;
}) {
  return (
    <div
      style={{ backgroundImage: `url(${photoSrc ?? ""})` }}
      className={`${
        className ?? ""
      } relative group flex justify-center items-center md:h-[300px] aspect-square md:aspect-auto md:flex-[1] rounded-lg ${
        video ? "" : `bg-[url('${photoSrc ?? ""}')] bg-cover bg-center`
      }`}
    >
      <div
        className={`z-[1] group-hover:opacity-20 absolute transition-opacity opacity-50 duration-1000 inset-0 bg-black rounded-lg`}
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
