import { Section } from "@/app/components/section";
import { ResumeCard } from "@/app/resume/components/resume-card/resume-card";
import { ResumeDescription } from "@/app/resume/components/resume-description";
import { ResumeHeading } from "@/app/resume/components/resume-heading";

export default function Resume() {
  return (
    <Section extraClassName="gap-10" first>
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <ResumeHeading />
        <ResumeDescription />
      </div>
      <ResumeCard />
    </Section>
  );
}
