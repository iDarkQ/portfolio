import { Text } from "@/app/components/text";
import { ResumeProjects } from "@/app/resume/components/resume-card/resume-project";

export const ResumeCardDescription = () => (
  <section className="flex flex-col gap-5">
    <Text as="h3">Experience</Text>
    <Text as="p" className="md-paragraph">
      I’ve worked on a handful of web projects, utilizing various technologies,
      here is the list of my proudest work:
    </Text>
    <ResumeProjects />
  </section>
);
