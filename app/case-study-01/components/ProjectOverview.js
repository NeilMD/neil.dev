import AnimatedContent from "@/components/Animations/AnimatedContent/AnimatedContent";
import FadeContent from "@/components/Animations/FadeContent/FadeContent";
import React from "react";

const ProjectOverview = () => {
  return (
    <div className="h-full bg-white p-8 rounded-2xl shadow-2xl z-10">
      <FadeContent
        blur={false}
        duration={500}
        easing="ease-out"
        initialOpacity={0}
      >
        <h4 className="text-5xl font-semibold font-serif mb-3">Overview</h4>
      </FadeContent>
      <br />
      <FadeContent
        blur={false}
        duration={600}
        easing="ease-out"
        initialOpacity={0}
      >
        <p className="text-justify text-zinc-800">
          As part of my role, I contributed to multiple projects, with the most
          significant being the Cloud Integration initiative for a web
          application used by a Japanese bank to manage syndicated loans—loans
          provided by a group of lenders to a single borrower. The system was
          built on a proprietary tech stack from a Japanese enterprise software
          provider, featuring a unique architecture that combined custom
          frameworks using a mix of Java and JavaScript.
        </p>
      </FadeContent>
      <br />
    </div>
  );
};

export default ProjectOverview;
