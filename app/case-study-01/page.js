"use client";
import React from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import BlurText from "@/components/TextAnimations/BlurText/BlurText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ProjectDetails from "./components/ProjectDetails";
import ProjectOverview from "./components/ProjectOverview";
import ProjectChallenges from "./components/ProjectChallenges";
import ProjectApproach from "./components/ProjectApproach";
import ProjectLessons from "./components/ProjectLessons";
import FadeContent from "@/components/Animations/FadeContent/FadeContent";
import AnimatedContent from "@/components/Animations/AnimatedContent/AnimatedContent";
import Header from "../components/Header";

const page = () => {
  return (
    <div className="relative">
      <Header headerValue={0} setHeaderValue={() => {}} />
      <main className=" min-h-svh w-full flex flex-col justify-center items-center bg-n-bg font-extralight mt-24 px-8">
        <div className="relative  lg:w-[900px]  flex flex-col gap-8">
          <span>
            <FadeContent
              blur={true}
              duration={100}
              easing="ease-out"
              initialOpacity={0}
              className="text-3xl -mb-6 font-mono font-light "
            >
              Case Study 01{" "}
            </FadeContent>
          </span>
          <FadeContent
            blur={true}
            duration={100}
            easing="ease-out"
            initialOpacity={0}
          >
            <h2 className="text-6xl font-serif font-semibold mb-6  ">
              Overcoming Challenges as a Software Engineer in a Major Japanese
              Bank
            </h2>
          </FadeContent>
          <div className="flex flex-col lg:flex-row text-justify gap-8">
            <div className=" lg:flex-1/3 text-md flex-col  gap-3 text-justify">
              {" "}
              <div className="h-full bg-white p-8 rounded-2xl shadow-2xl z-10">
                <ProjectDetails />
              </div>
            </div>

            <div id="proj-overview" className=" lg:flex-2/3 ">
              <ProjectOverview />
            </div>
          </div>
          <div id="proj-gallery" className="grid grid-cols-3 w-full gap-8">
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.0}
              animateOpacity
              className="col-span-3  px-4 py-8 rounded-2xl bg-stone-50 shadow-2xl text-center z-10"
              threshold={0.2}
            >
              <div className="">
                <img
                  src="/neil.dev/img/01_screenlist.webp"
                  className="w-full mb-3"
                />
                <span className="text-sm italic text-center mb-3">
                  This is a sample documentation of a screen list and its
                  details.
                </span>
                <span className="text-xs block text-center">
                  Picture taken from{" "}
                  <a
                    className="text-blue-400"
                    href="https://www.ipa.go.jp/archive/files/000004521.pdf"
                    target="_blank"
                  >
                    IPA 「機能要件の合意形成ガイド」
                  </a>
                </span>
              </div>
            </AnimatedContent>

            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.0}
              animateOpacity
              className="col-start-1 col-span-3  md:col-span-1  px-4 py-8 rounded-2xl bg-stone-50 shadow-2xl text-center z-10"
              threshold={0.2}
            >
              <div>
                <img
                  src="/neil.dev/img/01_waterfall.webp"
                  className="w-full mb-3 max-h-[250px] object-contain lg:max-h-none"
                />
                <span className="text-sm italic text-center mb-3">
                  Waterfall Model
                </span>
                <span className="text-xs block text-center">
                  Picture taken from{" "}
                  <a
                    className="text-blue-400"
                    href="https://www.ipa.go.jp/archive/files/000004521.pdf"
                    target="_blank"
                  >
                    IPA 「機能要件の合意形成ガイド」
                  </a>
                </span>
              </div>
            </AnimatedContent>

            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.0}
              animateOpacity
              className="col-start-1 md:col-start-2 col-span-3  md:col-span-2  px-4 py-8 rounded-2xl bg-stone-50 shadow-2xl text-center z-10"
              threshold={0.2}
            >
              <div>
                <img
                  src="/neil.dev/img/01_reportcontents.webp"
                  className="w-full mb-3"
                />
                <span className="text-sm italic text-center mb-3">
                  This is a sample documentation of a report and its contents.
                </span>
                <span className="text-xs block text-center">
                  Picture taken from{" "}
                  <a
                    className="text-blue-400"
                    href="https://www.ipa.go.jp/archive/files/000004521.pdf"
                    target="_blank"
                  >
                    IPA 「機能要件の合意形成ガイド」
                  </a>
                </span>
              </div>
            </AnimatedContent>
          </div>

          <div id="proj-challenges" className="z-20">
            <ProjectChallenges />
          </div>

          <div id="proj-approach" className="z-20">
            <ProjectApproach />
          </div>
          <div id="proj-lessons" className="mb-28 z-20">
            <ProjectLessons />
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
