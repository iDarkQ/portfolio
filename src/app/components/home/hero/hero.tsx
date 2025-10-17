import { Divider } from "@/app/components/divider";
import { Section } from "@/app/components/section";
import {
  BottomLeftCorner,
  HeroHeader,
  HeroHighlights,
  HeroIcons,
  HeroImageBlob,
  HeroMessage,
  TopRightCorner,
} from ".";

import clsx from "clsx";

export const Hero = () => (
  <Section
    className={clsx(
      "min-h-[75vh] flex justify-center",
      "bg-[linear-gradient(90deg,var(--color-surface-1)_67%,var(--color-primary)_33%)]",
      "max-lg:bg-[linear-gradient(180deg,var(--color-surface-1)_67%,var(--color-primary)_33%)]"
    )}
    extraClassName={clsx(
      "flex-row items-stretch justify-between",
      "max-lg:flex-col"
    )}
    first
  >
    <BottomLeftCorner />
    <TopRightCorner />
    <div className="flex-1 gap-7 flex flex-col justify-center">
      <HeroHeader />

      <Divider />

      <HeroMessage />
      <HeroHighlights />
    </div>
    <div className="flex-1 flex flex-col items-center justify-center">
      <HeroImageBlob />
      <HeroIcons />
    </div>
  </Section>
);
