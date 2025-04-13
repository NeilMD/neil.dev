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
        <h4 className="text-4xl md:text-5xl font-semibold font-serif mb-3">
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
          Balancing Security with User Experience
        </span>
      </FadeContent>
      <FadeContent
        blur={false}
        duration={700}
        easing="ease-out"
        initialOpacity={0}
      >
        <p className="mb-2 text-justify text-zinc-400">
          One challenge was deciding where to store tokens to maximize security
          without frustrating the user.{" "}
          <span className="text-black text-md italic font-light">
            We opted for storing JWT tokens in the Authorization header and
            refresh tokens in HttpOnly cookies
          </span>
          , providing secure storage while maintaining smooth session continuity
          for users. Handling token expiry required careful consideration to
          avoid excessive logouts while minimizing the risk of token misuse.{" "}
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
          Granularity of Access Control
        </span>
      </FadeContent>
      <FadeContent
        blur={false}
        duration={700}
        easing="ease-out"
        initialOpacity={0}
      >
        <p className="text-justify text-zinc-400 mb-2">
          Another challenge was determining the right level of granularity for
          role-based access. Since the application has relatively simple
          functionality,{" "}
          <span className="text-black text-md italic font-light">
            we opted for route-level protection. This simplified implementation,
            but we acknowledged the trade-off of not having more granular
            control over specific actions (e.g., read, write, delete) within a
            route.{" "}
          </span>
          For now, this structure meets the project’s needs, but future
          iterations might require more detailed access control mechanisms.
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
          CSRF and XSS Protection
        </span>
      </FadeContent>
      <FadeContent
        blur={false}
        duration={300}
        easing="ease-out"
        initialOpacity={0}
      >
        <p className="text-justify text-zinc-400 mb-2">
          Implementing secure token management to prevent CSRF and XSS attacks
          was critical.{" "}
          <span className="text-black text-md italic font-light">
            Storing refresh tokens in HttpOnly cookies provided additional
            security but added complexity to the token refresh process.{" "}
          </span>
          We had to ensure that the token refresh process was smooth and
          seamless for the user to avoid session interruptions.{" "}
        </p>
        <p className="text-zinc-400 mb-2">
          Ultimately, these challenges led us to make design choices that
          emphasized security while maintaining a positive user experience. In
          future projects, we may consider more granular role-based permissions
          and explore further enhancements to session management.
        </p>
      </FadeContent>
    </div>
  );
};

export default ProjectLessons;
