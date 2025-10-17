import { HeroHighlightMessage } from "@/app/components/home/hero/hero-highlight-message";

export const HeroHighlights = () => (
  <div className="flex flex-row gap-4 max-lg:pt-10 max-md:pt-5">
    <HeroHighlightMessage>
      Always focused at building scalable full stack solutions grounded in best
      practices at their core.
    </HeroHighlightMessage>
    <HeroHighlightMessage>
      Creating and managing apps used by hundreds of thousands of people
      worldwide.
    </HeroHighlightMessage>
  </div>
);
