import FadeContent from "@/components/Animations/FadeContent/FadeContent";
import React from "react";

const ProjectLessons = () => {
  return (
    <div className="h-full bg-white p-8 rounded-2xl shadow-2xl z-20">
      <FadeContent
        blur={false}
        duration={300}
        easing="ease-out"
        initialOpacity={0}
      >
        <h4 className="text-5xl font-semibold font-serif mb-3">
          Lessons Learned
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
          Resilience and Adaptability
        </span>
      </FadeContent>
      <FadeContent
        blur={false}
        duration={700}
        easing="ease-out"
        initialOpacity={0}
      >
        <p className="mb-2 text-justify text-zinc-400">
          This project tested my ability to persevere through difficult
          circumstances. I learned that it’s okay not to know everything at
          once, and sometimes even senior engineers don’t have all the answers.{" "}
          <span className="text-black text-md italic font-light">
            The key is to remain persistent, keep asking questions, and approach
            problems with curiosity and determination.
          </span>
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
          Cross-Functional Teamwork
        </span>
      </FadeContent>
      <FadeContent
        blur={false}
        duration={700}
        easing="ease-out"
        initialOpacity={0}
      >
        <p className="text-justify text-zinc-400 mb-2">
          One of the most valuable takeaways from this experience was learning
          how to collaborate effectively within a cross-functional team.{" "}
          <span className="text-black text-md italic font-light">
            By reaching out to colleagues from different departments, I realized
            that collective knowledge is critical to solving complex problems.
          </span>
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
          Relying on Core Principles
        </span>
      </FadeContent>
      <FadeContent
        blur={false}
        duration={300}
        easing="ease-out"
        initialOpacity={0}
      >
        <p className="text-justify text-zinc-400 mb-2">
          Faced with a language barrier and the complexity of both the
          documentation and the intricate details of Syndicated Loan and
          Repayment, I relied on what I knew would not fail—my foundational
          understanding of code. The system was vast, so I tackled it step by
          step, starting with the fundamental components and gradually building
          up to higher-level elements, all while fulfilling my tasks.{" "}
          <span className="text-black text-md italic font-light">
            This approach taught me to break down large problems into bite-sized
            pieces, helping me make steady progress without feeling overwhelmed.
          </span>
        </p>
      </FadeContent>
    </div>
  );
};

export default ProjectLessons;
