"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

const TechCard = ({ headerValue }) => {
  const cardVariants = {
    base: "order-4 md:order-5 lg:order-5 relative bg-stone-800 min-h-[240px] text-white lg:col-span-1 col-span-2 row-span-2 rounded-4xl px-8 py-8",
    active:
      "active_card drop-shadow-xs transition duration-500 ease-in-out hover:drop-shadow-lg",
    inactive: "inactive_card",
  };
  const stackVariants = {
    open: "max-h-[150px]",
    closed: "max-h-0",
  };
  const [open, setOpen] = useState(0);

  const toggleOpen = (val) => {
    setOpen((prevState) => {
      // If the previous state is not the same as the current value, set it to the new value
      if (prevState !== val) return val;

      // If the previous state is 1, 2, or 3, reset to 0
      return prevState > 0 ? 0 : val;
    });
  };

  return (
    <div
      id="tech_card"
      className={`${cardVariants.base}
        ${headerValue === 1 ? cardVariants.inactive : cardVariants.active}`}
    >
      <div className="hidden lg:flex flex-col">
        <h2 className="absolute bottom-0 font-serif font-medium text-md mb-5 text-clip">
          <FontAwesomeIcon
            height={16}
            width={16}
            className="inline mr-1"
            icon={faLayerGroup}
          />
          Tech Stack
        </h2>
        <div
          className="group cursor-pointer flex-[40%] flex flex-col text-left gap-2 mb-4"
          onMouseEnter={() => {
            toggleOpen(1);
          }}
        >
          <b className="cursor-pointer uppercase pr-2 py-1 w-full border-b hidden lg:block border-b-white text-3xl font-extralight text-left">
            Backend
          </b>
          <div
            className={`text-sm gap-1 flex flex-wrap lg:overflow-hidden  transition-all duration-500 ease-in-out ${
              open === 1 ? stackVariants.open : stackVariants.closed
            }`}
          >
            <span className="p-1 w-fit rounded-md">ExpressJS</span>
            <span className="p-1 w-fit rounded-md">NextJS</span>
            <span className="p-1 w-fit rounded-md">Laravel</span>
            <span className="p-1 w-fit rounded-md">Javascript</span>
            <span className="p-1 w-fit rounded-md">Java</span>
            <span className="p-1 w-fit rounded-md">Python</span>
            <span className="p-1 w-fit rounded-md">PHP</span>
            <span className="p-1 w-fit rounded-md">NodeJS</span>
            <span className="p-1 w-fit rounded-md">PostgreSQL</span>
            <span className="p-1 w-fit rounded-md">MySQL</span>
            <span className="p-1 w-fit rounded-md">Bash Scripting</span>
          </div>
        </div>
        <div
          className="group cursor-pointer flex-[30%] flex flex-col text-left gap-2 mb-4"
          onMouseEnter={() => {
            toggleOpen(2);
          }}
        >
          <b className="cursor-pointer uppercase pr-2 py-1 w-full border-b hidden lg:block border-b-white text-3xl font-extralight text-left">
            Frontend
          </b>
          <div
            className={`text-sm gap-1 flex flex-wrap lg:overflow-hidden  transition-all duration-500 ease-in-out ${
              open === 2 ? stackVariants.open : stackVariants.closed
            }`}
          >
            <span className="p-1 w-fit rounded-md">React</span>
            <span className="p-1 w-fit rounded-md">HTML5</span>
            <span className="p-1 w-fit rounded-md">CSS3</span>
            <span className="p-1 w-fit rounded-md">JQuery</span>
            <span className="p-1 w-fit rounded-md">TailwindCSS</span>
          </div>
        </div>

        <div
          className="group cursor-pointer flex-[30%] flex flex-col text-left gap-2 mb-4"
          onMouseEnter={() => {
            toggleOpen(3);
          }}
        >
          <b className="cursor-pointer uppercase pr-2 py-1 w-full border-b hidden lg:block border-b-white text-3xl font-extralight text-left">
            Testing
          </b>
          <div
            className={`text-sm gap-1 flex flex-wrap lg:overflow-hidden  transition-all duration-500 ease-in-out ${
              open === 3 ? stackVariants.open : stackVariants.closed
            }`}
          >
            <span className="p-1 w-fit rounded-md">JsUnit</span>
            <span className="p-1 w-fitrounded-md">Junit</span>
            <span className="p-1 w-fit rounded-md">JMeter</span>
            <span className="p-1 w-fit rounded-md">Selenium</span>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex flex-wrap gap-x-1 gap-y-2 md:gap-x-3 md:gap-y-3 mb-5">
        <h2 className="absolute bottom-0 font-serif font-medium text-md mb-5 text-clip">
          <FontAwesomeIcon
            height={16}
            width={16}
            className="inline mr-1"
            icon={faLayerGroup}
          />
          Tech Stack
        </h2>
        <span className="p-1 w-fit rounded-md">ExpressJS</span>
        <span className="p-1 w-fit rounded-md">NextJS</span>
        <span className="p-1 w-fit rounded-md">Laravel</span>
        <span className="p-1 w-fit rounded-md">Javascript</span>
        <span className="p-1 w-fit rounded-md">Java</span>
        <span className="p-1 w-fit rounded-md">Python</span>
        <span className="p-1 w-fit rounded-md">PHP</span>
        <span className="p-1 w-fit rounded-md">NodeJS</span>
        <span className="p-1 w-fit rounded-md">PostgreSQL</span>
        <span className="p-1 w-fit rounded-md">MySQL</span>
        <span className="p-1 w-fit rounded-md">Bash Scripting</span>

        <span className="p-1 w-fit rounded-md">React</span>
        <span className="p-1 w-fit rounded-md">HTML5</span>
        <span className="p-1 w-fit rounded-md">CSS3</span>
        <span className="p-1 w-fit rounded-md">JQuery</span>
        <span className="p-1 w-fit rounded-md">Tailwind</span>

        <span className="p-1 w-fit rounded-md">JsUnit</span>
        <span className="p-1 w-fit rounded-md">Junit</span>
        <span className="p-1 w-fit rounded-md">JMeter</span>
        <span className="p-1 w-fit rounded-md">Selenium</span>
      </div>
    </div>
  );
};

export default TechCard;
