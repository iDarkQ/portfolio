import { Section } from "@/app/components/section";
import { ZigzagLine } from "@/app/components/shapes/zigzag-line";
import { ZigzagLineHorizontal } from "@/app/components/shapes/zigzag-line-horizontal";

import {
  AboutScrollDownButton,
  AboutCardBackend,
  AboutCardFrontend,
  AboutDecorations,
  AboutPart,
} from ".";
import { Decoration } from "@/app/components/decoration";

export const About = () => (
  <Section className="lg:pt-10 pb-20" extraClassName="items-center gap-10">
    <AboutScrollDownButton />
    <AboutPart id="about">
      <AboutCardFrontend />
      <AboutDecorations className="right-0">
        <Decoration className="max-md:-left-12 max-md:-top-17 opacity-50">
          <ZigzagLineHorizontal />
        </Decoration>
        <Decoration className="rotate-45 bottom-10 right-10 max-md:-right-12 max-md:-bottom-17 opacity-75">
          <ZigzagLine />
        </Decoration>
      </AboutDecorations>
    </AboutPart>
    <AboutPart>
      <AboutDecorations className="z-1">
        <Decoration className="right-25 rotate-45 max-md:hidden opacity-45">
          <ZigzagLineHorizontal />
        </Decoration>
        <Decoration className="bottom-0 max-md:-left-28 max-md:-bottom-17 opacity-35">
          <ZigzagLine />
        </Decoration>
      </AboutDecorations>
      <AboutCardBackend />
    </AboutPart>
  </Section>
);
