"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const BeatCurrent = ({ headerValue }) => {
  const handleClick = () => {
    console.log("click");
    window.open(
      "https://neilmd.github.io/CPRG-309_Final/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const cardVariants = {
    base: "relative overflow-hidden h-[240px] bg-teal-100 lg:col-span-2 md:col-span-1 col-span-2 order-5 md:order-7 lg:order-7 rounded-4xl px-8 py-12",
    active:
      "cursor-pointer group drop-shadow-xs transition duration-500 ease-in-out hover:drop-shadow-sm active_card",
    inactive: "inactive_card",
  };

  return (
    <div
      id="bc_card"
      className={`${cardVariants.base} 
        ${headerValue === 2 ? cardVariants.inactive : cardVariants.active}`}
      onClick={handleClick}
    >
      <div
        id="button"
        className="absolute m-4 bottom-0 left-0 h-[40px] w-[40px] bg-white rounded-full flex justify-center items-center overflow-hidden group-hover:w-[150px] transition-all duration-400 ease-in-out"
      >
        <span className="text-nowrap group-hover:inline group-hover:translate-x-0 transition-all duration-300 ease-in-out delay-75 transform -translate-x-full p-2">
          Go to Site
        </span>
        <span className="absolute group-hover:hidden">
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </div>
      <div className="absolute inset-0 h-full flex flex-col px-8 py-8">
        <h2 className="font-serif text-3xl font-semibold">Beat Current</h2>
      </div>
      <img
        className="-z-10 absolute bottom-[40px] lg:bottom-0 left-0 object-cover scale-175 lg:scale-125 group-hover:scale-163 lg:group-hover:scale-100 transition duration-500 ease-in-out"
        height="240"
        width="580"
        src="/neil.dev/img/beat-current.webp"
      />
    </div>
  );
};

export default BeatCurrent;
