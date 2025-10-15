import { Divider } from "@/app/components/divider";
import { BottomLeftCorner } from "@/app/components/home/hero/decorations/bottom-left-corner";
import { TopRightCorner } from "@/app/components/home/hero/decorations/top-right-corner";
import { Section } from "@/app/components/section";
import { ManyIcons } from "@/app/components/shapes/many-icons";
import MorphBlob from "@/app/components/shapes/test";
import { Text } from "@/app/components/text";
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
      <Text as="h1">
        Full-Stack Developer<span className="text-white">.</span>
      </Text>

      <Divider />
      <Text as="p">
        I like to craft solid and scalable frontend products with great user
        experiences.
      </Text>
      <div className="flex flex-row gap-4">
        <Text className="max-sm:text-xs text-sm">
          Highly skilled at progressive enhancement, design systems & UI
          Engineering.
        </Text>
        <Text className="max-sm:text-xs text-sm">
          Proven experience building successful products for clients across
          several countries.
        </Text>
      </div>
    </div>
    <div className="flex-1 flex flex-col items-center justify-center">
      <MorphBlob />
      <ManyIcons />
    </div>
  </Section>
);
