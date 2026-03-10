import { ResumeProjectItem } from "@/app/resume/components/resume-card/resume-project-item";

export const ResumeExperiences = () => (
  <ul className="flex flex-col gap-5">
    <ResumeProjectItem
      name="ROTUNDÁSPREITA"
      when="Nov 2025 - Present"
      description=""
      keypoints={[
        "Built and launched a full-stack exam platform in React, Next.js, Prisma, and PostgreSQL, serving 80+ active clients preparing for official IMT driving instructor certification",
        "Developed an interactive testing engine featuring 1,000+ original IMT-sourced questions, with result tracking, progress history, and exam simulation workflows",
        "Containerized the entire stack with Docker and configured a blue-green CI/CD pipeline via GitHub Actions on a private VPS, achieving zero-downtime production deployments",
        "Worked directly with the client through the full product lifecycle — from requirements gathering to iterative feature delivery — maintaining a close feedback loop to ensure the platform met real-world instructional needs.",
      ]}
    />
    <ResumeProjectItem
      name="Better Bedrock"
      when="Oct 2024 - Present"
      description=""
      keypoints={[
        "Built the platform from the ground up in React, later spearheading a full migration to Next.js — improving SEO performance by 60% and reducing initial page load time by 40%",
        "Scaled the platform to 1M+ annual visits, delivering a fast, responsive experience under real production traffic demands",
        "Architected and maintained the NestJS + PostgreSQL backend, building RESTful APIs supporting user authentication, role-based access, content management, an ad system, and analytics",
        "Collaborated in a team of 3 developers, integrating a blue-green CI/CD pipeline via GitHub Actions on a private VPS, maintaining 99.99% uptime in production",
        "Worked closely with a UX/UI designer to implement production-ready components with a consistent, polished design system",
      ]}
    />
  </ul>
);
