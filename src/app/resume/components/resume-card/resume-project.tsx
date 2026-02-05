import { ResumeProjectItem } from "@/app/resume/components/resume-card/resume-project-item";

export const ResumeProjects = () => (
  <ul className="flex flex-col gap-5">
    <ResumeProjectItem
      name="ROTUNDÁSPREITA"
      when="Nov 2025 - Present"
      description="Built a private exam and learning platform for a driving education client using Next.js, Prisma, and PostgreSQL, supporting user authentication, role-based access, and online testing workflows."
      keypoints={[
        "Created a responsive frontend with React and Next.js, implementing a clean, modular component architecture.",
        "Designed and developed the backend using Next.js, PostgreSQL, and Prisma, building RESTful APIs and database schemas to support user authentication, role-based access, project management, advertising modules, analytics, and other CRUD operations.",
        "Integrated full-stack features including social login, JWT authentication, and secure data handling.",
        "Deployed the platform on a VPS with Docker, CI/CD pipeline via GitHub Actions, ensuring zero downtime during production updates.",
      ]}
    />
    <ResumeProjectItem
      name="Better Bedrock"
      when="Oct 2024 - Present"
      description="I developed the frontend and backend infrastructure, design and
        functionality for Better Bedrock's web app powered by NextJS with NestJS"
      keypoints={[
        "Architected and built the backend infrastructure with NestJS and PostgreSQL, including RESTful APIs and data-modeling to support user authentication, role-based access, project creation, ad-system, analytics and other CRUD operations.",
        "Developed the responsive frontend for the Better Bedrock web app using NextJS with React, implementing clean component architecture.",
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
  </ul>
);
