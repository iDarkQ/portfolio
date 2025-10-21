import { ResumeProjectItem } from "@/app/resume/components/resume-card/resume-project-item";

export const ResumeProjects = () => (
  <ul className="flex flex-col gap-5">
    <ResumeProjectItem
      name="Better Bedrock"
      when="Oct 2024 - Present"
      description="I developed the frontend and backend infrastructure, design and
        functionality for Better Bedrock's web app powered by React"
      keypoints={[
        "Architected and built the backend infrastructure with NestJS and PostgreSQL, including RESTful APIs and data-modeling to support user authentication, role-based access, project creation, ad-system, analytics and other CRUD operations.",
        "Developed the responsive frontend for the Better Bedrock web app using React, implementing clean component architecture.",
        "Integrated full-stack features including Social login, JWT authentication, and secure data flows.",
        "Deployed the platform on a VPS with CI/CD pipeline using GitHub Actions, achieving zero downtime on production releases.",
        "Collaborated with UX/UI designer to create designs  for production-ready components.",
      ]}
    />
    <ResumeProjectItem
      name="Daylytic"
      when="Dec 2024 - May 2025"
      description="I developed a modern goal-achievement web app featuring routine tracking, project management, analytics, and AI-driven insights. Implemented with React (Ant Design), Fastify, PostgreSQL/Prisma, and Turborepo in a monorepo architecture."
      keypoints={[
        "Architected and implemented the backend APIs using Fastify, leveraging PostgreSQL with Prisma for data modelling (goals, projects, tasks, sessions) and schema validation via Zod for robust type-safety.",
        "Integrated productivity features such as the built-in work-session timer (“Timelytic”), Markdown-based note-taking, and drag-&-drop task organization, enhancing user engagement through interactive UI components.",
        "Developed the UI in React with Ant Design, implementing modules for routine tracking, goal/project management, calendar view and AI-powered daily assistance.",
      ]}
    />
    <ResumeProjectItem
      name="RedLight Events Manager (application project)"
      when="Jun 2025 - Jul 2025"
      description="Built an internal platform for Redlight to manage company sports events. Developed in a Turborepo setup with a React + Vite frontend and a NestJS + Prisma/PostgreSQL backend."
      keypoints={[
        "Designed and implemented RESTful APIs with role-based access, JWT authentication, and CRUD operations for events and participants.",
        "Added advanced features beyond the scope, including image uploads, Markdown event descriptions, admin role management, and calendar export Google Calendar.",
        "Built intuitive event-listing and registration interfaces with map-based location selection and guest access.",
      ]}
    />
  </ul>
);
