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
        <h4 className="text-4xl md:text-5xl font-semibold font-serif mb-3">
          Overview
        </h4>
      </FadeContent>
      <br />
      <FadeContent
        blur={false}
        duration={600}
        easing="ease-out"
        initialOpacity={0}
      >
        <p className="text-justify text-zinc-800">
          In this project, I developed a robust authentication system for a web
          application using the MERN stack (MongoDB, Express.js, React.js,
          Node.js), implementing both JWT (Access and Refresh Tokens) and Google
          OAuth through Auth0. The main focus was on creating a scalable and
          secure backend architecture, with clean, standardized practices across
          logging, error handling, response structure, and role-based access.
        </p>
        <br />
        <p className="text-justify text-zinc-800">
          This project showcases how modern web applications can seamlessly
          integrate traditional JWT-based auth with third-party providers like
          Google using Auth0—while maintaining clarity in architecture and code
          quality.
        </p>
      </FadeContent>
      <br />
    </div>
  );
};

export default ProjectOverview;
