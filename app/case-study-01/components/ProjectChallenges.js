import AnimatedContent from "@/components/Animations/AnimatedContent/AnimatedContent";
import FadeContent from "@/components/Animations/FadeContent/FadeContent";
import React from "react";

const ProjectChallenges = () => {
  return (
    <div className="h-full bg-white p-8 rounded-2xl shadow-2xl z-20">
      <FadeContent
        blur={false}
        duration={300}
        easing="ease-out"
        initialOpacity={0}
      >
        <h4 className="text-4xl md:text-5xl font-semibold font-serif mb-3">
          Challenges Faced
        </h4>
      </FadeContent>

      <br />
      <FadeContent
        blur={false}
        duration={600}
        easing="ease-out"
        initialOpacity={0}
      >
        <span className="text-xl font-medium block mb-2">
          Language and Communication Barrier
        </span>
      </FadeContent>
      <FadeContent
        blur={false}
        duration={700}
        easing="ease-out"
        initialOpacity={0}
      >
        <p className="mb-2 text-justify text-zinc-400">
          Despite holding an N3 level of Japanese proficiency, I quickly
          realized that my skills were insufficient for the business-level
          conversations required.{" "}
          <span className="text-black text-md italic font-light">
            Specialized banking terminology, complex technical jargon, and all
            project documentation being in Japanese left me struggling in
            meetings and presentations.
          </span>{" "}
          Communicating with stakeholders and senior engineers became a
          significant hurdle.
        </p>
      </FadeContent>
      <br />
      <FadeContent
        blur={false}
        duration={600}
        easing="ease-out"
        initialOpacity={0}
      >
        <span className="text-xl font-medium mb-2 block">
          Technical Stack and Documentation
        </span>
      </FadeContent>
      <FadeContent
        blur={false}
        duration={700}
        easing="ease-out"
        initialOpacity={0}
      >
        <p className="text-justify text-zinc-400 mb-2">
          <span className="text-black text-md italic font-light">
            The project used a proprietary framework built on top of a Japanese
            software provider’s platform, with no community support or online
            resources available.
          </span>{" "}
          Since the company created its own framework, external solutions or
          discussions were non-existent, making troubleshooting particularly
          difficult. Much of the documentation was in Japanese, which added to
          the complexity. The only available support was the official channel,
          and confidentiality restrictions prohibited public inquiries.
        </p>
      </FadeContent>
      <br />
      <FadeContent
        blur={false}
        duration={600}
        easing="ease-out"
        initialOpacity={0}
      >
        <span className="text-xl font-medium mb-2 block">
          Dynamic Team Environment
        </span>
      </FadeContent>
      <FadeContent
        blur={false}
        duration={700}
        easing="ease-out"
        initialOpacity={0}
      >
        <p className="text-justify text-zinc-400 mb-2">
          The project was dynamic, with team members often coming and going.{" "}
          <span className="text-black text-md italic font-light">
            No single person had complete knowledge of the entire system
          </span>
          , making it difficult to find someone who could provide all the
          answers to my questions. Even senior engineers were sometimes unsure
          of how certain parts of the system worked.
        </p>
      </FadeContent>
    </div>
  );
};

export default ProjectChallenges;
