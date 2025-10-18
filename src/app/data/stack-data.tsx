import { ReactNode } from "react";
import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiSass,
  SiAntdesign,
  SiTailwindcss,
  SiVite,
  SiWebpack,
  SiPwa,
  SiFastify,
  SiNestjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiMongodb,
  SiPrisma,
  SiSwagger,
  SiZod,
  SiEslint,
  SiGithub,
  SiGit,
  SiPostman,
  SiPrettier,
  SiTurborepo,
  SiOpenapiinitiative,
  SiStripe,
  SiNginx,
  SiHtml5,
  SiCss3,
  SiReacthookform,
} from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

interface StackItem {
  name: string;
  icon: ReactNode;
  color: string;
}

interface StackData {
  [category: string]: StackItem[];
}

const iconClassName = "h-8 w-8";

export const StackData: StackData = {
  frontend: [
    // Core languages
    {
      name: "HTML",
      icon: <SiHtml5 className={iconClassName} />,
      color: "#000000",
    },
    {
      name: "CSS",
      icon: <SiCss3 className={iconClassName} />,
      color: "#000000",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className={iconClassName} />,
      color: "#000000",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className={iconClassName} />,
      color: "#000000",
    },

    // Frameworks & libraries
    {
      name: "React",
      icon: <SiReact className={iconClassName} />,
      color: "#000000",
    },
    {
      name: "Next.js",
      icon: <RiNextjsLine className={iconClassName} />,
      color: "#000000",
    },
    {
      name: "RHF",
      icon: <SiReacthookform className={iconClassName} />,
      color: "#000000",
    },

    // Styling
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className={iconClassName} />,
      color: "#000000",
    },
    {
      name: "Sass",
      icon: <SiSass className={iconClassName} />,
      color: "#000000",
    },
    {
      name: "Ant Design",
      icon: <SiAntdesign className={iconClassName} />,
      color: "#000000",
    },

    // Build tools
    {
      name: "Vite",
      icon: <SiVite className={iconClassName} />,
      color: "#000000",
    },
    {
      name: "Webpack",
      icon: <SiWebpack className={iconClassName} />,
      color: "#000000",
    },

    // Extras
    {
      name: "PWA",
      icon: <SiPwa className={iconClassName} />,
      color: "#000000",
    },
  ],

  backend: [
    // Core language
    {
      name: "JavaScript",
      icon: <SiJavascript className={iconClassName} />,
      color: "#000000",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className={iconClassName} />,
      color: "#000000",
    },

    // Frameworks
    {
      name: "ExpressJS",
      icon: <SiExpress className={iconClassName} />,
      color: "#000000",
    },
    {
      name: "Fastify",
      icon: <SiFastify className={iconClassName} />,
      color: "#000000",
    },
    {
      name: "NestJS",
      icon: <SiNestjs className={iconClassName} />,
      color: "#000000",
    },

    // Databases
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className={iconClassName} />,
      color: "#000000",
    },
    {
      name: "MySQL",
      icon: <SiMysql className={iconClassName} />,
      color: "#000000",
    },
    {
      name: "SQLite",
      icon: <SiSqlite className={iconClassName} />,
      color: "#000000",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className={iconClassName} />,
      color: "#000000",
    },

    // ORM
    {
      name: "Prisma",
      icon: <SiPrisma className={iconClassName} />,
      color: "#000000",
    },

    // Validation & API docs
    {
      name: "Zod",
      icon: <SiZod className={iconClassName} />,
      color: "#000000",
    },
    {
      name: "Swagger",
      icon: <SiSwagger className={iconClassName} />,
      color: "#000000",
    },
    {
      name: "OpenAPI",
      icon: <SiOpenapiinitiative className={iconClassName} />,
      color: "#000000",
    },

    // Services & infra
    {
      name: "Stripe",
      icon: <SiStripe className={iconClassName} />,
      color: "#000000",
    },
    {
      name: "Nginx",
      icon: <SiNginx className={iconClassName} />,
      color: "#000000",
    },
  ],

  tools: [
    // Workflow / monorepo
    {
      name: "Turborepo",
      icon: <SiTurborepo className={iconClassName} />,
      color: "#000000",
    },

    // Version control
    {
      name: "Git",
      icon: <SiGit className={iconClassName} />,
      color: "#000000",
    },
    {
      name: "GitHub",
      icon: <SiGithub className={iconClassName} />,
      color: "#000000",
    },

    // Editor
    {
      name: "VS Code",
      icon: <VscVscode className={iconClassName} />,
      color: "#000000",
    },

    // API testing
    {
      name: "Postman",
      icon: <SiPostman className={iconClassName} />,
      color: "#000000",
    },

    // Linting & formatting
    {
      name: "ESLint",
      icon: <SiEslint className={iconClassName} />,
      color: "#000000",
    },
    {
      name: "Prettier",
      icon: <SiPrettier className={iconClassName} />,
      color: "#000000",
    },
  ],
};
