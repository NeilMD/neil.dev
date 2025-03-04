"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const BeatCurrent = ({ headerValue }) => {
  const handleClick = () => {
    window.open(
      "https://neilmd.github.io/CPRG-309_Final/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const cardVariants = {
    base: "relative overflow-hidden h-[240px] bg-teal-100 lg:col-span-2 md:col-span-1 col-span-2 order-5 md:order-7 lg:order-7 rounded-4xl px-8 py-12",
    active:
      "active_card cursor-pointer group drop-shadow-xs transition duration-500 ease-in-out hover:drop-shadow-sm",
    inactive: "inactive_card",
  };

  return (
    <div
      id="bc_card"
      className={`${cardVariants.base} 
        ${headerValue === 2 ? cardVariants.inactive : cardVariants.active}`}
      onClick={handleClick}
    >
      <div className="opacity-0 group-hover:opacity-70 absolute inset-0  bg-black transition duration-400 ease-in-out"></div>
      <div
        id="button"
        className="absolute m-4 bottom-0 left-0 h-[40px] w-[40px] bg-white group-hover:bg-transparent group-hover:text-zinc-300 group-hover:border rounded-full flex justify-center items-center overflow-hidden group-hover:w-[150px] transition-all duration-400 ease-in-out"
      >
        <span className="text-nowrap group-hover:inline group-hover:translate-x-0 transition-all duration-400 ease-in-out delay-75 transform -translate-x-full p-2">
          Go to Site
        </span>
        <span className="absolute group-hover:hidden">
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </div>
      <div className="absolute inset-0 h-full flex flex-col px-8 py-8 gap-y-3">
        <h2 className="font-serif text-3xl font-semibold z-100 group-hover:text-gray-300 transition duration-400 ease-in-out">
          Beat Current
        </h2>
        <span className="font-extralight text-gray-200 z-100 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-in-out">
          Developed a dynamic, user-centered music website with only vanilla CSS
          animations and JavaScript.
        </span>
      </div>
      <img
        className="-z-10 absolute bottom-[40px] lg:bottom-0 left-0 object-cover scale-175 lg:scale-125 group-hover:scale-163 lg:group-hover:scale-100 transition duration-500 ease-in-out"
        height="240"
        width="580"
        src="/img/beat-current.webp"
      />
    </div>
  );
};

export default BeatCurrent;
