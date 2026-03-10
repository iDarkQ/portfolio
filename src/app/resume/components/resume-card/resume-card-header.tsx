import { darkResume, Text } from "@/app/components/text";

export const ResumeCardHeader = () => (
  <header className="gap-5 flex flex-col">
    <Text as="h1">Łukasz</Text>
    <Text
      as="h2"
      className={darkResume ? "text-neutral-90" : "text-light-on-background"}
    >
      Front-end Developer
    </Text>
    <Text className="md-paragraph pt-5">
      Front-end Developer who crafts clean, intuitive, and performant user
      interfaces, turning complex requirements into seamless experiences.
      Proven track record shipping production platforms generating 1M+ annual
      visits.
    </Text>
  </header>
);
