import { Decoration } from "@/app/components/decoration";
import { Divider } from "@/app/components/divider";
import { StackTechnology } from "@/app/components/home/stack/stack-technology";
import { Section } from "@/app/components/section";
import { ZigzagLine } from "@/app/components/shapes/zigzag-line";
import { ZigzagLineHorizontal } from "@/app/components/shapes/zigzag-line-horizontal";
import { Text } from "@/app/components/text";
import { StackData } from "@/app/data/stack-data";

export const Stack = () => (
  <Section className="pt-0!" extraClassName="gap-20 relative">
    <div data-aos="fade-right" className="flex flex-col w-full gap-y-5">
      <Text as="h2">
        My Stack
      </Text>
      <Divider />
    </div>
    <div className="left-0 top-0 absolute w-full h-full">
      <Decoration className="z-0 -top-5 right-[25%] rotate-110 opacity-35 scale-75">
        <ZigzagLine />
      </Decoration>
      <Decoration className="z-0 top-[35%] -right-15 rotate-45 opacity-50">
        <ZigzagLineHorizontal />
      </Decoration>
      <Decoration className="z-0 -bottom-[20%] max-md:-bottom-[15%] right-[30%] rotate-15 opacity-100">
        <ZigzagLine />
      </Decoration>
    </div>
    <div className="flex flex-col w-full gap-y-10">
      {Object.entries(StackData).map(([category, items]) => (
        <div
          key={category}
          className="flex w-full gap-6 max-md:flex-col-reverse"
        >
          <div className="z-1 flex flex-row flex-wrap gap-5 flex-3">
            {items.map((tech) => (
              <StackTechnology
                key={tech.name}
                name={tech.name}
                icon={tech.icon}
              />
            ))}
          </div>
          <div data-aos="flip-up" className="flex-1 h-fit">
            <Text as="h3" className="capitalize">
              {category}
            </Text>
          </div>
        </div>
      ))}
    </div>
  </Section>
);
