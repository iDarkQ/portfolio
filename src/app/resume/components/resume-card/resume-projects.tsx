import { ResumeProjectItem } from "@/app/resume/components/resume-card/resume-project-item";

export const ResumeProjects = () => (
  <ul className="flex flex-col gap-5">
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
