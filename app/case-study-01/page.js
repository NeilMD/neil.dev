import React from "react";

const page = () => {
  return (
    <main className="min-h-svh w-full flex flex-col justify-center items-center bg-n-bg font-extralight">
      <div className="max-w-4xl  flex flex-col gap-6 m-8">
        <span className="text-3xl -mb-6 font-mono font-light ">
          Case Study 01{" "}
        </span>
        <h2 className="text-6xl font-serif font-semibold mb-6 ">
          Overcoming Challenges as a Software Engineer in a Major Japanese Bank
        </h2>
        <div className="flex flex-row text-justify gap-20">
          <div
            id="proj-details"
            className="flex-1/3 text-md flex flex-col  gap-3 text-justify"
          >
            <p>
              <b className="font-semibold">Industry: </b> Financial Sector
            </p>
            <p>
              <b className="font-semibold">Role: </b>Software Engineer,
              Full-Stack Developer, QA Tester, Business Analyst
            </p>
            <p>
              <b className="font-semibold">Duration: </b>2020-2023
            </p>
          </div>
          <div id="proj-overview" className="flex-2/3 ">
            <h4 className="text-5xl font-semibold font-serif mb-3">
              Project Overview
            </h4>
            <br />
            <p className="text-justify text-zinc-800">
              The project involved a web application developed using a
              proprietary tech stack created by a Japanese company. The system’s
              architecture was unique, combining custom frameworks and a mix of
              Java and JavaScript. The goal was to integrate new cloud-based
              solutions into the existing application while maintaining
              stability and security.
            </p>
            <br />
          </div>
        </div>
        <div id="proj-challenges">
          <h4 className="text-5xl font-semibold font-serif mb-3">
            Challenges Faced
          </h4>
          <br />
          <span className="text-xl font-medium block mb-2">
            Language and Communication Barrier
          </span>

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
          <br />

          <span className="text-xl font-medium mb-2 block">
            Technical Stack and Documentation
          </span>

          <p className="text-justify text-zinc-400 mb-2">
            The tech stack was not a widely-known framework, and there were no
            resources or tutorials available online. The codebase was vast and
            complex, with much of the documentation in Japanese. This made
            troubleshooting and understanding the system particularly difficult.{" "}
            <span className="text-black text-md italic font-light">
              The proprietary nature of the code meant that solutions could not
              be easily found through traditional online resources like Stack
              Overflow.
            </span>
          </p>
          <br />

          <span className="text-xl font-medium mb-2 block">
            Dynamic Team Environment
          </span>

          <p className="text-justify text-zinc-400 mb-2">
            The project was dynamic, with team members often coming and going.{" "}
            <span className="text-black text-md italic font-light">
              No single person had complete knowledge of the entire system
            </span>
            , making it difficult to find someone who could provide all the
            answers to my questions. Even senior engineers were sometimes unsure
            of how certain parts of the system worked.
          </p>
        </div>

        <div>
          <h4 className="text-5xl font-semibold font-serif mb-3">
            Approach and Problem-Solving
          </h4>
          <br />
          <div>
            <div className="flex gap-8">
              <span className="flex-2/6 text-xl font-medium block mb-2">
                Adopting a Growth Mindset
              </span>

              <p className=" flex-4/6 mb-2 text-justify text-zinc-800">
                Despite my initial struggles, I made a personal commitment not
                to quit. I knew I had to push through the discomfort and learn
                as much as possible. I adopted a “growth mindset,” reminding
                myself that every challenge was an opportunity to improve my
                skills. Instead of avoiding difficult tasks, I confronted them
                head-on, asking questions and seeking feedback from my
                colleagues.
              </p>
            </div>
            <br />
            <div className="flex gap-8">
              <span className="flex-2/6 text-xl font-medium block mb-2">
                Reverse Engineering the Codebase
              </span>

              <p className="flex-4/6 mb-2 text-justify text-zinc-800">
                Recognizing that I couldn’t rely on external resources, I
                decided to deep dive into the codebase myself. I began by
                tracing the code from the top-level components down to the
                foundational elements. Through this process, I connected the
                Japanese documentation with the technical implementation,
                gradually improving my understanding of both the system
                architecture and the language.
              </p>
            </div>
            <br />
            <div className="flex gap-8">
              <span className="flex-2/6 text-xl font-medium block mb-2">
                Collaborating Across Teams
              </span>

              <p className="flex-4/6 mb-2 text-justify">
                Due to the nature of the project, I learned that no single
                person could solve all problems alone. I started reaching out to
                different team members, understanding that knowledge was spread
                across various functions. Even though senior engineers didn’t
                always have all the answers, they guided me to the best of their
                abilities. This taught me the value of cross-functional
                collaboration, where working with different teams was essential
                to finding solutions.
              </p>
            </div>
            <br />
          </div>
        </div>
        <div id="proj-lessons">
          <h4 className="text-5xl font-semibold font-serif mb-3">
            Lessons Learned
          </h4>
          <br />
          <span className="text-xl font-medium block mb-2">
            Resilience and Adaptability
          </span>

          <p className="mb-2 text-justify text-zinc-400">
            This project tested my ability to persevere through difficult
            circumstances. I learned that it’s okay not to know everything at
            once, and sometimes even senior engineers don’t have all the
            answers.{" "}
            <span className="text-black text-md italic font-light">
              The key is to remain persistent, keep asking questions, and
              approach problems with curiosity and determination.
            </span>{" "}
          </p>
          <br />

          <span className="text-xl font-medium mb-2 block">
            Cross-Functional Teamwork
          </span>

          <p className="text-justify text-zinc-400 mb-2">
            One of the most valuable takeaways from this experience was learning
            how to collaborate effectively within a cross-functional team.{" "}
            <span className="text-black text-md italic font-light">
              By reaching out to colleagues from different departments, I
              realized that collective knowledge is critical to solving complex
              problems.
            </span>
          </p>
          <br />

          <span className="text-xl font-medium mb-2 block">
            Leveraging Code to Overcome Language Barriers
          </span>

          <p className="text-justify text-zinc-400 mb-2">
            Even though I struggled with Japanese documentation, my familiarity
            with Java and JavaScript allowed me to reverse-engineer the
            codebase.{" "}
            <span className="text-black text-md italic font-light">
              This experience taught me that programming languages are universal
              and can serve as a bridge when verbal communication falls short.
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default page;
