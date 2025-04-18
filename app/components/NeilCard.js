"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const NeilCard = ({ headerValue }) => {
  const downloadResume = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "/docs/resume.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.download = "NeilCapistrano_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const cardVariants = {
    base: "cursor-pointer order-2 md:order-3 lg:order-4 group relative bg-white lg:col-span-3 col-span-2 row-span-2 rounded-4xl",
    active:
      "active_card drop-shadow-xs transition duration-500 ease-in-out hover:drop-shadow-sm",
    inactive: "inactive_card",
  };
  return (
    <div
      id="neil_card"
      className={`${cardVariants.base}
        ${headerValue === 1 ? cardVariants.inactive : cardVariants.active}`}
      onClick={downloadResume}
    >
      <div
        id="button"
        className="cursor-pointer absolute m-4 top-0 right-0 h-[40px] w-[40px] bg-white rounded-full flex justify-center items-center overflow-hidden group-hover:w-[150px] transition-all duration-400 ease-in-out"
      >
        <span className="text-nowrap group-hover:inline group-hover:translate-x-0 transition-all duration-300 ease-in-out delay-75 transform -translate-x-full p-2">
          Download Resume
        </span>
        <span className="absolute group-hover:hidden">
          <FontAwesomeIcon icon={faDownload} />
        </span>
      </div>

      <div className="px-8 py-12">
        <div className="flex flex-col gap-8 h-full">
          <img className="w-[100px]" src="/img/neil_programming.webp" />
          <div className="text-2xl font-extralight">
            I'm
            <span className="font-serif text-3xl font-semibold"> Neil</span>, a
            full-stack developer currently living in <span> </span>
            <span className="text-gray-400 line-through">Philippines</span>,
            <span> </span>
            <span className="text-gray-400 line-through">Japan</span>, Canada. I
            built and develop web solutions for a<span> </span>
            <span className="italic underline">major bank</span> and a
            <span> </span>
            <span className="italic underline">love hotel chain</span> in Japan,
            and a Canadian<span> </span>
            <span className="italic underline">startup</span>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeilCard;
