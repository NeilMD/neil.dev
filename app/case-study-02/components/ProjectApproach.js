import FadeContent from "@/components/Animations/FadeContent/FadeContent";
import { CodeBlock } from "@/components/ui/code-block";
import React from "react";

const ProjectApproach = () => {
  const logger = `
    [18:41:12.009] INFO (57426): REQUEST URL: /api/auth/login
    [18:41:12.009] INFO (57426): REQUEST METHOD: POST
    [18:41:12.009] INFO (57426): rbacMiddleware: START
    [18:41:12.009] INFO (57426): rbacMiddleware: END
    [18:41:12.010] INFO (57426): rateLimiterMiddleware: START
    [18:41:12.010] INFO (57426): rateLimiterMiddleware: END
    [18:41:12.010] INFO (57426): AuthController/login: START
    [18:41:12.101] INFO (57426): AuthController/login: END
  `;

  const configRbac = `
    module.exports = [
      {
        path: "/api/project/user/*",
        methods: {
          GET: ["user"], // Only 'user' can GET their own projects
        },
      },
      {
        path: "/api/project",
        methods: {
          GET: ["user", "guest"], // Both 'user' and 'guest' can GET all projects
        },
      },
    ];
  `;

  const folderStructure = `
    ├── build/                  # Build output directory(For React projects that are built)
    ├── config/                 # Configuration files (e.g., database, environment)
    ├── controllers/            # Controller logic for handling requests
    ├── data/                   # Dummy Data(Depracated)
    ├── middleware/             # Middleware functions
    ├── models/                 # Database models
    ├── node_modules/           # Project dependencies
    ├── public/                 # Public assets (e.g., images, frontend files)
    ├── routes/                 # Application routes
    ├── ssl/                    # SSL certificate and private key
    ├── utils/                  # Utility functions
    ├── validators/             # Validation logic for data inputs
    ├── db.js                   # Database connection file
    ├── package.json            # Project manifest (dependencies, scripts, etc.)
    ├── pnpm-lock.yaml          # Lockfile for exact dependency versions
    └── server.js               # Entry point for starting the server
  `;

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
        <div className="flex flex-col ">
          <FadeContent
            blur={false}
            duration={600}
            easing="ease-out"
            initialOpacity={0}
            className="flex-2/6 text-xl font-medium block mb-2"
          >
            <span>Establishing a Clear Project Architecture</span>
          </FadeContent>
          <FadeContent
            blur={false}
            duration={700}
            easing="ease-out"
            initialOpacity={0}
            className=" flex-4/6 mb-2 text-justify text-zinc-800"
          >
            <p className="mb-2">
              I started by building a modular structure separating controllers,
              routes, models, middlewares, and utilities. This separation helped
              ensure maintainability and cleaner collaboration for future
              developers.
            </p>
            <CodeBlock
              language="javascript"
              filename="Folder Configuration "
              code={folderStructure}
            />
          </FadeContent>
        </div>
        <br />
        <div className="flex flex-col ">
          <FadeContent
            blur={false}
            duration={600}
            easing="ease-out"
            initialOpacity={0}
            className="flex-2/6 text-xl font-medium block mb-2"
          >
            <span>Logging for Clarity and Debugging</span>
          </FadeContent>
          <FadeContent
            blur={false}
            duration={700}
            easing="ease-out"
            initialOpacity={0}
            className="flex-4/6 mb-2 text-justify text-zinc-800"
          >
            <p className="mb-2">
              I implemented a detailed logging system to trace every request:
            </p>
            <CodeBlock
              language="javascript"
              filename="Sample Login Logs"
              code={logger}
            />
            <p className="mt-2">
              This helped me trace execution flow and detect issues quickly.
            </p>
          </FadeContent>
        </div>
        <br />
        <div className="flex flex-col">
          <FadeContent
            blur={false}
            duration={600}
            easing="ease-out"
            initialOpacity={0}
            className="flex-2/6 text-xl font-medium block mb-2"
          >
            <span>Building Role-Based Access from the Ground Up</span>
          </FadeContent>
          <FadeContent
            blur={false}
            duration={700}
            easing="ease-out"
            initialOpacity={0}
            className="flex-4/6 mb-2 text-justify"
          >
            <p className="mb-2">
              I centralized the access control logic in a single configuration
              file. This allowed mapping specific API endpoints and HTTP methods
              to roles, simplifying the process of managing who could do what.
            </p>
            <CodeBlock
              language="javascript"
              filename="RBAC Configuration "
              code={configRbac}
            />
          </FadeContent>
        </div>
        <br />
      </div>
    </div>
  );
};

export default ProjectApproach;
