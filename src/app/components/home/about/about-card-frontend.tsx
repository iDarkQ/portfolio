import { AboutCard } from "@/app/components/home/about/about-card";
import { Text } from "@/app/components/text";

export const AboutCardFrontend = () => (
  <AboutCard data-aos="fade-right">
    <Text as="h2" className="text-start">
      Frontend
    </Text>
    <Text as="p" className="text-start">
      I’m not the kind of developer endlessly nudging pixels in Photoshop, but
      you’ll catch me deep in React components, CSS variables, and responsive
      layouts. Whether it’s refining animations or debugging browser quirks, I
      live for crafting interfaces that feel smooth, intuitive, and just a
      little bit magical ✨
    </Text>
  </AboutCard>
);
