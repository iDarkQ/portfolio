import { Card } from "@/app/components/card";
import { Divider } from "@/app/components/divider";
import { List } from "@/app/components/list";
import { Text } from "@/app/components/text";
import { ResumeProjects } from "@/app/resume/components/resume-card/resume-project";

export const ResumeCard = () => (
  <Card className="flex flex-row max-lg:flex-col">
    <div className="gap-10 flex flex-col pb-10">
      <section className="flex flex-col gap-1 max-lg:hidden">
        <Text className="text-primary-80!">iDarkQ</Text>
        <Text>Coimbra, Portugal</Text>
        <Text className="text-primary-80!">idarkq.dev@gmail.com</Text>
      </section>
      <section className="flex flex-col gap-5">
        <Text as="h3">Core Technologies:</Text>
        <List
          className="max-lg:[&>*]:inline-flex!"
          items={[
            "JavaScript",
            "React",
            "TypeScript",
            "Fastify",
            "Sass",
            "NestJS",
            "ExpressJS",
            "ESNext",
            "Tailwind",
            "NodeJS",
            "Next.js",
            "Postgres",
            "Prisma",
          ]}
        />
      </section>
      <section className="flex flex-col gap-5">
        <Text as="h3">Others:</Text>
        <List
          className="max-lg:[&>*]:inline-flex!"
          items={[
            "Responsive Web Design",
            "Software Testing",
            "SE Optimization",
            "PWAs",
            "Performance Optimization",
            "Progressive Enhancement",
            "Build Automation",
            "Next.js",
          ]}
        />
      </section>
      <section className="flex flex-col gap-5">
        <Text as="h3">Languages:</Text>
        <List
          className="max-lg:[&>*]:inline-flex!"
          items={["English C2", "Polish C2", "Portuguese B2"]}
        />
      </section>
    </div>
    <article className="gap-10 flex flex-col">
      <header className="gap-5 flex flex-col">
        <Text as="h1">Łukasz</Text>
        <Text as="h2" className="text-white">
          Junior Full-stack Developer
        </Text>
        <Text className="md-paragraph pt-5">
          Engineer striving for expanding knowledge and driven by long-living
          passion to programming. I don&apos;t just code, I craft quality,
          user-friendly and scalable products regardless of stack.
        </Text>
      </header>
      <Divider infinite />
      <section className="flex flex-col gap-5">
        <Text as="h3">Projects</Text>
        <Text as="p" className="md-paragraph">
          I’ve worked on a handful of web projects, each with a purpose, and
          each publicly available along the source code:
        </Text>
        <ResumeProjects />
      </section>
    </article>
  </Card>
);
