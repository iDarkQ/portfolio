import { Card } from "@/app/components/card";
import { Divider } from "@/app/components/divider";
import { List } from "@/app/components/list";
import { darkResume, Text } from "@/app/components/text";
import { ResumeCardLink } from "@/app/resume/components/resume-card/resume-card-link";

import { ResumeProjects } from "@/app/resume/components/resume-card/resume-project";
import clsx from "clsx";

export const ResumeCard = () => (
  <Card
    className={clsx("flex flex-row max-lg:flex-col", !darkResume && "bg-white")}
  >
    <div className="gap-10 flex flex-col pb-10">
      <section className="flex flex-col gap-1">
        <ResumeCardLink link="https://idarkq.dev/">idarkq.dev</ResumeCardLink>
        <ResumeCardLink link="mailto:idarkq.dev@gmail.com">idarkq.dev@gmail.com</ResumeCardLink>
        <ResumeCardLink link="https://github.com/iDarkQ">github.com/iDarkQ</ResumeCardLink>
        <ResumeCardLink link="tel:+351927402792">+351 927 402 792</ResumeCardLink>
        <Text>Coimbra, Portugal</Text>
      </section>
      <section className="flex flex-col gap-5">
        <Text as="h3">Core Technologies:</Text>
        <List
          className="max-lg:[&>*]:inline-flex!"
          items={[
            "Turborepo",
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "TypeScript",
            "Fastify",
            "Sass",
            "NestJS",
            "ExpressJS",
            "Tailwind",
            "NodeJS",
            "Next.js",
            "PostgresSQL",
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
          items={["English C2", "Polish C2", "Portuguese B2+"]}
        />
      </section>
    </div>
    <article className="gap-10 flex flex-col">
      <header className="gap-5 flex flex-col">
        <Text as="h1">Łukasz</Text>
        <Text
          as="h2"
          className={
            darkResume ? "text-neutral-90" : "text-light-on-background"
          }
        >
          Junior Full-stack Developer
        </Text>
        <Text className="md-paragraph pt-5">
          Engineer striving for expanding knowledge and driven by a long-living
          passion for programming. I don&apos;t just code, I craft quality,
          user-friendly and scalable products regardless of the stack.
        </Text>
      </header>
      <Divider infinite />
      <section className="flex flex-col gap-5">
        <Text as="h3">Projects</Text>
        <Text as="p" className="md-paragraph">
          I’ve worked on a handful of web projects, utilizing various
          technologies, here is the list of my proudest work:
        </Text>
        <ResumeProjects />
      </section>
    </article>
  </Card>
);
