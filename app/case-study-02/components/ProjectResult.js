import AnimatedContent from "@/components/Animations/AnimatedContent/AnimatedContent";
import FadeContent from "@/components/Animations/FadeContent/FadeContent";
import React from "react";

const ProjectResult = () => {
  return (
    <div className="h-full bg-white p-8 rounded-2xl shadow-2xl z-20">
      <FadeContent
        blur={false}
        duration={300}
        easing="ease-out"
        initialOpacity={0}
      >
        <h4 className="text-4xl md:text-5xl font-semibold font-serif mb-3">
          Result
        </h4>
        <p className="text-zinc-800">
          To ensure secure and seamless user authentication, I implemented a
          hybrid system combining JWT-based authentication and Google OAuth 2.0
          via Auth0/Passport.js.
        </p>
      </FadeContent>

      <br />
      <FadeContent
        blur={false}
        duration={600}
        easing="ease-out"
        initialOpacity={0}
      >
        <span className="text-xl font-medium block mb-2">
          JWT Authentication
        </span>
      </FadeContent>
      <FadeContent
        blur={false}
        duration={700}
        easing="ease-out"
        initialOpacity={0}
        className="text-zinc-800"
      >
        <p className="mb-2 text-justify text-black">
          I used access and refresh tokens to maintain secure, stateless
          sessions:
        </p>
        <ul className="list-disc pl-5 mb-2 text-zinc-700">
          <li>
            <span className="font-semibold text-black">Access Token: </span>Upon
            login, a short-lived JWT (15 minutes) is generated containing user
            ID and role. It is stored in memory and sent in the Authorization
            header (Bearer access_token) for secure API communication. This
            minimizes exposure to XSS vulnerabilities.
          </li>
          <li>
            <span className="font-semibold text-black">Refresh Token: </span>A
            long-lived (7-day) refresh token is issued and stored securely in an
            HttpOnly cookie, inaccessible to JavaScript. When the access token
            expires, the client automatically requests a new one via a secure
            endpoint.
          </li>
        </ul>
        <p>
          This approach provides robust protection against common attacks (e.g.,
          XSS) while eliminating the need for CSRF protection, since Bearer
          tokens are manually attached and not sent automatically by the
          browser.
        </p>
      </FadeContent>
      <br />
      <FadeContent
        blur={false}
        duration={600}
        easing="ease-out"
        initialOpacity={0}
      >
        <span className="text-xl font-medium block mb-2">
          Google OAuth Integration
        </span>
      </FadeContent>
      <FadeContent
        blur={false}
        duration={700}
        easing="ease-out"
        initialOpacity={0}
        className="text-zinc-800"
      >
        <p className="mb-2 text-justify text-black">
          I also support login via Google accounts using Passport.js:
        </p>
        <ul className="list-disc pl-5 mb-2 text-zinc-700">
          <li>
            <span className="font-semibold text-black">OAuth Flow: </span>Users
            authenticate through Google’s OAuth consent screen, redirected from
            /api/auth/login/google. Upon success, Google returns to our callback
            endpoint (/api/auth/login/google/callback), where Passport verifies
            and extracts user data.
          </li>
          <li>
            <span className="font-semibold text-black">Configuration: </span>
            Google OAuth is configured using a client ID/secret from Google
            Cloud Console, with minimal scopes (["profile"]) and no server-side
            session (session: false).
          </li>
          <li>
            <span className="font-semibold text-black">Token Handling: </span>
            After authentication, I generate a JWT token for session management,
            sent in the Authorization header for subsequent requests.
          </li>
        </ul>
        <p>
          This dual-authentication approach ensures flexibility, user
          convenience, and security best practices — enabling both traditional
          email-based logins and third-party OAuth with minimal risk exposure.
        </p>
      </FadeContent>
      <br />
    </div>
  );
};

export default ProjectResult;
