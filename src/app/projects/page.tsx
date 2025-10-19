import { Divider } from "@/app/components/divider";
import { Section } from "@/app/components/section";
import { ProjectsHeading, ProjectsDescription, ProjectsList } from "@/app/projects/components";

export default function Project() {
  return (
    <Section extraClassName="gap-10" first>
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <ProjectsHeading />
        <ProjectsDescription />
      </div>
      <div className="inline-flex justify-center">
        <Divider />
      </div>
      <ProjectsList />
    </Section>
  );
}
