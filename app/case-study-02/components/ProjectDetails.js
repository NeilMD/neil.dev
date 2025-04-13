import FadeContent from "@/components/Animations/FadeContent/FadeContent";
import React from "react";

const ProjectDetails = () => {
  return (
    <div id="proj-details" className="w-full h-full">
      <FadeContent
        blur={false}
        duration={300}
        easing="ease-out"
        initialOpacity={0}
      >
        <h4 className="text-4xl md:text-5xl font-semibold font-serif mb-3">
          Details
        </h4>
      </FadeContent>
      <br />
      <FadeContent
        blur={false}
        duration={700}
        easing="ease-out"
        initialOpacity={0}
      >
        <div className="flex flex-col ">
          <p>
            <b className="font-semibold">Role: </b>Full-Stack Developer, Backend
            Architect
          </p>
          <p>
            <b className="font-semibold">Github Link: </b>
            <a
              className="text-blue-400"
              href="https://github.com/NeilMD/portfolio-portal/tree/phase-2-jwt-auth"
              target="_blank"
            >
              Phase-2 : JWT Auth Branch
            </a>
          </p>
        </div>
      </FadeContent>
    </div>
  );
};

export default ProjectDetails;
