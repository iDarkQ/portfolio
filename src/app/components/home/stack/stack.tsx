import { StackDecorations, StackHeading, StackList } from ".";
import { Section } from "@/app/components/section";

export const Stack = () => (
  <Section className="pt-0!" extraClassName="gap-10 relative">
    <StackHeading />
    <StackDecorations />
    <StackList />
  </Section>
);
