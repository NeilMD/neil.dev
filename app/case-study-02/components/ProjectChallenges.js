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
          Complex Authentication Flows
        </span>
      </FadeContent>
      <FadeContent
        blur={false}
        duration={700}
        easing="ease-out"
        initialOpacity={0}
      >
        <p className="mb-2 text-justify text-black">
          JWT authentication alone comes with its own set of token expiry,
          refresh logic, and secure cookie handling. Adding OAuth2 (Google via
          Auth0) into the mix significantly increased the complexity—handling
          user sessions coming from different sources, syncing with our
          database, and providing consistent user experiences across providers.
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
          Role-Based Access Management{" "}
        </span>
      </FadeContent>
      <FadeContent
        blur={false}
        duration={700}
        easing="ease-out"
        initialOpacity={0}
      >
        <p className="text-justify text-black mb-2">
          Ensuring that different API endpoints were properly guarded with user
          roles (admin, user, guest, etc.) required a centralized, maintainable
          approach. Spaghetti access-control logic was not an option, I needed
          scalability for future endpoint expansion.
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
          Response Inconsistency and Debugging Pain{" "}
        </span>
      </FadeContent>
      <FadeContent
        blur={false}
        duration={700}
        easing="ease-out"
        initialOpacity={0}
      >
        <p className="text-justify text-black mb-2">
          In early stages, logs were difficult to read, and responses across
          controllers were inconsistent, making debugging and client-side
          integration frustrating. The team had to standardize both logging and
          response structures to streamline development.
        </p>
      </FadeContent>
    </div>
  );
};

export default ProjectChallenges;
