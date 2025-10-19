import { ProcessBanner, ProcessCard } from ".";
import { Section } from "@/app/components/section";

export const Process = () => (
  <Section
    className="bg-primary"
    extraClassName="flex-row gap-10 max-lg:flex-col"
  >
    <div className="flex-1">
      <ProcessCard />
    </div>
    <div className="flex-2">
      <ProcessBanner />
    </div>
  </Section>
);
