import { Decoration } from "@/app/components/decoration";
import { ZigzagLine } from "@/app/components/shapes/zigzag-line";
import { ZigzagLineHorizontal } from "@/app/components/shapes/zigzag-line-horizontal";

export const StackDecorations = () => (
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
);
