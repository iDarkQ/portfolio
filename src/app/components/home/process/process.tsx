import { Section } from "@/app/components/section";
import { AboutBanner } from "@/app/components/home/process/decorations/about-banner";
import { ProcessCard } from "@/app/components/home/process/process-card";

export const Process = () => (
  <Section
    className="bg-primary"
    extraClassName="flex-row gap-10 max-lg:flex-col"
  >
    <div className="flex-1">
      <ProcessCard />
    </div>
    <div className="flex-2">
      <AboutBanner />
    </div>
  </Section>
);
