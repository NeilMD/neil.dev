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
        <h4 className="text-4xl font-semibold font-serif mb-3">Details</h4>
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
            <b className="font-semibold">Industry: </b> Financial Sector
          </p>
          <p>
            <b className="font-semibold">Role: </b>Software Engineer, Full-Stack
            Developer, QA Tester, Business Analyst
          </p>
          <p>
            <b className="font-semibold">Duration: </b>~3 years
          </p>
        </div>
      </FadeContent>
    </div>
  );
};

export default ProjectDetails;
