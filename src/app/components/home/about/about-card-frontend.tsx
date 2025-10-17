import { AboutCard } from "@/app/components/home/about/about-card";
import { Text } from "@/app/components/text";

export const AboutCardFrontend = () => (
  <AboutCard data-aos="fade-right">
    <Text as="h2" className="text-start">
      Frontend
    </Text>
    <Text as="p" className="text-start">
      I’m not only a perfectionist in what user sees, but also in what developer
      experiences. In my free time, you will catch me refining and simplifying
      components, animations, and layouts. I don&apos;t admire complexity, but
      simplicity. I live for building interfaces that feel smooth, intuitive,
      and just a little bit magical ✨
    </Text>
  </AboutCard>
);
