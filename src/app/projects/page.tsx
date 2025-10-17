import { Section } from "@/app/components/section";
import { ProjectsDescription } from "@/app/projects/components/projects-description";
import { ProjectsHeading } from "@/app/projects/components/projects-heading";
import { ProjectsList } from "@/app/projects/components/projects-list";

export default function Project() {
  return (
    <Section extraClassName="gap-10" first>
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <ProjectsHeading />
        <ProjectsDescription />
      </div>
      <ProjectsList />
    </Section>
  );
}
