import { darkResume, Text } from "@/app/components/text";

export const ResumeCardHeader = () => (
  <header className="gap-5 flex flex-col">
    <Text as="h1">Łukasz</Text>
    <Text
      as="h2"
      className={darkResume ? "text-neutral-90" : "text-light-on-background"}
    >
      Junior Full-stack Developer
    </Text>
    <Text className="md-paragraph pt-5">
      Engineer striving for expanding knowledge and driven by a long-living
      passion for programming. I don&apos;t just code, I craft quality,
      user-friendly and scalable products regardless of the stack.
    </Text>
  </header>
);
