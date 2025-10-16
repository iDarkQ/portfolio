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
      "py-40 max-lg:py-35 max-sm:py-20",
      "bg-[linear-gradient(90deg,var(--color-surface-1)_67%,var(--color-primary)_33%)]",
      "max-lg:bg-[linear-gradient(180deg,var(--color-surface-1)_67%,var(--color-primary)_33%)]"
    )}
    extraClassName={clsx(
      "flex-row items-stretch justify-between btn-pt",
      "max-lg:flex-col"
    )}
  >
    <BottomLeftCorner />
    <TopRightCorner />
    <div className="flex-1 gap-7 flex flex-col">
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
