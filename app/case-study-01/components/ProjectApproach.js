import FadeContent from "@/components/Animations/FadeContent/FadeContent";
import React from "react";

const ProjectApproach = () => {
  return (
    <div className="h-full bg-white p-8 rounded-2xl z-20 shadow-2xl">
      <FadeContent
        blur={false}
        duration={300}
        easing="ease-out"
        initialOpacity={0}
      >
        <h4 className="text-4xl md:text-5xl font-semibold font-serif mb-3">
          Approach and Problem-Solving
        </h4>
      </FadeContent>
      <br />
      <div>
        <div className="flex flex-col md:flex-row  md:gap-8">
          <FadeContent
            blur={false}
            duration={600}
            easing="ease-out"
            initialOpacity={0}
            className="flex-2/6 text-xl font-medium block mb-2"
          >
            <span>Adopting a Growth Mindset</span>
          </FadeContent>
          <FadeContent
            blur={false}
            duration={700}
            easing="ease-out"
            initialOpacity={0}
            className=" flex-4/6 mb-2 text-justify text-zinc-800"
          >
            <p>
              Despite my initial struggles, I made a personal commitment not to
              quit. I knew I had to push through the discomfort and learn as
              much as possible. I adopted a “growth mindset,” reminding myself
              that every challenge was an opportunity to improve my skills.
              Instead of avoiding difficult tasks, I confronted them head-on,
              asking questions and seeking feedback from my colleagues.
            </p>
          </FadeContent>
        </div>
        <br />
        <div className="flex flex-col md:flex-row md:gap-8">
          <FadeContent
            blur={false}
            duration={600}
            easing="ease-out"
            initialOpacity={0}
            className="flex-2/6 text-xl font-medium block mb-2"
          >
            <span>Reverse Engineering the Codebase</span>
          </FadeContent>
          <FadeContent
            blur={false}
            duration={700}
            easing="ease-out"
            initialOpacity={0}
            className="flex-4/6 mb-2 text-justify text-zinc-800"
          >
            <p>
              Recognizing that I couldn’t rely on external resources, I decided
              to deep dive into the codebase myself. I began by tracing the code
              from the top-level components down to the foundational elements.
              Through this process, I connected the Japanese documentation with
              the technical implementation, gradually improving my understanding
              of both the system architecture and the language.
            </p>
          </FadeContent>
        </div>
        <br />
        <div className="flex flex-col md:flex-row md:gap-8">
          <FadeContent
            blur={false}
            duration={600}
            easing="ease-out"
            initialOpacity={0}
            className="flex-2/6 text-xl font-medium block mb-2"
          >
            <span>Collaborating Across Teams</span>
          </FadeContent>
          <FadeContent
            blur={false}
            duration={700}
            easing="ease-out"
            initialOpacity={0}
            className="flex-4/6 mb-2 text-justify"
          >
            <p>
              Due to the nature of the project, I learned that no single person
              could solve all problems alone. I started reaching out to
              different team members, understanding that knowledge was spread
              across various functions. Even though senior engineers didn’t
              always have all the answers, they guided me to the best of their
              abilities. This taught me the value of cross-functional
              collaboration, where working with different teams was essential to
              finding solutions.
            </p>
          </FadeContent>
        </div>
        <br />
      </div>
    </div>
  );
};

export default ProjectApproach;
