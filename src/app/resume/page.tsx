import { Divider } from "@/app/components/divider";
import { Section } from "@/app/components/section";
import { ResumeHeading, ResumeDescription, ResumeCard } from "@/app/resume/components";

export default function Resume() {
  return (
    <Section extraClassName="gap-10" first>
      <div className="w-full flex flex-col items-center justify-center gap-5">
        <ResumeHeading />
        <ResumeDescription />
      </div>
      <div className="inline-flex justify-center">
        <Divider />
      </div>
      <ResumeCard />
    </Section>
  );
}
