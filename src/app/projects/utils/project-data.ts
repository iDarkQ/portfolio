export interface ProjectData {
    name: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
}

export const projects: ProjectData[] = [
    {
        name: "Better Bedrock",
        description:
            "A web platform built around a Minecraft-based ecosystem: it lets users sign up, upload and manage their projects, browse and download works from others, and leave ratings and comments. Its purpose is to enable creators to share content, build reputation through community feedback, and receive money for each download via our ad provider.",
        image:
            "https://raw.githubusercontent.com/BetterBedrock/better_bedrock_web/main/docs/home.png",
        link: "https://github.com/BetterBedrock/better_bedrock_web",
        tags: [
            "React",
            "NestJS",
            "SCSS",
            "Typescript",
            "Prisma",
            "Postgres",
            "Turborepo",
            "Group Project",
        ],
    },
    {
        name: "Daylytic",
        description:
            "A web platform designed to turn big ambitions into everyday progress. You create an account, define your goals, break them into projects and tasks, track your progress, and get personalized motivation through an AI assistant. It brings clarity, structure, and momentum to actually achieving what you set out to do.",
        image:
            "https://raw.githubusercontent.com/Daylytic/daylytic/main/assets/daily-assistance-dark.png",
        link: "https://github.com/Daylytic/daylytic",
        tags: [
            "React",
            "Fastify",
            "CSS",
            "Typescript",
            "Prisma",
            "Postgres",
            "Turborepo",
            "AI",
        ],
    },
    {
        name: "RedLight Events Manager",
        description:
            "A web platform created as part of my internship application to Redlight.dev. It lets Redlight employees set up, browse, and manage sports events. Everything from registrations and participant lists to marking events complete or cancelled. Users can be assigned roles (e.g. admin, participant) with appropriate permissions.",
        image:
            "https://raw.githubusercontent.com/iDarkQ/redlight-events-manager/main/docs/preview.png",
        link: "https://github.com/iDarkQ/redlight-events-manager",
        tags: [
            "React",
            "NestJS",
            "CSS",
            "Typescript",
            "Prisma",
            "Swagger",
            "Turborepo",
            "OpenAPI",
        ],
    },
];
