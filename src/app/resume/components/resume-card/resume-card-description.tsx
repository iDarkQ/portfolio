import { Text } from "@/app/components/text";
import { ResumeExperiences } from "@/app/resume/components/resume-card";
import { ResumeProjects } from "@/app/resume/components/resume-card";

export const ResumeCardDescription = () => (
  <section className="flex flex-col gap-5">
    <Text as="h3">Experience</Text>
    <ResumeExperiences />
    <Text as="h3">Projects</Text>
    <ResumeProjects />
  </section>
);
