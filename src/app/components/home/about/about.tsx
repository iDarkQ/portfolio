import { Section } from "@/app/components/section";
import { ZigzagLine } from "@/app/components/shapes/zigzag-line";
import { ZigzagLineHorizontal } from "@/app/components/shapes/zigzag-line-horizontal";

import {
  AboutScrollDownButton,
  AboutCardBackend,
  AboutCardFrontend,
  AboutDecorationItem,
  AboutDecorations,
  AboutPart,
} from ".";

export const About = () => (
  <Section className="lg:pt-10" extraClassName="items-center gap-10">
    <AboutScrollDownButton />
    <AboutPart id="about">
      <AboutCardFrontend />
      <AboutDecorations className="right-0">
        <AboutDecorationItem className="max-md:-left-12 max-md:-top-17">
          <ZigzagLineHorizontal />
        </AboutDecorationItem>
        <AboutDecorationItem className="rotate-45 bottom-10 right-10 max-md:-right-12 max-md:-bottom-17">
          <ZigzagLine />
        </AboutDecorationItem>
      </AboutDecorations>
    </AboutPart>
    <AboutPart>
      <AboutDecorations className="z-1">
        <AboutDecorationItem className="right-25 rotate-45 max-md:hidden">
          <ZigzagLineHorizontal />
        </AboutDecorationItem>
        <AboutDecorationItem className="bottom-0 max-md:-left-28 max-md:-bottom-17">
          <ZigzagLine />
        </AboutDecorationItem>
      </AboutDecorations>
      <AboutCardBackend />
    </AboutPart>
  </Section>
);
