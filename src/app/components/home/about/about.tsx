import { Card } from "@/app/components/card";
import { ScrollDownButton } from "@/app/components/home/scroll-down-button";
import { Section } from "@/app/components/section";
import { ZigzagLine } from "@/app/components/shapes/zigzag-line";
import { ZigzagLineHorizontal } from "@/app/components/shapes/zigzag-line-horizontal";
import { Text } from "@/app/components/text";
import clsx from "clsx";

export const About = () => (
  <Section className="lg:pt-10" extraClassName={clsx("items-center gap-10")}>
    <ScrollDownButton />
    <div
      className="relative w-full flex flex-row scroll-my-10 items-stretch"
      id="about"
    >
      <Card
        data-aos="fade-right"
        className="w-[55%] max-md:w-[100%]! h-auto flex flex-col justify-start gap-5"
      >
        <Text as="h2" className="text-start">
          Design
        </Text>
        <Text as="p" className="text-start">
          I&apos;m probably not the typical designer positioned behind an
          Illustrator artboard adjusting pixels, but I design. Immersed in
          stylesheets tweaking font sizes and contemplating layouts is where
          you&apos;ll find me (~_^). I&apos;m committed to creating fluent user
          experiences while staying fashionable.
        </Text>
      </Card>
      <div
        className={clsx(
          "absolute h-full w-[45%] right-0 px-10",
          "max-md:w-full max-md:px-0"
        )}
      >
        <div
          data-aos="flip-up"
          className="absolute max-md:-left-12 max-md:-top-17"
        >
          <svg
            viewBox="0 0 100 125"
            className="w-50 h-50"
            fill="var(--color-primary-80)"
          >
            <ZigzagLineHorizontal />
          </svg>
        </div>
        <div
          data-aos="flip-up"
          className="rotate-45 absolute bottom-10 right-10 max-md:-right-12 max-md:-bottom-17"
        >
          <svg
            viewBox="0 0 100 125"
            className="w-50 h-50"
            fill="var(--color-primary-80)"
          >
            <ZigzagLine />
          </svg>
        </div>
      </div>
    </div>
    <div className="relative w-full flex flex-row scroll-my-10 items-stretch">
      <div
        className={clsx(
          "z-1 absolute h-full w-[45%] left-0 px-10",
          "max-md:w-full max-md:px-0"
        )}
      >
        <div
          data-aos="flip-up"
          className="absolute right-25 rotate-45 max-md:hidden"
        >
          <svg
            viewBox="0 0 100 125"
            className="w-50 h-50"
            fill="var(--color-primary-80)"
          >
            <ZigzagLineHorizontal />
          </svg>
        </div>
        <div
          data-aos="flip-up"
          className="absolute bottom-0 max-md:-left-28 max-md:-bottom-17"
        >
          <svg
            viewBox="0 0 100 125"
            className="w-50 h-50"
            fill="var(--color-primary-80)"
          >
            <ZigzagLine />
          </svg>
        </div>
      </div>
      <Card
        data-aos="fade-left"
        className="w-[55%] ml-auto max-md:w-[100%]! h-auto flex flex-col justify-start gap-5"
      >
        <Text as="h2" className="text-start">
          Engineering
        </Text>
        <Text as="p" className="text-2xl text-start">
          In building JavaScript applications, I&apos;m equipped with just the
          right tools, and can absolutely function independently of them to
          deliver fast, resilient solutions optimized for scale — performance
          and scalability are priorities on my radar.
        </Text>
      </Card>
    </div>
  </Section>
);

/*

 <div className={clsx(
        "w-[45%] h-auto flex flex-col justify-around items-start px-10",
        "max-md:absolute max-md:h-full max-md:w-[100%] max-md:top-0 max-md:left-0 max-md:px-0"
      )}>
        <div data-aos="flip-up"
        className="max-md:left-10">
          <svg
            viewBox="0 0 100 125"
            className="w-50 h-50"
            fill="var(--color-primary-80)"
          >
            <ZigzagLineHorizontal />
          </svg>
        </div>
        <div
          data-aos="flip-up"
          className={clsx("w-full flex justify-center rotate-45", "max-md:justify-end")}
        >
          <svg
            viewBox="0 0 100 125"
            className="w-50 h-50"
            fill="var(--color-primary-80)"
          >
            <ZigzagLine />
          </svg>
        </div>
      </div>

*/
