"use client";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const PortfolioPortalCard = ({ headerValue }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/case-study-02");
  };

  const cardVariants = {
    base: "cursor-pointer h-[240px] lg:h-full group relative overflow-hidden bg-indigo-100 order-6 md:order-7 lg:order-3 col-span-2 md:col-span-1 lg:col-span-1 row-span-3 rounded-4xl px-8 py-12",
    active:
      "active_card drop-shadow-xs transition duration-500 ease-in-out hover:drop-shadow-sm",
    inactive: "inactive_card",
  };
  return (
    <div
      id="ns_card"
      className={` ${cardVariants.base}
        ${headerValue === 2 ? cardVariants.inactive : cardVariants.active}`}
      onClick={handleClick}
    >
      <img
        className="absolute bottom-[-200px] right-[-10px] lg:inset-0 object-cover scale-90 lg:scale-125 group-hover:scale-100 transition duration-500 ease-in-out"
        height="580"
        width="240"
        src="/img/portfolio_portal.webp"
      />
      <div className="opacity-0 group-hover:opacity-70 absolute inset-0  bg-black transition duration-400 ease-in-out"></div>
      <div
        id="button"
        className="absolute m-4 bottom-0 left-0 h-[40px] w-[40px] bg-white rounded-full flex justify-center items-center overflow-hidden group-hover:w-[150px] transition duration-400 ease-in-out group-hover:bg-transparent group-hover:text-zinc-300 group-hover:border"
      >
        <span className="text-nowrap group-hover:inline group-hover:translate-x-0 group-hover:text-zinc-300 transition duration-400 ease-in-out transform -translate-x-full p-2">
          Read Case Study
        </span>
        <span className="absolute group-hover:hidden">
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </div>

      <div className="absolute inset-0 h-full flex flex-col gap-y-3 px-8 py-8 lg:py-12 z-100">
        <h2 className="font-serif text-3xl font-semibold z-100 group-hover:text-gray-300 transition duration-400 ease-in-out">
          JWT Authentication & Google 0Auth
        </h2>
        <span className="font-extralight text-gray-200 z-100 opacity-0 group-hover:opacity-100 transition duration-400 ease-in-out">
          A scalable MERN-based authentication system integrating React, JWT,
          and Google OAuth via Auth0—built with a focus on security, clean
          architecture, and seamless third-party login.
        </span>
      </div>
    </div>
  );
};

export default PortfolioPortalCard;
